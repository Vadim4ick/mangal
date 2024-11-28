import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatPrice = (price: number) => {
  return new Intl.NumberFormat("ru-RU").format(price);
};

export const calcPrevPriceForSale = ({
  sale,
  price,
}: {
  sale: number;
  price: number;
}) => {
  const totalPrice = price + (price * sale) / 100;

  return formatPrice(totalPrice);
};

export const pathImage = (img: string) => {
  return `${process.env.NEXT_PUBLIC_SERVER_URL}/assets/${img}`;
};

export function formatPhoneNumber(phone: string) {
  // Удаляем лишние символы, если они есть
  const cleaned = phone.replace(/\D/g, "");

  // Применяем маску
  const formatted = cleaned.replace(
    /(\d)(\d{3})(\d{3})(\d{2})(\d{2})/,
    "+$1 ($2) $3-$4-$5",
  );

  return formatted;
}
