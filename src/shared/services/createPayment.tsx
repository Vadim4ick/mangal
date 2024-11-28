/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { gql } from "@/graphql/client";
import { BasketItem } from "@/store/basket";
import axios from "axios";

export interface PaymentDetails {
  description: string;
  amount: number;
  metadata: {
    orderId: string | number;
  };
  customer: {
    email: string;
    phone: string;
  };
}

interface Props {
  totalPrice: number;
  isDelivery: boolean;
  basket: BasketItem[];
  email: string;
  name: string;
  phone: string;
  address: string;
  modificators?: string;
  comment: string;
}

export const makePaymentFx = async ({
  amount,
  description,
  metadata,
  customer,
}: PaymentDetails) => {
  try {
    const { data } = await axios.post("/api/create-payment", {
      description: description,
      amount: amount,
      metadata: {
        orderId: metadata.orderId,
      },
      customer: {
        ...customer,
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
  const {
    address,
    comment,
    email,
    isDelivery,
    name,
    basket,
    phone,
    totalPrice,
  } = props;

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
    for (const item of basket) {
      await gql.CreateOrderItemItem({
        count: item.count,
        totalPrice: item.totalPrice,
        name: item.item.name,
        id: task.create_orders_item.id,
        modificators: JSON.stringify(item.modifiers.map((el) => el.name)),
      });
    }

    return { success: true, orderId: task.create_orders_item.id };
  } catch (error) {
    console.error("Error processing order:", error);
    return { success: false };
  }
};

export const fetchSettings = async () => {
  try {
    const data = await gql.GetSettings();
    return data.settings;
  } catch (error) {
    console.error("Ошибка запроса:", error);
  }
};

export const fetchPromocodes = async () => {
  try {
    const data = await gql.GetPromocodes();
    return data.promocodes;
  } catch (error) {
    console.error("Ошибка запроса:", error);
  }
};
