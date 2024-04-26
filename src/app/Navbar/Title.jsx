import styles from "../page.module.css";
import { Link } from "react-router-dom";
const Title = () => {
    return (
        <div className={styles.Title_continer}>
        <Link to={'/men'} className={styles.Title}>Men</Link>
        <Link to={'/women'} className={styles.Title}>Women</Link>
        </div>
    )
}

export default Title; 