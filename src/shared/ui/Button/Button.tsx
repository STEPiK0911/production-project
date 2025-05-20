import React, {ButtonHTMLAttributes, FC} from 'react';
import {classNames} from "@shared/lib/className/className";
import cls from './Button.module.scss'

export enum ThemeButton {
    CLEAR = 'clear',
    OUTLINE = 'outlin',
}


interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string,
    theme?: ThemeButton,
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        theme,
        ...otherProps
    } = props;

    return (
        <button
            className={classNames(
                cls.Button,
                theme ? { [cls[theme]]: true } : {},
                className ? [className] : []
            )}
            {...otherProps}
        >
            {children}
        </button>
    );
};

