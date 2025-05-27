import React from 'react';
import { useTranslation } from "react-i18next";
import { classNames } from "@shared/lib/className/className";
import cls from './LoginModal.module.scss';
import {Modal} from "@shared/ui/Modal/Modal";
import {LoginForm} from "@features/AuthByUsername/ui/LoginForm/LoginForm";

interface LoginModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

export const LoginModal = ({ className, isOpen, onClose }: LoginModalProps) => {
    const { t } = useTranslation();


    return (
        <Modal className={classNames(cls.LoginModal, {}, className ? [className] : [])} isOpen={isOpen} onClose={onClose}>
            <LoginForm/>
        </Modal>
    );
};
