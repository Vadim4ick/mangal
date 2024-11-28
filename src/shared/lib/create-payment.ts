/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";

export interface PaymentDetails {
  description: string;
  amount: number;
  metadata: any;
}

export async function createPayment(details: PaymentDetails) {
  console.log("test", {
    ...details.metadata,
    basket: JSON.stringify(details.metadata.basket),
  });
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
        value: "165.00",
        currency: "RUB",
      },
      confirmation: {
        type: "redirect",
        return_url: "https://example.com/success",
      },
      payment_method_data: {
        type: "bank_card",
      },
      capture: true,
      description: "Оплата заказа №80",
      metadata: {
        orderId: "80",
      },
      receipt: {
        customer: {
          email: "customer@example.com",
          phone: "+79000000000",
        },
        items: [
          {
            description: "Шашлык",
            quantity: "1.00",
            amount: {
              value: "165.00",
              currency: "RUB",
            },
            vat_code: 1,
            payment_mode: "full_payment",
            payment_subject: "commodity",
          },
        ],
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
