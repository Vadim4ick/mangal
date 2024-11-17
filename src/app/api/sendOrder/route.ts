import { Item } from "@/store/catalog";
import { NextResponse } from "next/server";

// Определите типы для данных заказа
interface OrderData {
  email: string;
  name: string;
  phone: string;
  address?: string;
  comment?: string;
  totalPrice: number;
  isDelivery: boolean;
  basket: Array<{
    item: Item;
    name: string;
    count: number;
    totalPrice: number;
  }>;
}

export async function POST(request: Request) {
  try {
    const data: OrderData = await request.json();

    const {
      email,
      name,
      phone,
      address,
      comment,
      totalPrice,
      isDelivery,
      basket,
    } = data;

    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!token || !chatId) {
      console.error("TELEGRAM_BOT_TOKEN или TELEGRAM_CHAT_ID не установлены");

      return NextResponse.json(
        { message: "Server configuration error" },
        { status: 500 },
      );
    }

    // Форматируем сообщение для Telegram
    const message = `
📦 *Новый заказ*:
- *Имя*: ${name}
- *Email*: ${email}
- *Телефон*: ${phone}
- *Способ доставки*: ${isDelivery ? "Доставка" : "Самовывоз"}
${isDelivery ? `- *Адрес*: ${address}` : ""}
- *Комментарий*: ${comment || "Нет"}
- *Общая стоимость*: ${totalPrice}₽
- *Корзина*:
${basket.map((item) => `  • ${item.item.name} x${item.count}`).join("\n")}
    `;

    // Отправляем сообщение через Telegram API
    // const telegramResponse = await fetch(
    //   `https://api.telegram.org/bot${token}/sendMessage`,
    //   {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       chat_id: chatId,
    //       text: message,
    //       parse_mode: "Markdown",
    //     }),
    //   },
    // );

    // const telegramData = await telegramResponse.json();

    // if (!telegramData.ok) {
    //   console.error("Ошибка при отправке сообщения в Telegram:", telegramData);
    //   return NextResponse.json(
    //     { message: "Failed to send message to Telegram" },
    //     { status: 500 },
    //   );
    // }

    // Возвращаем успешный ответ
    return NextResponse.json(
      { message: "Заказ успешно отправлен!", data: message },
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
