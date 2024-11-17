import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Item } from "./catalog";

export interface BasketItem {
  count: number;
  item: Item;
  totalPrice: number;
}

interface State {
  isDelivery: boolean;
  basket: BasketItem[];
  totalCount: number;

  totalPrice: number;

  addToBasket: (item: Item) => void;
  increaseCount: (item: Item) => void;
  decreaseCount: (item: Item) => void;
  removeFromBasket: (item: Item) => void;
  removeAllFromBasket: () => void;

  setDelivery: (val: boolean) => void;
}

const calculateTotalCount = (basket: BasketItem[]) =>
  basket.reduce((acc, basketItem) => acc + basketItem.count, 0);

const calculateTotalPrice = (basket: BasketItem[]) =>
  basket.reduce((acc, basketItem) => acc + basketItem.totalPrice, 0);

export const useBasketStore = create<State>()(
  persist(
    (set) => ({
      basket: [],
      totalCount: 0,
      totalPrice: 0,
      isDelivery: true,

      setDelivery: (val: boolean) => set({ isDelivery: val }),

      // Добавление товара в корзину
      addToBasket: (item: Item) =>
        set((state) => {
          const existingItem = state.basket.find(
            (basketItem) => basketItem.item.itemId === item.itemId,
          );

          let updatedBasket;

          if (existingItem) {
            const newCount = existingItem.count + 1;

            updatedBasket = state.basket.map((basketItem) =>
              basketItem.item.itemId === item.itemId
                ? {
                    ...basketItem,
                    count: newCount,
                    totalPrice: item.itemSizes[0].prices[0].price * newCount,
                  }
                : basketItem,
            );
          } else {
            updatedBasket = [
              ...state.basket,
              { item, count: 1, totalPrice: item.itemSizes[0].prices[0].price },
            ];
          }

          return {
            basket: updatedBasket,
            totalCount: calculateTotalCount(updatedBasket),
            totalPrice: calculateTotalPrice(updatedBasket),
          };
        }),

      // Увеличение количества товара в корзине
      increaseCount: (item: Item) =>
        set((state) => {
          const updatedBasket = state.basket.map((basketItem) => {
            if (basketItem.item.itemId === item.itemId) {
              const newCount = basketItem.count + 1;

              return {
                ...basketItem,
                count: newCount,
                totalPrice: item.itemSizes[0].prices[0].price * newCount,
              };
            } else {
              return basketItem;
            }
          });

          return {
            basket: updatedBasket,
            totalCount: calculateTotalCount(updatedBasket),
            totalPrice: calculateTotalPrice(updatedBasket),
          };
        }),

      // Уменьшение количества товара в корзине
      decreaseCount: (item: Item) =>
        set((state) => {
          const existingItem = state.basket.find(
            (basketItem) => basketItem.item.itemId === item.itemId,
          );

          let updatedBasket;

          if (existingItem && existingItem.count > 1) {
            const newCount = existingItem.count - 1;

            updatedBasket = state.basket.map((basketItem) =>
              basketItem.item.itemId === item.itemId
                ? {
                    ...basketItem,
                    count: newCount,
                    totalPrice: item.itemSizes[0].prices[0].price * newCount,
                  }
                : basketItem,
            );
          } else {
            updatedBasket = state.basket.filter(
              (basketItem) => basketItem.item.itemId !== item.itemId,
            );
          }

          return {
            basket: updatedBasket,
            totalCount: calculateTotalCount(updatedBasket),
            totalPrice: calculateTotalPrice(updatedBasket),
          };
        }),

      // Удаление товара из корзины
      removeFromBasket: (item: Item) =>
        set((state) => {
          const updatedBasket = state.basket.filter(
            (basketItem) => basketItem.item.itemId !== item.itemId,
          );

          return {
            basket: updatedBasket,
            totalCount: calculateTotalCount(updatedBasket),
            totalPrice: calculateTotalPrice(updatedBasket),
          };
        }),

      removeAllFromBasket: () =>
        set({ basket: [], totalCount: 0, totalPrice: 0 }),
    }),
    {
      name: "basket",
    },
  ),
);
