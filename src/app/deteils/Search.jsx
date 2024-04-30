import React from "react";
import styles from "../page.module.css";
import { useEffect,useState } from "react";
const Search = ({ isOpen, onClose }) => {
    const [val,setVal] = useState('')
    useEffect(() => {
        if (isOpen) {
            const timer = setTimeout(() => {
                onClose();
            }, 15000);

            return () => clearTimeout(timer);
        }
    }, [isOpen, onClose]);

    if (!isOpen) return null;
    return (
        <div className={styles.searchOverlay} onClick={onClose}>
            <div className={styles.searchContent} onClick={(e) => e.stopPropagation()}>
                <button onClick={onClose}>Close</button>
                <h2>Typing product name</h2>
                <input type="text" name="" id="" value={val} onChange={e=> setVal(e.target.value)}/>
            </div>
        </div>
    );
};

export default Search;
