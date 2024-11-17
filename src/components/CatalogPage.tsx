/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { catalogItems } from "@/shared/const/catalogItems";
import { Container } from "@/shared/ui/container";
import { CatalogItems } from "./CatalogItems";
import { useEffect } from "react";
import { useStoreCatalog } from "@/store/catalog";
import { Skeleton } from "@/shared/ui/skeleton";
import { useHeaderStore } from "@/store/header";

const fetchCatalog = async () => {
  const response = await fetch("/api/getMenuId", {
    method: "POST",
  });
  const data = await response.json();

  return data;
};

const CatalogPage = () => {
  const { setItemCategories, itemCategories } = useStoreCatalog();

  const { setNavbar, setIsLoading, isLoading } = useHeaderStore();

  useEffect(() => {
    fetchCatalog().then((data) => {
      setItemCategories(data.itemCategories);
      setIsLoading(false);
      setNavbar(
        data.itemCategories.map((el: any) => ({ id: el.id, title: el.name })),
      );
    });
  }, [setIsLoading, setItemCategories, setNavbar]);

  return (
    <section>
      <Container>
        <div className="flex flex-col justify-between gap-[52px] max-mobile:gap-[48px]">
          {isLoading ? (
            <>
              {[...Array(1)].map((_, idx) => (
                <div key={idx} className="flex flex-col gap-[26px]">
                  <div className="flex flex-col gap-[10px]">
                    <Skeleton className="h-[38px] w-full" />

                    <div className="flex gap-1.5">
                      <Skeleton className="h-[34px] w-[50px]" />
                      <Skeleton className="h-[34px] w-[50px]" />
                      <Skeleton className="h-[34px] w-[50px]" />
                    </div>
                  </div>

                  <div className="grid grid-cols-4 gap-x-[20px] gap-y-[52px] max-tablet:grid-cols-3 max-mobile:grid-cols-2 max-mobile:gap-y-[48px] max-mobile550:grid-cols-1">
                    <Skeleton className="h-[360px] w-full" />
                    <Skeleton className="h-[360px] w-full" />
                    <Skeleton className="h-[360px] w-full" />
                    <Skeleton className="h-[360px] w-full" />
                    <Skeleton className="h-[360px] w-full" />
                    <Skeleton className="h-[360px] w-full" />
                    <Skeleton className="h-[360px] w-full" />
                    <Skeleton className="h-[360px] w-full" />
                  </div>
                </div>
              ))}
            </>
          ) : (
            itemCategories.map((el, idx) => {
              const isLastItem = idx === catalogItems.length - 1;
              return (
                <CatalogItems key={el.id} el={el} isLastItem={isLastItem} />
              );
            })
          )}
        </div>
      </Container>
    </section>
  );
};

export { CatalogPage };
