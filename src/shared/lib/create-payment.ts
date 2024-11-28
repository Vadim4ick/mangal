/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";

export interface PaymentDetails {
  description: string;
  amount: number;
  metadata: any;
}

export async function createPayment(details: PaymentDetails) {
  const { data } = await axios({
    method: "post",
    url: "https://api.yookassa.ru/v3/payments",
    headers: {
      "Content-Type": "application/json",
      "Idempotence-Key": Date.now(),
    },
    auth: {
      username: process.env.YOOKASSA_STORE_ID as string,
      password: process.env.YOOKASSA_API_KEY as string,
    },
    data: {
      amount: {
        value: details.amount,
        currency: "RUB",
      },
      confirmation: {
        type: "redirect",
        return_url: process.env.NEXT_PUBLIC_FRONT_URL as string,
      },
      payment_method_data: {
        type: "bank_card",
      },
      capture: true,
      description: details.description,
      metadata: {
        ...details.metadata,
      },

      receipt: {
        customer: {
          email: "customer@example.com",
          phone: "+79000000000",
        },
      },
    },
  });

  return { data };
}
export const checkPaymentFx = async ({ paymentId }: { paymentId: string }) => {
  try {
    const { data } = await axios.post("/api/check-payment", { paymentId });

    return data;
  } catch (error) {
    console.error("Ошибка при проверке заказа:", (error as Error)?.message);
  }
};

// {
//   amount: {
//     value: details.amount,
//     currency: "RUB",
//   },
//   confirmation: {
//     type: "redirect",
//     return_url: process.env.NEXT_PUBLIC_FRONT_URL as string,
//   },
//   payment_method_data: {
//     type: "bank_card",
//   },
//   capture: true,
//   description: details.description,
//   metadata: {
//     ...details.metadata,
//   },

//   receipt: {
//     customer: {
//       email: "customer@example.com",
//       phone: "+79000000000",
//     },
//     items: [
//       {
//         description: "Название товара",
//         quantity: "1.00",
//         amount: {
//           value: "165.00",
//           currency: "RUB",
//         },
//         vat_code: 1, // Код ставки НДС (объяснение ниже)
//         payment_mode: "full_payment", // Полная оплата
//         payment_subject: "commodity", // Тип товара
//       },
//     ],
//   },
// }
