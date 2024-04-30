import { Link } from "react-router-dom";
import styles from "../page.module.css";

const Buy_Cards = (props) => {
    return (
                <tbody>
                    <td><img src={props.rasm} alt="" className={styles.buy_img}/></td>
                    <td><h2>{props.qty}pc</h2></td>
                    <td><h2 className={styles.buy_title}>{props.title}</h2></td>
                    <td><h2 className={styles.buy_price}>{props.price}</h2></td>
                    <td>
                    <Link to={`/cards/${props.title}/${props.collor}`}><button className={styles.buy_btn} type="submit" >Buy</button></Link>
                    </td>
                </tbody>
    )
}

export default Buy_Cards;