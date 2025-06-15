import React, {memo} from 'react';
import {useTranslation} from "react-i18next";
import {Button, ThemeButton} from "@shared/ui/Button/Button";

interface LangSwitcherProps {
    className?: string;
}

export const LangSwitcher: React.FC<LangSwitcherProps> = memo(({ className }) => {
    const {t, i18n} = useTranslation();

    const toggleLang = () => {
        i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
    };

    return (
        <Button
            className={className}
            theme={ThemeButton.CLEAR}
            onClick={toggleLang}
        >
            {t("Язык")}
        </Button>
    );
});


