import React, {ButtonHTMLAttributes, FC} from 'react';
import {classNames} from "@shared/lib/className/className";
import cls from './Button.module.scss'

export enum ThemeButton {
    CLEAR = 'clear',
    OUTLINE = 'outlin',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted',

}


interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string,
    theme?: ThemeButton,
    square?: boolean,
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        theme,
        square,
        ...otherProps
    } = props;

    const mods: { [p: number]: boolean | undefined } = {
        [cls.square]: square,
    };

    const themeClass = theme && cls[theme] ? cls[theme] : '';

    return (
        <button
            className={classNames(
                cls.Button,
                mods,
                [className, themeClass]
            )}
            {...otherProps}
        >
            {children}
        </button>
    );
};

