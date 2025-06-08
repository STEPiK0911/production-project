import React, {InputHTMLAttributes} from 'react';
import { classNames } from "@shared/lib/className/className";
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps{
    className?: string;
    value?: string;
    onChange?: (value: string) => void;
}

export const Input = ({ className, value, onChange, type = 'text' }: InputProps) => {

    const onChengeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
    }

    return (
        <div className={classNames(cls.Input, {}, className ? [className] : [])}>
            <input
                value={value}
                onChange={onChengeHandler}
                type={type}
            />
        </div>
    );
};
