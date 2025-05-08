import React, {useState} from 'react';
import {classNames} from "@shared/lib/className/className";
import {ThemeSwitcher} from "@widgets/ThemeSwitcher";
import cls from './Sidebar.module.scss'
import {LangSwitcher} from "@widgets/LangSwitcher/LangSwitcher";

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({className}: SidebarProps) => {
    const [collapsed, setCollapsed] = useState<boolean>(false);

    const toggleTheme = () => {
        setCollapsed(!collapsed);
    }
    return (
        <div className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, className ? [className] : [])}>
            <button onClick={toggleTheme}>toggle</button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang} />
            </div>
        </div>
    );
};

