// pages/api/getProduct.js
import apiClient from "@/shared/api/const";
import { NextResponse } from "next/server";

export async function POST() {
  try {
    const response = await apiClient.post(
      "/2/menu/by_id",
      {
        externalMenuId: "35444",
        organizationIds: ["32c916c9-4f8f-4625-a435-a9ef7ed9fc13"],
        version: 2,
        language: "en",
        asyncMode: false,
        startRevision: 0,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

    return NextResponse.json(response.data);
  } catch (error) {
    console.error("Ошибка при получении товара:", error);
    return NextResponse.json(
      { message: "Ошибка сервера при получении товара" },
      { status: 500 },
    );
  }
}
// export async function POST() {
//   try {
//     const response = await apiClient.post(
//       "/2/menu",
//       {},
//       {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       },
//     );

//     return NextResponse.json(response.data);
//   } catch (error) {
//     console.error("Ошибка при получении товара:", error);
//     return NextResponse.json(
//       { message: "Ошибка сервера при получении товара" },
//       { status: 500 },
//     );
//   }
// }
