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
