import React, {useState} from 'react';
import {classNames} from "@shared/lib/className/className";
import {ThemeSwitcher} from "@widgets/ThemeSwitcher";
import cls from './Sidebar.module.scss'
import {LangSwitcher} from "@widgets/LangSwitcher/LangSwitcher";
import {Button, ThemeButton} from "@shared/ui/Button/Button";
import {SideBarItems} from "@widgets/Sidebar/ui/SideBarItems/SideBarItems";

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({className}: SidebarProps) => {
    const [collapsed, setCollapsed] = useState<boolean>(true);

    

    const toggleTheme = () => {
        setCollapsed(!collapsed);
    }
    return (
        <div className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, className ? [className] : [])}>
            { }
            <div className={cls.com}>
            <SideBarItems/>
            </div>
            <Button square theme={ThemeButton.BACKGROUND_INVERTED} className={cls.collapsedBtn} onClick={toggleTheme}>{collapsed ? ">" : "<"}</Button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang} />
            </div>
        </div>
    );
};

