import { create } from "zustand";
import { Item } from "./catalog";

interface State {
  isOpen: boolean;
  setIsOpen: (val: boolean) => void;
  item: Item | null;
  setItem: (val: Item) => void;
}

export const useModalSupplements = create<State>((set) => ({
  isOpen: false,
  setIsOpen: (val) => set({ isOpen: val }),

  item: null,
  setItem: (val) => set({ item: val }),
}));
