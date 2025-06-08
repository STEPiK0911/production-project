import React, {ReactNode, useEffect, useState} from "react";
import styles from "./Modal.module.scss";

interface ModalProps {
    isOpen: boolean,
    onClose: () => void,
    children: ReactNode,
    className?: string
}

export const Modal = ({isOpen, onClose, children, className}: ModalProps) => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        if (isOpen) {
            // Позволяет дождаться первого рендера, чтобы потом применить анимацию
            requestAnimationFrame(() => setShow(true));
        } else {
            setShow(false);
        }
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <div
                role={"button"}
                className={`${styles.modalContent} ${show ? styles.modalOpen : ""}`}
                onClick={(e) => e.stopPropagation()}
            >
                <button className={styles.modalClose} onClick={onClose}>×</button>
                {children}
            </div>
        </div>
    );
};
