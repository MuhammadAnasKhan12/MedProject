import { create } from "zustand";

interface NavState {
  mobileMenuOpen: boolean;
  scrolled: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  toggleMobileMenu: () => void;
  setScrolled: (scrolled: boolean) => void;
}

export const useNavStore = create<NavState>((set) => ({
  mobileMenuOpen: false,
  scrolled: false,
  setMobileMenuOpen: (open) => set({ mobileMenuOpen: open }),
  toggleMobileMenu: () =>
    set((state) => ({ mobileMenuOpen: !state.mobileMenuOpen })),
  setScrolled: (scrolled) => set({ scrolled }),
}));
