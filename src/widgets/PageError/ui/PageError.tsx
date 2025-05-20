import React from 'react';
import { useTranslation } from "react-i18next";
import { classNames } from "@shared/lib/className/className";
import cls from "./PageError.module.scss"
import {Button} from "@shared/ui/Button/Button";

interface PageErrorProps {
    className?: string;
}

export const PageError = ({ className }: PageErrorProps) => {
    const { t } = useTranslation();

    const updatePage = () => {
        location.reload();
    }

    return (
        <div className={classNames(cls.PageError, {}, className ? [className] : [])}>
            <p>{t("Упс, что то сломалось")}</p>
            <Button onClick={updatePage}>
                {t("Обновить страницу")}
            </Button>
        </div>
    );
};
