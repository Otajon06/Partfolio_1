import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import styles from "../page.module.css";
import Page from "../pages/PagesWomen";

const Cards = (props) => {
    console.log(props.collor);
    const {id} = useParams()
    return (
        <div className={styles.Card} >
                
                <div className={styles.pictures}>
            <img src={props.rasm} alt="IMG" className={props.style} />
            <img src={props.rasm2} alt="IMG" className={props.style2} />
            <img src={props.rasm3} alt="IMG" className={props.style3} />
            <img src={props.rasm4} alt="IMG" className={props.style4} />
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

export default Cards;