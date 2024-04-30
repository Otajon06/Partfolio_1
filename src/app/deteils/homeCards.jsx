import { Link } from "react-router-dom";
import styles from "../page.module.css";
const HomeCards = (props) => {
    return (
        <div className={styles.Card} >
                
                <div className={styles.pictures}>
            <img src={props.rasm} alt="IMG" className={props.style} />
            </div>
            <div>
                <h3 className={styles.title}>{props.title}</h3>
                <h3 className={styles.bodya}>{props.body}</h3>
                <h2 className={styles.title}>{props.price}</h2>
            </div>
                <Link to={`/${props.gen}/${props.title}/${props.collor}`}><button className={styles.btn} type="submit" >View more!!</button></Link>
        </div>
    )
}

export default HomeCards;