"use client";

import { useBasketStore } from "@/store/basket";
import { BasketItem } from "./BasketItem";

const Basket = () => {
  const { basket } = useBasketStore();

  return (
    <div className="flex flex-col gap-[30px] rounded-[12px] bg-white pb-[22px] pl-[22px] pr-[11px] pt-[18px] max-mobile:gap-6 max-mobile:px-3 max-mobile:py-4">
      <h2 className="text-[24px] font-[700] leading-[33px] text-[#363636]">
        Корзина:
      </h2>

      <div className="flex flex-col gap-[20px]">
        {basket.map((el, idx) => {
          const isLastItem = idx === basket.length - 1;

          return (
            <BasketItem key={el.item.itemId} el={el} isLastItem={isLastItem} />
          );
        })}

        {basket.length === 0 && (
          <h3 className="text-center text-xl font-medium">Корзина пуста</h3>
        )}
      </div>
    </div>
  );
};

export { Basket };
