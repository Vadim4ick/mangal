/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client";

import { Grill } from "@/shared/icons/Grill";
import { HeaderLogo } from "@/shared/icons/HeaderLogo";
import { Location } from "@/shared/icons/Location";
import { Phone } from "@/shared/icons/Phone";
import { Time } from "@/shared/icons/Time";
import { cn } from "@/shared/lib/utils";
import { Container } from "@/shared/ui/container";
import { Skeleton } from "@/shared/ui/skeleton";
import { useBasketStore } from "@/store/basket";
import { useHeaderStore } from "@/store/header";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";

const Header = ({ bottomLinks = true }: { bottomLinks?: boolean }) => {
  const [activeId, setActiveId] = useState<string | null>(null);
  const ref = useRef<HTMLDivElement | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const navbarRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});
  const { fixed, setFixed, navbar, isLoading } = useHeaderStore();

  const router = useRouter();

  const { totalCount } = useBasketStore();

  useEffect(() => {
    setActiveId(navbar[0]?.id);
  }, [navbar]);

  const handleScroll = useCallback(() => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (ref.current && scrollTop > ref.current.offsetHeight) {
      setFixed(true);
    } else {
      setFixed(false);
    }
  }, [setFixed]);

  const onClickNavbar = useCallback((id: string) => {
    const section = document.querySelector(`[data-catalog="${id}"]`);
    if (!section) return;

    const offsetTop = section.getBoundingClientRect().top + window.scrollY;
    const scrollToPosition = offsetTop - 140;

    window.scrollTo({
      top: scrollToPosition,
      behavior: "smooth",
    });
  }, []);

  useEffect(() => {
    if (!bottomLinks) return;

    const sections = document.querySelectorAll("[data-catalog]");

    if (sections.length > 0) {
      observerRef.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const id = entry.target.getAttribute("data-catalog");
              if (id) {
                setActiveId(id);
              }
            }
          });
        },
        {
          root: null,
          rootMargin: "0px 0px -70% 0px",
          threshold: 0,
        },
      );

      sections.forEach((section) => {
        observerRef.current?.observe(section);
      });
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);

      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [bottomLinks, handleScroll, navbar]);

  useEffect(() => {
    if (activeId && navbarRefs.current[activeId]) {
      navbarRefs.current[activeId]?.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  }, [activeId]);

  return (
    <>
      {bottomLinks && (
        <div
          ref={ref}
          className="header-shadow-top flex h-[40px] items-center bg-[#363636] max-lg:hidden"
        >
          <Container>
            <div className="flex justify-between">
              <div className="flex items-center gap-2">
                <Time />

                <p className="text-[14px] font-[700] leading-[19px] text-white">
                  Работаем с 08:00 до 22:00
                </p>
              </div>
              <div className="flex gap-[43px]">
                <div className="flex items-center gap-[8px]">
                  <Location />

                  <p className="text-[14px] font-[700] leading-[19px] text-white">
                    Ул. 40 лет победы, 12
                  </p>
                </div>
                <div>
                  <a
                    href="#"
                    className="flex cursor-pointer items-center gap-[6px]"
                  >
                    <Phone />

                    <p className="text-[14px] font-[700] leading-[19px] text-white">
                      + 7 (918) 342-00-75
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </Container>
        </div>
      )}

      <header
        className={cn("z-50 w-full bg-white", {
          "fixed top-0": fixed || !bottomLinks,
        })}
      >
        <div className="header-shadow flex items-center bg-[#363636] py-[13px]">
          <Container>
            <div className="flex justify-between">
              {/* LOGO */}
              <Link
                className="max-mobile:max-h-[36px] max-mobile:max-w-[200px]"
                href={"/"}
              >
                <HeaderLogo />
              </Link>
              {/* /LOGO */}

              <button
                onClick={() => router.push("/orders")}
                className="flex h-[44px] items-center rounded-[10px] border border-[#FFAF10] bg-[#363636] pl-[14px] transition-colors max-mobile:pl-[9px]"
              >
                <div className="flex items-center gap-[8px] pr-[21px] max-mobile:pr-[7px]">
                  <Grill />

                  <span className="text-[14px] font-[700] leading-[19px] text-[#FFAF10] max-mobile:hidden">
                    Корзина
                  </span>
                </div>

                {/* Counter */}
                {totalCount > 0 && (
                  <>
                    <div className="relative h-[24px] pr-[10px] max-mobile:pr-[12px]">
                      <div className="before:absolute before:block before:h-[24px] before:w-[1px] before:bg-[#FFAF10]"></div>
                    </div>

                    <div className="mr-[10px] flex size-[22px] items-center justify-center rounded-[100px] bg-[#FFAF10] max-mobile:mr-[12px]">
                      <span className="text-[12px] font-[700] leading-[12px] text-[#363636] max-mobile:text-white">
                        {totalCount}
                      </span>
                    </div>
                  </>
                )}
                {/* /Counter */}
              </button>
            </div>
          </Container>
        </div>

        {bottomLinks && (
          <div className="flex items-center bg-[#363636]">
            <Container>
              <div className="flex w-full justify-between">
                <div className="custom-scrollbar flex max-w-[850px] gap-[30px] overflow-x-auto max-mobile:overflow-x-scroll max-mobile:pb-[2px]">
                  {!isLoading &&
                    navbar.map((item) => (
                      <button
                        key={item.id}
                        // @ts-ignore
                        ref={(el) => (navbarRefs.current[item.id] = el)}
                        onClick={() => onClickNavbar(item.id)}
                        className={cn(
                          "relative cursor-pointer whitespace-nowrap text-[16px] font-[700] leading-[22px] text-white",
                          {
                            "before:absolute before:bottom-[-0px] before:left-[50%] before:h-[2px] before:w-[26px] before:translate-x-[-50%] before:rounded-t-[4px] before:bg-[#FFAF10]":
                              item.id === activeId,
                          },
                        )}
                      >
                        {item.title}
                      </button>
                    ))}

                  {isLoading &&
                    Array.from({ length: 10 }).map((_, index) => (
                      <Skeleton
                        key={index}
                        className="h-[38px] w-[67px] bg-[#2e2c2c]"
                      />
                    ))}

                  <Link
                    href="/orders"
                    className="cursor-pointer whitespace-nowrap py-[9px] pl-[115px] text-[16px] font-[700] leading-[22px] text-white mobile:hidden"
                  >
                    Доставка и оплата
                  </Link>
                </div>

                <Link
                  href="/orders"
                  className="cursor-pointer py-[9px] text-[16px] font-[700] leading-[22px] text-white max-mobile:hidden"
                >
                  Доставка и оплата
                </Link>
              </div>
            </Container>
          </div>
        )}
      </header>
    </>
  );
};

export { Header };
