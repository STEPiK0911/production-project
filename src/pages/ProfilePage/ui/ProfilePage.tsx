import React from 'react';
import { classNames } from "@shared/lib/className/className";
import cls from './ProfilePage.module.scss';

interface ProfilePageProps {
    className?: string;
}

export const ProfilePage = ({ className }: ProfilePageProps) => {

    return (

        <div className={classNames(cls.ProfilePage, {}, className ? [className] : [])}>
            PROFILE
        </div>
    );
};
