import { Button } from "@/shared/ui/button";
import { Input } from "../ui/input";
import { useBasketStore } from "@/store/basket";
import { formatPrice } from "@/shared/lib/utils";

const TotalAmountForm = () => {
  const { totalPrice, basket, isDelivery } = useBasketStore();

  return (
    <div className="flex h-fit flex-col gap-4 rounded-[12px] bg-white px-[16px] py-[22px]">
      <div className="flex items-center justify-between border-b border-[#EBEBEB] pb-[24px]">
        <span className="text-[18px] font-[700] leading-[25px] text-[#363636]">
          Итого к оплате:
        </span>
        <span className="text-[18px] font-[700] leading-[25px] text-[#363636]">
          {formatPrice(
            isDelivery && totalPrice < 2000 && basket.length
              ? totalPrice + 200
              : totalPrice,
          )}{" "}
          руб.
        </span>
      </div>

      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <span className="text-[14px] font-[700] leading-[19px] text-[#363636]">
              Корзина:
            </span>
            <span className="text-[12px] font-[500] leading-[16px] text-[#696969]">
              {formatPrice(totalPrice)} руб.
            </span>
          </div>
          <div className="flex items-center justify-between">
            {isDelivery ? (
              totalPrice < 2000 && basket.length ? (
                <>
                  <span className="text-[14px] font-[700] leading-[19px] text-[#363636]">
                    Доставка:
                  </span>
                  <span className="text-[12px] font-[500] leading-[16px] text-[#696969]">
                    200 руб.
                  </span>
                </>
              ) : (
                <>
                  <span className="text-[14px] font-[700] leading-[19px] text-[#363636]">
                    Доставка:
                  </span>
                  <span className="text-[12px] font-[500] leading-[16px] text-[#696969]">
                    Бесплатно
                  </span>
                </>
              )
            ) : (
              <>
                <span className="text-[14px] font-[700] leading-[19px] text-[#363636]">
                  Самовывоз:
                </span>

                <span className="text-[12px] font-[500] leading-[16px] text-[#696969]">
                  Бесплатно
                </span>
              </>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <Input
            name="promocode"
            type="text"
            placeholder="Промокод (необязательно)*"
            className="text-center text-[14px] font-medium placeholder:text-[#9B9B9B]"
          />

          <Button disabled={!basket.length} type="submit" className="h-[56px]">
            Перейти к оплате
          </Button>

          <span className="text-center text-[12px] font-[500] leading-[16px] text-[#999999]">
            *Промокод автоматически применится <br /> на следующем этапе оплаты
          </span>
        </div>
      </div>
    </div>
  );
};

export { TotalAmountForm };
