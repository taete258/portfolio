import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export interface NavigationState {
  // Active navigation tab
  activeTab: string;

  // Scroll position
  scrollPosition: number;

  // Mobile menu state
  isMobileMenuOpen: boolean;

  // Scroll state for navbar styling
  isScrolled: boolean;

  // Actions
  setActiveTab: (tab: string) => void;
  setIsMobileMenuOpen: (isOpen: boolean) => void;
  setIsScrolled: (scrolled: boolean) => void;

  // Navigation helper
  navigateToSection: (href: string) => void;

  // Reset function
  reset: () => void;
}

const initialState = {
  activeTab: "",
  scrollPosition: 0,
  isMobileMenuOpen: false,
  isScrolled: false,
};

export const useNavigationStore = create<NavigationState>()(
  persist(
    (set, get) => ({
      ...initialState,

      setActiveTab: (tab: string) => {
        set({ activeTab: tab });
      },

      setIsMobileMenuOpen: (isOpen: boolean) => {
        set({ isMobileMenuOpen: isOpen });
      },

      setIsScrolled: (scrolled: boolean) => {
        set({ isScrolled: scrolled });
      },

      navigateToSection: (href: string) => {
        const { isMobileMenuOpen } = get();

        // Update active tab
        set({ activeTab: href });

        // Close mobile menu if open
        if (isMobileMenuOpen) {
          set({ isMobileMenuOpen: false });
        }

        // Scroll to element with optimized smooth scrolling
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      },

      reset: () => {
        set(initialState);
      },
    }),
    {
      name: "navigation-state",
      storage: createJSONStorage(() => localStorage),

      // Only persist certain state values
      partialize: (state) => ({
        activeTab: state.activeTab,
        scrollPosition: state.scrollPosition,
      }),

      // Skip hydration for client-side only state
      skipHydration: false,

      // Version for migration if needed
      version: 1,
    }
  )
);
