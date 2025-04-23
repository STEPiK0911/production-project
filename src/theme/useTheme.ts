import {LOCAL_STORAGE_KEY, Theme, ThemeContext} from "./ThemeContext.ts";
import {useContext} from "react";

interface UseThemeResault {
    toggleTheme: () => void;
    theme: Theme;
}

export function useTheme(): UseThemeResault {

    const context = useContext(ThemeContext);

    if (!context || context.theme === undefined) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }

    const { theme, setTheme } = context;


    const toggleTheme = () => {
        const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK
        setTheme(newTheme);
        localStorage.setItem(LOCAL_STORAGE_KEY ,"theme" );
    }

    return {
        theme,
        toggleTheme
    }
}