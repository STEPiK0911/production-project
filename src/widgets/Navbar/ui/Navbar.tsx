import React, {useState} from 'react';
import {classNames} from "@shared/lib/className/className";
import cls from './Navbar.module.scss'
import {AppLink, AppLinkTheme} from "@shared/ui/AppLink/AppLink";
import {LoginModal} from "@features/AuthByUsername";
import {Button} from "@shared/ui/Button/Button";
import {useDispatch, useSelector} from "react-redux";
import {getUserAuthData, userAction} from "@entities/User";

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

    if(pol) {

        return (
            <div className={classNames(cls.navbar, {}, className ? [className] : [])}>
                <div className={cls.links}>
                    {/* eslint-disable-next-line i18next/no-literal-string */}
                    <AppLink theme={AppLinkTheme.SECONDARY} to={'/'} className={cls.mainLink}>Главная</AppLink>
                    {/* eslint-disable-next-line i18next/no-literal-string */}
                    <AppLink theme={AppLinkTheme.SECONDARY} to={'/about'}>о нас</AppLink>
                    <Button onClick={onLogout}>
                        logout
                    </Button>
                    <LoginModal isOpen={isAuthModal} onClose={OnTogle}/>
                </div>
            </div>
        );

    }

    return (
        <div className={classNames(cls.navbar, {}, className ? [className] : [])}>
            <div className={cls.links}>
                {/* eslint-disable-next-line i18next/no-literal-string */}
                <AppLink theme={AppLinkTheme.SECONDARY} to={'/'} className={cls.mainLink}>Главная</AppLink>
                {/* eslint-disable-next-line i18next/no-literal-string */}
                <AppLink theme={AppLinkTheme.SECONDARY} to={'/about'}>о нас</AppLink>
                <Button onClick={OnTogleOpen}>
                    open
                </Button>
                <LoginModal isOpen={isAuthModal} onClose={OnTogle}/>
            </div>
        </div>
    );
};
