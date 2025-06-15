import React from 'react';
import { useTranslation } from "react-i18next";
import cls from './SideBarItems.module.scss';
import {AppLink} from "@shared/ui/AppLink/AppLink";
import {RoutePath} from "@shared/config/routeConfig/routeConfig";


export const SideBarItems = React.memo( () => {
    const { t } = useTranslation();

    return (
        <div>
        <AppLink
            to={RoutePath.MAIN}
            className={cls.link}
        >
            {t("Главная")}
        </AppLink>
        <AppLink
            to={RoutePath.ABOUT}
            className={cls.link}
        >
            {t("о нас")}
        </AppLink>
            <AppLink
                to={RoutePath.PROFILE}
                className={cls.link}
            >
                {t("Профиль")}
            </AppLink>
        </div>
    );
});
