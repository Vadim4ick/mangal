/* eslint-disable @typescript-eslint/no-explicit-any */
import { BasketItem } from "@/store/basket";
import axios from "axios";

export interface PaymentDetails {
  description: string;
  amount: number;
  metadata: any;
  customer: {
    phone: string;
  };
  basket: BasketItem[];
}

function formatPhoneNumber(phone: string): string {
  // Remove all non-digit characters except the leading +
  const formatted = phone.replace(/[^\d+]/g, "");

  // If the phone number starts with +7 and has 12 characters, it's correct
  if (/^\+7\d{10}$/.test(formatted)) {
    return formatted;
  }

  // If the phone number starts with 8 and has 11 characters, replace the 8 with +7
  if (/^8\d{10}$/.test(formatted)) {
    return "+7" + formatted.slice(1);
  }

  // If the phone number has 10 digits, prepend +7
  if (/^\d{10}$/.test(formatted)) {
    return "+7" + formatted;
  }

  // Return the formatted number or handle invalid format as needed
  return formatted;
}

export async function createPayment(details: PaymentDetails) {
  const items = details.basket.map((item) => ({
    description: item.item.name,
    quantity: item.count,
    amount: {
      value: item.totalPrice,
      currency: "RUB",
    },

    vat_code: 1,
    payment_mode: "full_payment",
    payment_subject: "commodity",
  }));

  console.log(items);
  console.log(details);

  try {
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
            phone: formatPhoneNumber(details.customer.phone),
          },
          items: items,
        },
      },
    });

    return { data };
  } catch (error: any) {
    console.error(
      "Ошибка при создании платежа:",
      error.response?.data || error.message,
    );
    throw error;
  }

  // const { data } = await axios({
  //   method: "post",
  // url: "https://api.yookassa.ru/v3/payments",
  // headers: {
  //   "Content-Type": "application/json",
  //   "Idempotence-Key": Date.now(),
  // },
  // auth: {
  //   username: process.env.YOOKASSA_STORE_ID as string,
  //   password: process.env.YOOKASSA_API_KEY as string,
  // },
  //   data: {
  //     amount: {
  // value: details.amount,
  // currency: "RUB",
  //     },
  //     confirmation: {
  // type: "redirect",
  // return_url: process.env.NEXT_PUBLIC_FRONT_URL as string,
  //     },
  //     payment_method_data: {
  //       type: "bank_card",
  //     },
  //     capture: true,
  //     description: details.description,
  //     metadata: {
  //       ...details.metadata,
  //     },

  //     receipt: {
  //       customer: {
  //         email: "customer@example.com",
  //         phone: "+79000000000",
  //       },
  //       items: [
  //         {
  //           description: "Шашлык",
  //           quantity: "1.00",
  //           amount: {
  //             value: "165.00",
  //             currency: "RUB",
  //           },
  //           vat_code: 1,
  //           payment_mode: "full_payment",
  //           payment_subject: "commodity",
  //         },
  //       ],
  //     },
  //   },
  // });
}
// receipt: {
//   customer: details.customer,

//   items: test,
// },
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
