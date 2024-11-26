/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { gql } from "@/graphql/client";
import axios from "axios";

export interface PaymentDetails {
  description: string;
  amount: number;
  metadata: {
    orderId: string | number;
  };
}

interface Props {
  totalPrice: number;
  isDelivery: boolean;
  // basket: any[];
  email: string;
  name: string;
  phone: string;
  address: string;
  comment: string;
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
      },
    });

    localStorage.setItem("paymentId", JSON.stringify(data.result.data.id));
    window.location.href = data.result.data.confirmation.confirmation_url;
  } catch (error) {
    const err = (error as any).response?.data.error || (error as Error);
    console.log(err);
  }
};

export const processOrder = async (props: Props) => {
  const { address, comment, email, isDelivery, name, phone, totalPrice } =
    props;

  try {
    // // Создание заказа
    const task = await gql.CreateOrderItem({
      isDelivery: isDelivery,
      totalPrice: totalPrice,
      address,
      comment,
      email,
      name,
      phone,
    });

    // // Добавление товаров в заказ
    // for (const item of basket) {
    //   await gql.CreateOrderItem({
    //     count: item.count,
    //     size: item.size,
    //     good_id: Number(item.id),
    //     order_id: orderId.create_orders_item.id,
    //     discount: item.discount,
    //   });
    // }

    return { success: true, orderId: task.create_orders_item.id };
  } catch (error) {
    console.error("Error processing order:", error);
    return { success: false };
  }
};
