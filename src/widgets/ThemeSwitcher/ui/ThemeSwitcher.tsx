import React from 'react';
import cls from './ThemeSwitcher.module.scss'
import {classNames} from "@shared/lib/className/className";
import {Theme, useTheme} from "@app/providers/ThemeProvider";
import Sun from '@shared/assets/icons/sub.svg?react';
import Moon from '@shared/assets/icons/moon.svg?react';
import {Button, ThemeButton} from "@shared/ui/Button/Button";

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = ({className}: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme() ;


    return (
        <Button theme={ThemeButton.CLEAR} className={classNames(cls.ThemeSwitcher, {}, className ? [className] : [])} onClick={toggleTheme}
                style={{ width: 50, height: 50 }}
        >
            <div style={{ width: '100%', height: '100%' }}>
                {theme === Theme.DARK ? <Moon width={30} height={30} /> : <Sun />}
            </div>
       </Button>
    );
};

