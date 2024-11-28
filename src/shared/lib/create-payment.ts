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
