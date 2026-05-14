import { create } from "zustand";

interface NavState {
  mobileMenuOpen: boolean;
  activeLink: string;
  scrolled: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  toggleMobileMenu: () => void;
  setActiveLink: (link: string) => void;
  setScrolled: (scrolled: boolean) => void;
}

export const useNavStore = create<NavState>((set) => ({
  mobileMenuOpen: false,
  activeLink: "Home",
  scrolled: false,
  setMobileMenuOpen: (open) => set({ mobileMenuOpen: open }),
  toggleMobileMenu: () =>
    set((state) => ({ mobileMenuOpen: !state.mobileMenuOpen })),
  setActiveLink: (link) => set({ activeLink: link }),
  setScrolled: (scrolled) => set({ scrolled }),
}));
