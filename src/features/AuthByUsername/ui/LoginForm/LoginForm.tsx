import React, {useCallback} from 'react';
import { useTranslation } from "react-i18next";
import { classNames } from "@shared/lib/className/className";
import cls from './LoginForm.module.scss';
import {Button} from "@shared/ui/Button/Button";
import {Input} from "@shared/ui/Input/Input";
import {useDispatch, useSelector} from "react-redux";
import {loginAction} from "@features/AuthByUsername/model/slice/loginSlice";
import {getLoginState} from "@features/AuthByUsername/model/selectors/getLoginState/getLoginState";
import {loginByUsername} from "@features/AuthByUsername/model/loginByUsername/loginByUsername";

interface LoginFormProps {
    className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
    const { t } = useTranslation();

    const loginForm = useSelector(getLoginState)

    const dispatch = useDispatch();

    const onChangeUsername = useCallback((value:string) => {
        dispatch(loginAction.setUsername(value))
    }, [dispatch])

    const onChangePassword = (value:string) => {
        dispatch(loginAction.setPassword(value))
    }

    const isLoading = loginForm?.isLoading;
    const isError = loginForm?.error;


    const onLoginClick = () => {
        const { username, password } = loginForm || {};
        dispatch(loginByUsername({ username, password }));
    };

    return (
        <div className={classNames(cls.LoginForm, {}, className ? [className] : [])}>
            {isError && <div>{isError}</div>}
            <Input value={loginForm?.username} onChange={onChangeUsername} type="text" className={cls.input}/>
            <Input value={loginForm?.password} onChange={onChangePassword} type="text" className={cls.input}/>
            <Button disabled={isLoading} onClick={onLoginClick} className={cls.loginBtn}>
                {t("Войти")}
            </Button>
        </div>
    );
};
