'use client';
import styles from "../../page.module.css";

const HomeFooter = () => {


    
    return (
        <div style={{marginTop:'20px'}}>
            <footer className={styles.HFooter}>
                <a href='/shop'>
                <img src="https://www.kapital24.uz/upload/media/icons/cards/system-visa_c.png" alt="visa" className={styles.visa}/>
                </a>
                <a href='/shop'>
                <img src="https://www.mastercard.com/content/dam/public/mastercardcom/uz/ru/logos/mastercard-og-image.png" alt="master_card" className={styles.mastercard} />
                </a>
                <a href='/shop'>
                <img src="https://images.sftcdn.net/images/t_app-icon-m/p/395cd2e2-9b31-11e6-b9af-00163ed833e7/1879990467/paypal-logo" alt="paypal" className={styles.paypal}/>
                </a>
            </footer>
        </div>
    )
}

export default HomeFooter;