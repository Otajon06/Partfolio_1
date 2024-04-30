import React from "react";
import styles from "../page.module.css";
import { useEffect } from "react";
const Modal = ({ isOpen, onClose }) => {
    useEffect(() => {
        if (isOpen) {
            const timer = setTimeout(() => {
                onClose();
            }, 5000);

            return () => clearTimeout(timer);
        }
    }, [isOpen, onClose]);

    if (!isOpen) return null;
    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                <button onClick={onClose}>Close</button>
                <h2>successfully added to cards!</h2>
                <a href="/cards" className={styles.btn}>Check Cards</a>
            </div>
        </div>
    );
};

export default Modal;
