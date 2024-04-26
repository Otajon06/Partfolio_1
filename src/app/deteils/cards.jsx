import styles from "../page.module.css";
import Page from "../pages/Pages";

const Cards = (props) => {


    
    return (
        <div className={styles.Card} >
            <div style={{display:'none'}}>
                <Page title={props.title} collor={props.collor}/>
            </div>
            <div className={styles.pictures}>
            <img src={props.rasm} alt="IMG" className={props.style} />
            <img src={props.rasm2} alt="IMG" className={props.style2} />
            <img src={props.rasm3} alt="IMG" className={props.style3} />
            <img src={props.rasm4} alt="IMG" className={props.style4} />
            </div>
            <div>
                <h1 className={styles.title}>{props.title}</h1>
                <p className={styles.body}>{props.body}</p>
                <h1 className={styles.title}>{props.price}</h1>

            </div>
            {/* <form onSubmit={setInfo} > */}
                {/* <input type="number" value={quality} onChange={e=> setQuality(e.target.value)} />soni */}
                
                <a href={`${props.title}`}><button className={styles.btn} type="submit" >Buy</button></a>
            {/* </form> */}
        </div>
    )
}

export default Cards;