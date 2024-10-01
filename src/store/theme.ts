import { create } from "zustand";

type ThemeProps = {
  isDarkTheme: boolean;
  setTheme(): void;
};

const useTheme = create<ThemeProps>((set) => ({
  isDarkTheme:
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches,
  setTheme: () => set(({ isDarkTheme }) => ({ isDarkTheme: !isDarkTheme })),
}));

export default useTheme;
