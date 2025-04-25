import React from 'react';
import {classNames} from "@shared/lib/className/className";
import cls from './Navbar.module.scss'
import {AppLink, AppLinkTheme} from "@shared/ui/AppLink/AppLink";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({className}: NavbarProps) => {
    return (
        <div className={classNames(cls.navbar, {}, className ? [className] : [])}>
            <div className={cls.links}>
                <AppLink theme={AppLinkTheme.SECONDARY} to={'/'} className={cls.mainLink}>Главная</AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to={'/about'}>о нас</AppLink>
            </div>
        </div>
    );
};
