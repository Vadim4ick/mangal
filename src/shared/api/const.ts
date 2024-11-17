/* eslint-disable @typescript-eslint/no-explicit-any */
// import axios from "axios";

// export const $api = axios.create({
//   baseURL: "https://api-ru.iiko.services/api",
// });

// let accessToken = null as string | null;

// // const fetchAccessToken = async () => {
// //   const response = await $api.post("/1/access_token", {
// //     apiLogin: "185837a5b1b3497687eb10d96e03f679",
// //   });
// //   accessToken = response.data.token;
// // };

// const fetchAccessToken = async () => {
//   const response = await fetch("/api/getToken", {
//     method: "POST",
//   });
//   const data = await response.json();
//   accessToken = data.token;
// };

// $api.interceptors.request.use(async (config) => {
//   if (!accessToken) {
//     await fetchAccessToken();
//   }
//   config.headers["Authorization"] = `Bearer ${accessToken}`;
//   return config;
// });

// $api.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     if (error.response && error.response.status === 401) {
//       await fetchAccessToken();
//       error.config.headers["Authorization"] = `Bearer ${accessToken}`;
//       return $api.request(error.config);
//     }
//     return Promise.reject(error);
//   },
// );

// lib/apiClient.js
import axios from "axios";

let accessToken = null as string | null;
let refreshingToken = false as boolean;
let subscribers = [] as any[];

const apiClient = axios.create({
  baseURL: "https://api-ru.iiko.services/api",
});

// Функция для обновления токена
async function refreshToken() {
  if (refreshingToken) {
    // Если запрос на обновление токена уже выполняется, возвращаем обещание
    return new Promise((resolve) => {
      subscribers.push(resolve);
    });
  }

  refreshingToken = true;

  try {
    const response = await axios.post(
      "https://api-ru.iiko.services/api/1/access_token",
      { apiLogin: process.env.API_LOGIN || "185837a5b1b3497687eb10d96e03f679" },
    );

    accessToken = response.data.token;
    refreshingToken = false;
    // Оповещаем всех ожидающих о новом токене
    subscribers.forEach((callback) => callback(accessToken));
    subscribers = [];
  } catch (error) {
    refreshingToken = false;
    console.error("Ошибка при обновлении токена:", error);
    throw error;
  }
}

// Интерсептор для автоматического добавления токена и обновления, если он истек
apiClient.interceptors.request.use(
  async (config) => {
    if (!accessToken) {
      await refreshToken();
    }
    config.headers.Authorization = `Bearer ${accessToken}`;
    return config;
  },
  (error) => Promise.reject(error),
);

apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const { config, response } = error;
    if (response && response.status === 401 && !config._retry) {
      config._retry = true;
      // Обновляем токен
      await refreshToken();
      config.headers.Authorization = `Bearer ${accessToken}`;
      return apiClient(config);
    }
    return Promise.reject(error);
  },
);

export default apiClient;
