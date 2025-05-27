import React from 'react';
import { useTranslation } from "react-i18next";
import { classNames } from "@shared/lib/className/className";
import cls from './LoginForm.module.scss';
import {Button} from "@shared/ui/Button/Button";
import {Input} from "@shared/ui/Input/Input";

interface LoginFormProps {
    className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.LoginForm, {}, className ? [className] : [])}>
            <Input type="text" className={cls.input}/>
            <Input  type="text" className={cls.input}/>
            <Button className={cls.loginBtn}>
                {t("Войти")}
            </Button>
        </div>
    );
};
