import { Check } from "@/shared/icons/Check";
import { Pluse } from "@/shared/icons/Pluse";
import { Button } from "@/shared/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/shared/ui/dialog";
import { useModalSupplements } from "@/store/modalSupplements";
import Image from "next/image";

const ModalSupplements = () => {
  const { isOpen, setIsOpen, item } = useModalSupplements();

  if (!item) return null;

  return (
    <Dialog open={isOpen} onOpenChange={() => setIsOpen(false)}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="border-b border-[#EBEBEB] pb-3" asChild>
            <div className="flex gap-3">
              <div className="relative min-h-[106px] w-[162px]">
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

              <div className="flex flex-col gap-0.5">
                <h2 className="text-[14px] font-[700] leading-[19px] text-[#363636]">
                  {item.name}
                </h2>
                {/* <span>{item.description}</span> */}
                <span className="text-[12px] font-[500] leading-[16.8px] text-[#696969]">
                  {item.itemSizes[0].portionWeightGrams} г.
                </span>
              </div>
            </div>
          </DialogTitle>
        </DialogHeader>

        <DialogDescription className="pt-3">
          <h4 className="pb-3 text-[14px] font-[700] leading-[19px] text-[#363636]">
            Дополнительно:
          </h4>

          <div className="flex h-[285px] flex-col gap-[6px] overflow-scroll">
            {item.itemSizes[0].itemModifierGroups[0].items.map((item) => (
              <div
                key={item.itemId}
                className="flex items-center justify-between gap-[6px]"
              >
                <div className="flex w-full items-center justify-between rounded-[6px] bg-[#F3F3F3] pb-[9px] pl-[13px] pr-2 pt-2 text-[14px] font-[700] leading-[19px]">
                  <p className="text-[#363636]">{item.name}</p>

                  <span className="text-[#D4910B]">
                    + {item.prices[0].price}р.
                  </span>
                </div>

                {/* bg-[#FFAF10] */}
                <button className="flex size-[36px] items-center justify-center rounded-[6px] bg-[#F3F3F3]">
                  <Pluse />

                  {/* <Check className="text-[#474747]" /> */}
                </button>
              </div>
            ))}
          </div>
        </DialogDescription>

        <DialogFooter className="my-4">
          <Button className="py-[17px]">
            Добавить в корзину за {item.itemSizes[0].prices[0].price} р.
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export { ModalSupplements };
