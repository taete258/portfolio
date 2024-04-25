import create from "zustand";
import { persist } from "zustand/middleware";
export enum THEME_TYPES {
    THEME_DARK = "dark",
    THEME_LIGHT = "light",
  }
  
interface ThemeStore {
  theme: THEME_TYPES;
  toggleTheme: () => void;
}

const useThemeStore = create<ThemeStore>()((set)=>({
    theme:THEME_TYPES.THEME_DARK,
    toggleTheme:() =>  set((state) => ({
        theme: state.theme === THEME_TYPES.THEME_LIGHT
          ? THEME_TYPES.THEME_DARK
          : THEME_TYPES.THEME_LIGHT
      }))
}))

export default useThemeStore;