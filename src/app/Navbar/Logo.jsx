import styles from "../page.module.css";


const Logo = () => {
   
    return (
        <div className={styles.Logo_continer}>
        <a href="/">
            <img src="https://cdn-icons-png.flaticon.com/128/7711/7711245.png" alt="Logo" className={styles.logo} />
        </a>
        </div>
    )
}

export default Logo; 
        