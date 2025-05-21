import {useCallback, useState} from "react";

export const useModal = () => {
    const [showModal, setShowModal] = useState(false);
    const open = useCallback(() => setShowModal(true), []);
    const close = useCallback(() => setShowModal(false), []);
    return {showModal, open, close};
}