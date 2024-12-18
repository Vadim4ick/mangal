import { Banner } from "@/components/Banner";
import { ButtonMenu } from "@/components/ButtonMenu";
import { CatalogPage } from "@/components/CatalogPage";
import { gql } from "@/graphql/client";
import { DeliveryIcon } from "@/shared/icons/DeliveryIcon";
import { PaymentIcon } from "@/shared/icons/PaymentIcon";
import { TimeIcon } from "@/shared/icons/TimeIcon";
import { Container } from "@/shared/ui/container";
import Image from "next/image";
import ReactMarkdown from "react-markdown";

export const revalidate = 60;

export default async function Home() {
  const { homePage } = await gql.GetHomePage();

  return (
    <main className="bg-[#FAFAFA]">
      {homePage.slider && (
        <Banner slider={homePage.slider} title={homePage.title} />
      )}

      <CatalogPage />

      {/* Доставка и оплата */}
      <section
        id="delivery"
        className="pt-[208px] max-tablet:pt-[108px] max-mobile:pt-[78px]"
      >
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
                    Доставка по городу - 200 руб.
                  </p>
                  <p className="text-[16px] font-[700] leading-[22px] text-[#363636]">
                    При заказе от 1000 руб. -{" "}
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
                    ежедневно с 10:00 до 23:00
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
                  <ReactMarkdown
                    components={{
                      p: ({ children }) => {
                        return (
                          <p className="text-[18px] font-semibold leading-[25px] text-[#363636]">
                            {children}
                          </p>
                        );
                      },
                    }}
                  >
                    {homePage.about}
                  </ReactMarkdown>
                </div>

                <ButtonMenu />
              </div>

              <div className="relative h-[457px] w-full max-w-[489px] shrink-0 max-mobile:h-[335px]">
                <Image
                  src={"/2.png"}
                  alt="about"
                  fill
                  className="rounded-[12px] object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
