/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";

export interface PaymentDetails {
  description: string;
  amount: number;
  metadata: {
    orderId: string | number;
    totalPrice: number;
    isDelivery: boolean;
    // basket: any[];
    email: string;
    name: string;
    phone: string;
    address: string;
    comment: string;
  };
}

export const makePaymentFx = async ({
  amount,
  description,
  metadata,
}: PaymentDetails) => {
  try {
    const { data } = await axios.post("/api/create-payment", {
      description: description,
      amount: amount,
      metadata: {
        orderId: metadata.orderId,
        totalPrice: metadata.totalPrice,
        isDelivery: metadata.isDelivery,
        // basket: metadata.basket,
        email: metadata.email,
        name: metadata.name,
        phone: metadata.phone,
        address: metadata.address,
        comment: metadata.comment,
      },
    });

    localStorage.setItem("paymentId", JSON.stringify(data.result.data.id));
    window.location.href = data.result.data.confirmation.confirmation_url;
  } catch (error) {
    const err = (error as any).response?.data.error || (error as Error);
    console.log(err);
  }
};
