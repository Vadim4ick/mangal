import { create } from "zustand";

interface NavbarItem {
  id: string;
  title: string;
}

interface State {
  fixed: boolean;
  setFixed: (val: boolean) => void;
  navbar: NavbarItem[];
  setNavbar: (val: NavbarItem[]) => void;

  isLoading: boolean;
  setIsLoading: (val: boolean) => void;
}

export const useHeaderStore = create<State>((set) => ({
  fixed: false,
  setFixed: (val: boolean) => set({ fixed: val }),
  navbar: [],
  setNavbar: (val: NavbarItem[]) => set({ navbar: val }),

  isLoading: true,
  setIsLoading: (val: boolean) => set({ isLoading: val }),
}));
