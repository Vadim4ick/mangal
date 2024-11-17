"use client";

import { Minuse } from "@/shared/icons/Minuse";
import { Pluse } from "@/shared/icons/Pluse";
import { formatPrice } from "@/shared/lib/utils";
import { Button } from "@/shared/ui/button";
import { useBasketStore } from "@/store/basket";
import { Item } from "@/store/catalog";
import Image from "next/image";

const CatalogItem = ({ item }: { item: Item }) => {
  const { addToBasket, basket, increaseCount, decreaseCount } =
    useBasketStore();

  const findItemToBasket = basket.find(
    (basketItem) => basketItem.item.itemId === item.itemId,
  );

  return (
    <article className="flex h-[360px] flex-col gap-[10px] max-mobile:h-[332px]">
      {item.itemSizes[0].buttonImageCroppedUrl && (
        <div className="relative min-h-[182px]">
          <Image
            // src={"/1.png"}
            src={
              item.itemSizes[0].buttonImageCroppedUrl?.["475x250-webp"]
                .url as string
            }
            alt="img"
            fill
            className="h-full w-full rounded-t-[12px] object-cover"
          />

          {/* {item.sale && (
          <div className="absolute left-[6px] top-[6px] flex h-[30px] w-[62px] items-center justify-center rounded-[100px] bg-[#F4EE27]">
            <span className="w-[42px] text-[16px] font-[700] leading-[22px] text-[#363636]">
              -{item.sale}%
            </span>
          </div>
        )} */}
        </div>
      )}

      <div className="flex h-full flex-col justify-between">
        <div className="flex flex-col gap-1">
          <p className="line-clamp-2 text-[16px] font-[700] leading-[22px] text-[#363636]">
            {item.name}
          </p>

          {/* {item.description && (
            <div className="line-clamp-2 text-[14px] font-[500] leading-[19px] text-[#696969]">
              {item.description.join(", ")}
            </div>
          )} */}

          <span className="text-[14px] font-[500] leading-[19px] text-[#696969]">
            {item.itemSizes[0].portionWeightGrams} г.
          </span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-[18px] font-[700] leading-[25px] text-[#363636]">
              {formatPrice(item.itemSizes[0].prices[0].price)} руб.
            </span>

            {/* {item.sale && (
              <span className="text-[13px] leading-[18px] text-[#A6A6A6] line-through before:bg-[#727272]">
                {calcPrevPriceForSale({ sale: item.sale, price: item.price })}
                руб.
              </span>
            )} */}
          </div>

          {!findItemToBasket && (
            <Button
              onClick={() => addToBasket(item)}
              className="h-[44px] max-w-[140px] max-mobile:max-w-[170px]"
            >
              Добавить
            </Button>
          )}

          {findItemToBasket && (
            <div className="flex items-center gap-[12px]">
              <button
                onClick={() => decreaseCount(item)}
                className="flex size-[36px] items-center justify-center rounded-[10px] bg-[#E1E1E1] transition-colors [@media(any-hover:hover){&:hover}]:bg-[#C7C7C7]"
              >
                <Minuse />
              </button>

              <span className="inline-flex size-[24px] items-center justify-center text-[18px] font-[700] leading-[25px] text-[#474747]">
                {findItemToBasket.count}
              </span>

              <button
                onClick={() => increaseCount(item)}
                className="flex size-[36px] items-center justify-center rounded-[10px] bg-[#E1E1E1] transition-colors [@media(any-hover:hover){&:hover}]:bg-[#C7C7C7]"
              >
                <Pluse />
              </button>
            </div>
          )}
        </div>
      </div>
    </article>
  );
};

export { CatalogItem };
