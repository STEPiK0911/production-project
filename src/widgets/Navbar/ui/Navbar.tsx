import React, {useState} from 'react';
import {classNames} from "@shared/lib/className/className";
import cls from './Navbar.module.scss'
import {AppLink, AppLinkTheme} from "@shared/ui/AppLink/AppLink";
import {LoginModal} from "@features/AuthByUsername";
import {Button} from "@shared/ui/Button/Button";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({className}: NavbarProps) => {
    const [isAuthModel, setIsAuthModal] = useState(false)

    const OnTogle = () => {
        setIsAuthModal(false)
    }

    const OnTogleOpen = () => {
        setIsAuthModal(true)
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
                <LoginModal isOpen={isAuthModel} onClose={OnTogle}/>
            </div>
        </div>
    );
};
