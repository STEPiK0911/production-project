import React, { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from "@shared/lib/className/className";
import cls from './Button.module.scss';

export enum ThemeButton {
    CLEAR = 'clear',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string,
    theme?: ThemeButton,
    square?: boolean,
    disabled?: boolean,
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        theme,
        square,
        disabled,
        ...otherProps
    } = props;

    const mods: Record<string, boolean | undefined> = {
        [cls.square]: square,
        [cls.disabled]: disabled,
    };

    const themeClass = theme && cls[theme] ? cls[theme] : '';

    return (
        <button
            className={classNames(
                cls.Button,
                mods,
                [className, themeClass]
            )}
            disabled={disabled}
            {...otherProps}
        >
            {children}
        </button>
    );
};
