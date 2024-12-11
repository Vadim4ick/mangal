import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Item } from "./catalog";

export interface Modifier {
  id: string;
  name: string;
  price: number;
}

export interface BasketItem {
  count: number;
  item: Item;
  modifiers: Modifier[];
  totalPrice: number;
}

interface State {
  basket: BasketItem[];
  totalCount: number;
  totalPrice: number;
  addToBasket: (basketItem: BasketItem) => void;
  increaseCount: (basketItem: BasketItem) => void;
  decreaseCount: (basketItem: BasketItem) => void;
  removeFromBasket: (basketItem: BasketItem) => void;
  removeAllFromBasket: () => void;

  isDelivery: boolean;
  setDelivery: (val: boolean) => void;
}

const calculateTotalCount = (basket: BasketItem[]) =>
  basket.reduce((acc, basketItem) => acc + basketItem.count, 0);

export const calculateTotalPrice = (basket: BasketItem[]) =>
  basket.reduce((acc, basketItem) => acc + basketItem.totalPrice, 0);

export const useBasketStore = create<State>()(
  persist(
    (set) => ({
      basket: [],
      totalCount: 0,
      totalPrice: 0,
      isDelivery: true,

      setDelivery: (val: boolean) => set({ isDelivery: val }),

      addToBasket: (basketItem: BasketItem) =>
        set((state) => {
          const existingItem = state.basket.find(
            (item) =>
              item.item.itemId === basketItem.item.itemId &&
              JSON.stringify(item.modifiers) ===
                JSON.stringify(basketItem.modifiers),
          );

          let updatedBasket;

          if (existingItem) {
            updatedBasket = state.basket.map((item) =>
              item.item.itemId === basketItem.item.itemId &&
              JSON.stringify(item.modifiers) ===
                JSON.stringify(basketItem.modifiers)
                ? {
                    ...item,
                    count: item.count + 1,
                    totalPrice: item.totalPrice + basketItem.totalPrice,
                  }
                : item,
            );
          } else {
            updatedBasket = [...state.basket, basketItem];
          }

          return {
            basket: updatedBasket,
            totalCount: calculateTotalCount(updatedBasket),
            totalPrice: calculateTotalPrice(updatedBasket),
          };
        }),

      // Увеличение количества
      increaseCount: (basketItem: BasketItem) =>
        set((state) => {
          const updatedBasket = state.basket.map((item) =>
            item.item.itemId === basketItem.item.itemId &&
            JSON.stringify(item.modifiers) ===
              JSON.stringify(basketItem.modifiers)
              ? {
                  ...item,
                  count: item.count + 1,
                  totalPrice:
                    item.totalPrice + basketItem.totalPrice / item.count,
                }
              : item,
          );

          return {
            basket: updatedBasket,
            totalCount: calculateTotalCount(updatedBasket),
            totalPrice: calculateTotalPrice(updatedBasket),
          };
        }),

      // Уменьшение количества
      decreaseCount: (basketItem: BasketItem) =>
        set((state) => {
          const updatedBasket = state.basket
            .map((item) =>
              item.item.itemId === basketItem.item.itemId &&
              JSON.stringify(item.modifiers) ===
                JSON.stringify(basketItem.modifiers)
                ? {
                    ...item,
                    count: item.count - 1,
                    totalPrice:
                      item.totalPrice - basketItem.totalPrice / item.count,
                  }
                : item,
            )
            .filter((item) => item.count > 0);

          return {
            basket: updatedBasket,
            totalCount: calculateTotalCount(updatedBasket),
            totalPrice: calculateTotalPrice(updatedBasket),
          };
        }),

      // Удаление товара
      removeFromBasket: (basketItem: BasketItem) =>
        set((state) => {
          const updatedBasket = state.basket.filter(
            (item) =>
              !(
                item.item.itemId === basketItem.item.itemId &&
                JSON.stringify(item.modifiers) ===
                  JSON.stringify(basketItem.modifiers)
              ),
          );

          return {
            basket: updatedBasket,
            totalCount: calculateTotalCount(updatedBasket),
            totalPrice: calculateTotalPrice(updatedBasket),
          };
        }),

      // Очистка корзины
      removeAllFromBasket: () =>
        set({
          basket: [],
          totalCount: 0,
          totalPrice: 0,
        }),
    }),
    {
      name: "basket",
    },
  ),
);
