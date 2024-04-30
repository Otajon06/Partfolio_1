import { useState } from "react";
import styles from "../page.module.css";
import Search  from '../deteils/Search';
const Icon = ({props}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
    return (
        <div className={styles.Icon_continer} id="container">
            <button onClick={openModal} style={{backgroundColor:'#00000000',border:'0'}} >
            <img src="https://static-00.iconduck.com/assets.00/search-icon-2048x2048-4r9dtbbw.png" alt="Search" onClick={props} className={styles.icon} />

            </button>
            <a href="/cards" className={styles.Link}>
                <img src="https://icons.veryicon.com/png/o/commerce-shopping/merchant-product-icon-library/shopping-32.png" alt="Shop" className={styles.icon}/>
            </a>
            <a href={'/login'} className={styles.Link}>
                <img src="https://icons.veryicon.com/png/o/business/p2p/login-account-1.png" alt="Login" className={styles.icon} />
            </a>
            <Search isOpen={isModalOpen} onClose={closeModal} />
        </div>
    )
}

export default Icon; 