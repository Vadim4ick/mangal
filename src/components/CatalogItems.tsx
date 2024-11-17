"use client";

import { useMemo, useState } from "react";
import { cn } from "@/shared/lib/utils";
import { ItemCategory } from "@/store/catalog";
import { CatalogItem } from "./CatalogItem";

const CatalogItems = ({
  el,
  isLastItem,
}: {
  el: ItemCategory;
  isLastItem: boolean;
}) => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const onClick = (category: string | null) => {
    setActiveCategory(category);
  };

  const uniqueNames = useMemo(() => {
    const labels = Object.values(el.items)
      .map((item) => item.labels?.[0]?.name) // Извлекаем имя первого лейбла
      .filter((name): name is string => !!name); // Фильтруем undefined и null

    return Array.from(new Set(labels));
  }, [el.items]);

  // Фильтрация элементов по активной категории
  const filteredItems = useMemo(() => {
    if (!activeCategory) {
      return Object.values(el.items);
    }

    return Object.values(el.items).filter((item) =>
      item.labels?.some((label) => label.name === activeCategory),
    );
  }, [el.items, activeCategory]);

  return (
    <div
      data-catalog={el.id}
      className={cn("flex flex-col gap-[26px] border-b border-[#DFDFDF]", {
        "border-none": isLastItem,
        "pb-[52px] max-mobile:pb-[48px]": !isLastItem,
      })}
    >
      <div className="flex flex-col gap-[10px]">
        <h2 className="text-[28px] font-bold leading-[38px] text-[#363636]">
          {el.name}
        </h2>

        <div className="custom-scrollbar flex items-center gap-1.5 overflow-x-auto pb-[10px]">
          {uniqueNames.length > 0 && (
            <button
              onClick={() => onClick(null)}
              className={cn(
                "cursor-pointer rounded-full border bg-[#E9E9E9] px-[11px] py-[7px] text-[15px] font-semibold leading-[20px] text-[#363636]",
                {
                  "border border-[#FFC043] bg-transparent text-[#DD9B17]":
                    !activeCategory,
                },
              )}
            >
              Все
            </button>
          )}

          {/* Кнопки уникальных категорий */}
          {uniqueNames.map((category, idx) => (
            <button
              key={`${category}-${idx}`}
              className={cn(
                "cursor-pointer rounded-full border bg-[#E9E9E9] px-3 py-1.5 text-sm font-semibold leading-5 text-[#363636]",
                {
                  "border border-[#FFC043] bg-transparent text-[#DD9B17]":
                    activeCategory === category,
                },
              )}
              onClick={() => onClick(category)}
              disabled={activeCategory === category}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-4 gap-x-[20px] gap-y-[52px] max-tablet:grid-cols-3 max-mobile:grid-cols-2 max-mobile:gap-y-[48px] max-mobile550:grid-cols-1">
        {filteredItems.map((item) => {
          return <CatalogItem key={item.itemId} item={item} />;
        })}
      </div>
    </div>
  );
};

export { CatalogItems };
