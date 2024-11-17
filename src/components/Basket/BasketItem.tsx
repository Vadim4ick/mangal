"use client";

import { useMediaQuery } from "@/shared/hooks/useMedia";
import { Close } from "@/shared/icons/Close";
import { Minuse } from "@/shared/icons/Minuse";
import { Pluse } from "@/shared/icons/Pluse";
import { calcPrevPriceForSale, cn, formatPrice } from "@/shared/lib/utils";
import { BasketItem as IBasketItem, useBasketStore } from "@/store/basket";
import Image from "next/image";

const BasketItemPrices = ({
  totalPrice,
  sale,
}: {
  totalPrice: number;
  sale?: number;
}) => {
  return (
    <div className="flex flex-col">
      <div className="whitespace-nowrap text-[18px] font-[700] leading-[25px] text-[#363636]">
        {formatPrice(totalPrice)} руб.
      </div>

      {sale && (
        <div className="relative whitespace-nowrap text-[13px] font-[400] leading-[18px] text-[#A6A6A6] line-through">
          {calcPrevPriceForSale({
            sale: sale,
            price: totalPrice,
          })}{" "}
          руб.
        </div>
      )}
    </div>
  );
};

const BasketItemCounter = ({
  count,
  inc,
  dec,
}: {
  count: number;
  inc: () => void;
  dec: () => void;
}) => {
  return (
    <div className="flex h-fit items-center gap-[16px]">
      <button
        type="button"
        onClick={dec}
        className="flex size-[28px] items-center justify-center rounded-[10px] bg-[#E1E1E1] text-[25px] text-[#474747] transition-colors [@media(any-hover:hover){&:hover}]:bg-[#C7C7C7]"
      >
        <Minuse />
      </button>

      <span className="inline-flex items-center justify-center text-[18px] font-[700] leading-[25px] text-[#474747]">
        {count}
      </span>

      <button
        type="button"
        onClick={inc}
        className="flex size-[28px] items-center justify-center rounded-[10px] bg-[#E1E1E1] text-[25px] text-[#474747] transition-colors [@media(any-hover:hover){&:hover}]:bg-[#C7C7C7]"
      >
        <Pluse />
      </button>
    </div>
  );
};

const BasketItem = ({
  el,
  isLastItem,
}: {
  el: IBasketItem;
  isLastItem: boolean;
}) => {
  const isMobile = useMediaQuery(768);

  const { increaseCount, decreaseCount, removeFromBasket } = useBasketStore();

  const inc = () => {
    increaseCount(el.item);
  };

  const dec = () => {
    decreaseCount(el.item);
  };
  return (
    <article className="flex justify-between gap-[21px] max-mobile:flex-col max-mobile:gap-[13px]">
      <div
        className={cn("flex w-full gap-[20px]", {
          "mobile:border-b mobile:border-[#EBEBEB] mobile:pb-[20px]":
            !isLastItem,
        })}
      >
        <div className="flex w-full gap-[21px] max-mobile:gap-[13px]">
          <div className="relative h-[79px] w-full max-w-[121px] rounded max-mobile:max-w-[112px]">
            <Image
              className="h-full w-full rounded-[6px] object-cover"
              src={
                el.item.itemSizes[0].buttonImageCroppedUrl?.["475x250-webp"]
                  .url as string
              }
              fill
              alt=""
            />
          </div>

          <div className="flex w-full max-w-[310px] flex-col gap-[4px]">
            <span className="line-clamp-2 text-[14px] font-[700] leading-[19px] text-[#363636]">
              {el.item.name}
            </span>

            {/* {el.item.description && (
              <p className="line-clamp-2 text-[12px] font-[500] leading-[16px] text-[#696969]">
                {el.item.description.join(", ")}
              </p>
            )} */}

            <span className="text-[12px] font-[500] leading-[16px] text-[#696969]">
              {el.item.itemSizes[0].portionWeightGrams} г.
            </span>
          </div>

          {!isMobile && (
            <BasketItemPrices totalPrice={el.totalPrice} sale={undefined} />
            // <BasketItemPrices totalPrice={el.totalPrice} sale={el.item.sale} />
          )}
        </div>

        {!isMobile && (
          <BasketItemCounter inc={inc} dec={dec} count={el.count} />
        )}
      </div>

      <div
        className={cn(
          "max-mobile:flex max-mobile:items-center max-mobile:justify-between max-mobile:gap-2",
          {
            "max-mobile:border-b max-mobile:border-[#EBEBEB] max-mobile:pb-[20px]":
              !isLastItem,
          },
        )}
      >
        {isMobile && (
          <BasketItemPrices totalPrice={el.totalPrice} sale={undefined} />
          // <BasketItemPrices totalPrice={el.totalPrice} sale={el.item.sale} />
        )}

        <div className="flex gap-[9px]">
          <button
            type="button"
            onClick={() => removeFromBasket(el.item)}
            className="h-fit rounded-[6px] bg-[#FFE5E5] px-[17px] py-[7px] max-mobile:px-[7px]"
          >
            <Close />
          </button>

          {isMobile && (
            <BasketItemCounter inc={inc} dec={dec} count={el.count} />
          )}
        </div>
      </div>
    </article>
  );
};

export { BasketItem };
