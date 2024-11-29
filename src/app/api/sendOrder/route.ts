import { gql } from "@/graphql/client";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const data = await request.json();
  try {
    const { orderId } = data?.object.metadata;

    const orderItem = await gql.GetOrderById({ id: orderId });

    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!token || !chatId) {
      console.error("TELEGRAM_BOT_TOKEN или TELEGRAM_CHAT_ID не установлены");

      return NextResponse.json(
        { message: "TELEGRAM_BOT_TOKEN или TELEGRAM_CHAT_ID не установлены" },
        { status: 500 },
      );
    }

    // const message = `
    // 📦 *Новый заказ*:
    // - *Имя*: ${orderItem.orders_by_id.name}
    // - *Email*: ${orderItem.orders_by_id.email}
    // - *Телефон*: ${orderItem.orders_by_id.phone}
    // - *Способ доставки*: ${orderItem.orders_by_id.isDelivery ? "Доставка" : "Самовывоз"}
    // ${orderItem.orders_by_id.isDelivery && orderItem.orders_by_id.address ? `- *Адрес*: ${orderItem.orders_by_id.address}` : ""}
    // - *Комментарий*: ${orderItem.orders_by_id.comment || "Нет"}
    // - *Общая стоимость*: ${orderItem.orders_by_id.totalPrice}₽
    // - *Корзина*:
    // ${
    //   orderItem.orders_by_id.basket
    //     ?.map((item) => {
    //       return `  • ${item.name} x${item.count} - ${item.totalPrice}₽
    //     ${item.modificators.length > 0 ? `    Добавки: ${item.modificators}` : ""}`;
    //     })
    //     .join("\n") || "Корзина пуста"
    // }
    // `;

    const message = `
    📦 *Новый заказ*:
    - *Имя*: ${orderItem.orders_by_id.name}
    - *Телефон*: ${orderItem.orders_by_id.phone}
    - *Способ доставки*: ${orderItem.orders_by_id.isDelivery ? "Доставка" : "Самовывоз"}
    ${orderItem.orders_by_id.isDelivery && orderItem.orders_by_id.address ? `- *Адрес*: ${orderItem.orders_by_id.address}` : ""}
    - *Комментарий*: ${orderItem.orders_by_id.comment || "Нет"}
    - *Общая стоимость*: ${orderItem.orders_by_id.totalPrice}₽
    - *Корзина*:
    ${
      orderItem.orders_by_id.basket
        ?.map((item) => {
          return `  • ${item.name} x${item.count} - ${item.totalPrice}₽${item.modificators.length > 0 ? ` (${item.modificators})` : ""}`;
        })
        .join("\n") || "Корзина пуста"
    }
    `;

    // // Отправляем сообщение через Telegram API
    const telegramResponse = await fetch(
      `https://api.telegram.org/bot${token}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
          parse_mode: "Markdown",
        }),
      },
    );

    const telegramData = await telegramResponse.json();

    if (!telegramData.ok) {
      console.error("Ошибка при отправке сообщения в Telegram:", telegramData);
      return NextResponse.json(
        { message: "Failed to send message to Telegram" },
        { status: 500 },
      );
    }

    // Возвращаем успешный ответ
    return NextResponse.json(
      { message: "Заказ успешно отправлен!", data: "test" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Ошибка в обработчике sendOrder:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 },
    );
  }
}
