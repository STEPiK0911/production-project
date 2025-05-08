import {createContext} from "react";

export const Theme = {
    LIGHT: "light",
    DARK: "dark",
} as const;

export type ThemeKey = typeof Theme[keyof typeof Theme];

export interface ThemeContextProps {
    theme?: ThemeKey;
    setTheme: (_theme: ThemeKey) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({theme: undefined,
    setTheme: () => {},})

export const LOCAL_STORAGE_KEY = 'theme'
