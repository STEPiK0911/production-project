import {LOCAL_STORAGE_KEY, Theme, ThemeContext, ThemeKey} from "@app/providers/ThemeProvider/lib/ThemeContext";
import {FC, ReactNode, useMemo, useState} from "react";
interface ThemeProviderProps {
    children: ReactNode;
}

const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
    const defaultTheme = (localStorage.getItem(LOCAL_STORAGE_KEY) as ThemeKey) || Theme.LIGHT;
    const [theme, setTheme] = useState<ThemeKey>(defaultTheme);



    const defaultProps = useMemo(() => ({
        theme: theme,
        setTheme: setTheme,
    }), [theme])

    return (
        <div>
            <ThemeContext.Provider value={defaultProps}>
                {children}
            </ThemeContext.Provider>
        </div>
    );
};

export default ThemeProvider;