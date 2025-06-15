import React, { useState} from 'react';
import {classNames} from "@shared/lib/className/className";
import cls from './Navbar.module.scss'
import {LoginModal} from "@features/AuthByUsername";
import {Button} from "@shared/ui/Button/Button";
import {useDispatch, useSelector} from "react-redux";
import {getUserAuthData, userAction} from "@entities/User";
import {useTranslation} from "react-i18next";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({className}: NavbarProps) => {
    const [isAuthModal, setIsAuthModal] = useState(false)
    const dispatch = useDispatch();

    const OnTogle = () => {
        setIsAuthModal(false)
    }

    const OnTogleOpen = () => {
        setIsAuthModal(true)
    }
    const onLogout =  () => {
        dispatch(userAction.logout());
    };
    const pol = useSelector(getUserAuthData)

    const { t } = useTranslation();

    if(pol) {

        return (
            <div className={classNames(cls.navbar, {}, className ? [className] : [])}>
                <div className={cls.links}>
                    <Button onClick={onLogout}>
                        {t("Выйти")}
                    </Button>
                    <LoginModal isOpen={isAuthModal} onClose={OnTogle}/>
                </div>
            </div>
        );

    }

    return (
        <div className={classNames(cls.navbar, {}, className ? [className] : [])}>
            <div className={cls.links}>
                <Button onClick={OnTogleOpen}>
                    {t("Войти")}
                </Button>
                <LoginModal isOpen={isAuthModal} onClose={OnTogle}/>
            </div>
        </div>
    );
};
