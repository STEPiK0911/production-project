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
                {/* eslint-disable-next-line i18next/no-literal-string */}
                <AppLink theme={AppLinkTheme.SECONDARY} to={'/'} className={cls.mainLink}>Главная</AppLink>
                {/* eslint-disable-next-line i18next/no-literal-string */}
                <AppLink theme={AppLinkTheme.SECONDARY} to={'/about'}>о нас</AppLink>
            </div>
        </div>
    );
};
