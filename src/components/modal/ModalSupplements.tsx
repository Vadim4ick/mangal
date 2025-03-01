import { Check } from "@/shared/icons/Check";
import { Pluse } from "@/shared/icons/Pluse";
import { Button } from "@/shared/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/shared/ui/dialog";
import { useBasketStore } from "@/store/basket";
import { useModalSupplements } from "@/store/modalSupplements";
import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";

const ModalSupplements = () => {
  const { isOpen, setIsOpen, item } = useModalSupplements();
  const { addToBasket } = useBasketStore();
  const [selectedModifiers, setSelectedModifiers] = useState<
    { id: string; price: number; name: string }[]
  >([]);

  if (!item) return null;

  const handleModifierToggle = (modifier: {
    itemId: string;
    prices: { price: number }[];
    name: string;
  }) => {
    setSelectedModifiers((prev) => {
      const exists = prev.find((mod) => mod.id === modifier.itemId);
      if (exists) {
        // Удаляем модификатор, если он уже выбран
        return prev.filter((mod) => mod.id !== modifier.itemId);
      } else {
        // Добавляем модификатор
        return [
          ...prev,
          {
            id: modifier.itemId,
            price: modifier.prices[0].price,
            name: modifier.name,
          },
        ];
      }
    });
  };

  const calculateTotalPrice = () => {
    const basePrice = item.itemSizes[0].prices[0].price;
    const modifiersPrice = selectedModifiers.reduce(
      (acc, mod) => acc + mod.price,
      0,
    );
    return basePrice + modifiersPrice;
  };

  const handleAddToBasket = () => {
    const finalPrice = calculateTotalPrice();

    const basketItem = {
      item, // передаем исходный объект item
      modifiers: selectedModifiers, // выбранные модификаторы
      count: 1, // начальное количество
      totalPrice: finalPrice, // итоговая цена
    };

    addToBasket(basketItem);
    setIsOpen(false);

    setTimeout(() => {
      setSelectedModifiers([]);
    }, 300);
  };

  // ${
  //   selectedModifiers.find((mod) => mod.id === modifier.itemId)
  //     ? "bg-[#FFAF10]"
  //     : "bg-[#F3F3F3]"
  // }

  return (
    <Dialog
      open={isOpen}
      onOpenChange={() => {
        setIsOpen(false);
        setSelectedModifiers([]);
      }}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle
            className="mobile:border-b mobile:border-[#EBEBEB] mobile:pb-3"
            asChild
          >
            <div className="flex gap-3">
              <div className="relative min-h-[106px] w-[162px] max-mobile:h-[220px] max-mobile:w-full">
                <Image
                  src={
                    item.itemSizes[0].buttonImageCroppedUrl?.["475x250-webp"]
                      .url as string
                  }
                  alt="img"
                  fill
                  className="h-full w-full rounded-[12px] object-cover"
                />
              </div>

              <div className="flex flex-col gap-0.5 max-mobile:hidden">
                <h2 className="text-[14px] font-[700] leading-[19px] text-[#363636]">
                  {item.name}
                </h2>
                <span className="text-[12px] font-[500] leading-[16.8px] text-[#696969]">
                  {item.itemSizes[0].portionWeightGrams} г.
                </span>
              </div>
            </div>
          </DialogTitle>
        </DialogHeader>

        <div className="h-[316px] overflow-scroll max-mobile:h-[220px] max-mobile:pt-3">
          <div className="flex flex-col gap-0.5 max-mobile:border-b max-mobile:border-[#EBEBEB] max-mobile:pb-3 mobile:hidden">
            <h2 className="text-[14px] font-[700] leading-[19px] text-[#363636]">
              {item.name}
            </h2>
            <span className="text-[12px] font-[500] leading-[16.8px] text-[#696969]">
              {item.itemSizes[0].portionWeightGrams} г.
            </span>
          </div>

          <h4 className="pb-3 pt-3 text-[14px] font-[700] leading-[19px] text-[#363636]">
            Дополнительно:
          </h4>

          <div className="flex flex-col gap-[6px]">
            {item.itemSizes[0].itemModifierGroups[0].items.map((modifier) => {
              const modifiers = selectedModifiers.find(
                (mod) => mod.id === modifier.itemId,
              );

              return (
                <div
                  key={modifier.itemId}
                  className="flex items-center justify-between gap-[6px]"
                >
                  <div
                    className={clsx(
                      `flex w-full items-center justify-between gap-2 rounded-[6px] border bg-[#F3F3F3] pb-[8px] pl-[13px] pr-2 pt-[7px] text-[14px] font-[700] leading-[19px]`,
                      {
                        "border-[#FFAF10]": modifiers,
                        "border-transparent": !modifiers,
                      },
                    )}
                  >
                    <p className="text-[#363636]">{modifier.name}</p>

                    <span className="text-[#D4910B]">
                      + {modifier.prices[0].price}р.
                    </span>
                  </div>

                  <button
                    className={clsx(
                      "flex size-[36px] shrink-0 items-center justify-center rounded-[6px] bg-[#F3F3F3]",
                      {
                        "bg-[#FFAF10]": modifiers,
                      },
                    )}
                    onClick={() => handleModifierToggle(modifier)}
                  >
                    {modifiers ? <Check /> : <Pluse />}
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        <DialogFooter className="my-4">
          <Button className="py-[17px]" onClick={handleAddToBasket}>
            Добавить в корзину за {calculateTotalPrice()} р.
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export { ModalSupplements };
