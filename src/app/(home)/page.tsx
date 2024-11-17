import { Banner } from "@/components/Banner";
import { CatalogPage } from "@/components/CatalogPage";
import { DeliveryIcon } from "@/shared/icons/DeliveryIcon";
import { PaymentIcon } from "@/shared/icons/PaymentIcon";
import { TimeIcon } from "@/shared/icons/TimeIcon";
import { Container } from "@/shared/ui/container";

export default function Home() {
  return (
    <main className="bg-[#FAFAFA]">
      <Banner />

      <CatalogPage />

      {/* Доставка и оплата */}
      <section className="pt-[208px] max-tablet:pt-[108px] max-mobile:pt-[78px]">
        <Container>
          <div className="flex flex-col gap-6 max-tablet:items-center">
            <h2 className="text-[28px] font-[700] leading-[38px] text-[#363636] max-tablet:self-start">
              Доставка и оплата
            </h2>

            <div className="flex w-full justify-between rounded-[12px] bg-[#EDEDED] py-[36px] pl-[32px] pr-[50px] max-desktop1250:px-[10px] max-tablet:max-w-[500px] max-tablet:flex-col max-tablet:gap-[42px] max-tablet:py-[42px]">
              <article className="flex flex-col gap-[33px]">
                <DeliveryIcon />

                <div className="flex flex-col gap-[8px] text-center tablet:min-w-[339px]">
                  <p className="text-[16px] font-[700] leading-[22px] text-[#363636]">
                    Доставка по городу - 300 руб.
                  </p>
                  <p className="text-[16px] font-[700] leading-[22px] text-[#363636]">
                    При заказе от 2000 руб. -{" "}
                    <span className="uppercase text-[#FFAF10]">БЕСПЛАТНО</span>
                  </p>
                </div>
              </article>

              <div className="relative flex items-center justify-center before:absolute before:h-full before:w-[1px] before:bg-[#D7D7D7] max-tablet:before:h-[1px] max-tablet:before:w-[276px]" />

              <article className="flex flex-col gap-[38px]">
                <TimeIcon />

                <div className="text-center tablet:min-w-[301px]">
                  <p className="text-[16px] font-[700] leading-[24px] text-[#363636]">
                    Доставялем
                  </p>
                  <p className="text-[16px] font-[700] leading-[24px] text-[#363636]">
                    ежедневно с 10:00 до 22:00
                  </p>
                </div>
              </article>

              <div className="relative flex items-center justify-center before:absolute before:h-full before:w-[1px] before:bg-[#D7D7D7] max-tablet:before:h-[1px] max-tablet:before:w-[276px]" />

              <article className="flex flex-col gap-[38px]">
                <PaymentIcon />

                <div className="text-center tablet:min-w-[301px]">
                  <p className="text-[16px] font-[700] leading-[24px] text-[#363636]">
                    Оплата
                  </p>
                  <p className="text-[16px] font-[700] leading-[24px] text-[#363636]">
                    картой(на сайте),СПБ.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </Container>
      </section>
      {/* /Доставка и оплата */}

      <section className="py-[208px] max-tablet:py-[108px] max-mobile:py-[78px]">
        <Container>
          <div className="flex flex-col items-center gap-[25px]">
            <h2 className="self-start text-[28px] font-bold leading-[38px] text-[#363636]">
              О нас
            </h2>

            <div className="flex w-full justify-between gap-[36px] max-tablet:flex-col-reverse max-tablet:items-center">
              <div className="flex flex-col justify-between gap-4 max-tablet:gap-[68px]">
                <div className="flex flex-col gap-[20px] tablet:max-w-[623px]">
                  <p className="text-[18px] font-semibold leading-[25px] text-[#363636]">
                    Шашлык в Краснодаре – просто, быстро и вкусно Когда идет
                    речь о вкусной еде, то многие люди думают о шашлыке.
                  </p>

                  <p className="text-[18px] font-semibold leading-[25px] text-[#363636]">
                    Именно этот простой и самодостаточный вид питания считается
                    одним из самых популярных блюд на закуску. В Краснодаре есть
                    много заведений ресторанного типа и уличных киосков, где
                    можно отведать свежего и аппетитного мяса на мангале.
                  </p>

                  <p className="text-[18px] font-semibold leading-[25px] text-[#363636]">
                    Но если вы не хотите выходить из дома и желаете заказать
                    шашлык быстро и с удобством, то стоит обратиться в компанию
                    Царь Мангал
                  </p>
                </div>

                <button className="h-[56px] max-w-[224px] rounded-[10px] border border-[#E7A013] bg-white font-bold text-[#CF8E0B] transition-colors max-mobile:max-w-full [@media(any-hover:hover){&:hover}]:bg-[#E7A013] [@media(any-hover:hover){&:hover}]:text-[#363636]">
                  Перейти к меню
                </button>
              </div>

              <div className="h-[457px] w-full max-w-[489px] shrink-0 rounded-[12px] bg-[#EDEDED] max-mobile:h-[335px]"></div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
