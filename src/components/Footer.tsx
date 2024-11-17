"use client";

import { useMediaQuery } from "@/shared/hooks/useMedia";
import { Location } from "@/shared/icons/Location";
import { LogoFooter } from "@/shared/icons/LogoFooter";
import { Phone } from "@/shared/icons/Phone";
import { Tg } from "@/shared/icons/social/Tg";
import { Vk } from "@/shared/icons/social/Vk";
import { Whatsapp } from "@/shared/icons/social/Whatsapp";
import { Time } from "@/shared/icons/Time";
import { Container } from "@/shared/ui/container";
import Link from "next/link";

const SocialsComponent = () => {
  return (
    <div className="flex w-fit items-center gap-[10px] max-mobile:flex-col">
      <p className="text-[14px] font-[600] leading-[19px] text-white">
        Мы в соц сетях:
      </p>

      <div className="flex gap-[24px] rounded-[8px] bg-[#3B3B3B] px-[12px] py-[8px]">
        <Link href="#">
          <Vk />
        </Link>

        <Link href="#">
          <Tg />
        </Link>

        <Link href="#">
          <Whatsapp />
        </Link>
      </div>
    </div>
  );
};

const Policy = () => {
  return (
    <div className="flex w-full flex-col gap-4 max-mobile:flex-row max-mobile:justify-between">
      <Link
        className="text-[12px] font-[500] leading-[16px] text-[#B6B6B6]"
        href="#"
      >
        Публичная оферта
      </Link>

      <Link
        className="text-[12px] font-[500] leading-[16px] text-[#B6B6B6]"
        href="#"
      >
        Пользовательское соглашение
      </Link>
    </div>
  );
};

const Footer = () => {
  const isMobile = useMediaQuery(768);

  return (
    <footer className="bg-[#363636] pb-[17px] pt-[39px] max-mobile:py-[44px]">
      <Container>
        <div className="flex justify-between gap-4 max-mobile:flex-col max-mobile:gap-[48px]">
          <div className="flex flex-col justify-between gap-4">
            <Link
              className="flex w-full items-center justify-center max-mobile:mb-6"
              href="/"
            >
              <LogoFooter className="mobile:max-h-[155px] mobile:max-w-[222px]" />
            </Link>

            {!isMobile && <Policy />}
          </div>

          <div className="flex flex-col justify-between gap-[57px] max-mobile:items-center max-mobile:gap-[48px]">
            <ul className="flex flex-col max-mobile:self-start">
              <li className="flex items-center gap-[15px]">
                <div className="flex items-center justify-center rounded-t-[8px] bg-[#3B3B3B] px-[6px] pb-[12px] pt-[8px]">
                  <div className="flex size-[26px] items-center justify-center">
                    <Phone className="size-[26px]" />
                  </div>
                </div>
                <p className="text-[18px] font-[700] leading-[25px] text-white">
                  + 7 (918) 342-00-75
                </p>
              </li>
              <li className="flex items-center gap-[15px]">
                <div className="flex items-center justify-center bg-[#3B3B3B] px-[6px] pb-[12px] pt-[12px]">
                  <div className="flex size-[26px] items-center justify-center">
                    <Location className="size-[25px]" />
                  </div>
                </div>
                <p className="text-[18px] font-[700] leading-[25px] text-white">
                  Краснодар, Ул. 40 лет победы, 12
                </p>
              </li>
              <li className="flex items-center gap-[15px]">
                <div className="flex items-center justify-center rounded-b-[8px] bg-[#3B3B3B] px-[6px] pb-[8px] pt-[12px]">
                  <div className="flex size-[26px] items-center justify-center">
                    <Time className="size-[20px]" />
                  </div>
                </div>
                <p className="text-[18px] font-[700] leading-[25px] text-white">
                  Ежедневно с 10:00 до 22:00
                </p>
              </li>
            </ul>

            <SocialsComponent />
            {isMobile && <Policy />}
          </div>
        </div>
      </Container>
    </footer>
  );
};

export { Footer };
