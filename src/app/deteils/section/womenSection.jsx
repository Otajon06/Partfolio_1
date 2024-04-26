'use client';
import Cards from "../cards";
import styles from "../../page.module.css";
import { addDoc, collection, db, deleteDoc, getDocs, limit, orderBy, query } from "../../../FirebaseComfig";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const WomenSection = () => {
    const [product,setProduct] = useState([])
    const [info,setInfo] = useState([])
    const [size,setSize] = useState([])
    const [collor,setCollor] = useState([])
    const [price,setPrice] = useState('')
    const [setKol] = useState(0)
    const [chenge,setchenge] = useState(false)
    const [loading,setLoading] = useState(true)
    useEffect (() =>{
        
        const getData = async ()=>{
            try {
                const q = collection(db, 'woMen_products_nike');
                const dataBasa = await getDocs(q);
                const basaArr = dataBasa.docs.map(doc=>doc.data());
                setProduct(basaArr);
            } catch (error) {
                console.log(error);                
            }
            finally {
                setLoading(false);
            }
        }
        getData();
        setchenge(false)
    },[chenge])

    

    const black = product.filter(e => e.collor == 'black');
    const white = product.filter(e => e.collor == 'white');
    const red = product.filter(e => e.collor == 'red');
    const green = product.filter(e => e.collor == 'green'); 
    const blue = product.filter(e => e.collor == 'blue');
    const purpule = product.filter(e => e.collor == 'purple');
    const pink = product.filter(e => e.collor == 'pink');
    const another = product.filter(e => e.collor == 'another');

    console.log(product.map(e => e));
    const kol = ['1' , '2' , '3' , '4' ] 
    return (
        <div className={styles.WmSection}>
            <section>
                    <h3 className={styles.rout}><Link href={'/'} style={{color:'blue'}}>Home</Link>/women</h3>
                    
                    <div className={styles.Card_container}>
                        <div className={styles.Back_Card_container}>
                        <div className={styles.Card_header}>
                            <h1>WOMEN SHOES</h1>
                        
                        <div className={styles.brends}>
                            <img src="https://sneakertown.kz/upload/iblock/11b/11b6091e46bdf1a239b576aa695eb6a9.png" alt="" />
                            <img src="https://upload.wikimedia.org/wikipedia/commons/7/76/Louis_Vuitton_logo_and_wordmark.svg" alt="" />
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Gucci_logo.svg/195px-Gucci_logo.svg.png" alt="" />
                        </div>
                        </div>
                        <div className={styles.Card_body}>
                            <div className={styles.details}>
                            <div className={styles.price_infos}>
                                <p>$59.97</p>
                            <div className={styles.sorcul1}></div>
                            <div className={styles.horiz}></div>
                            <div className={styles.sorcul2}></div>
                                <p>$210</p>
                            </div>
                            <h2>Collors</h2>
                            <Link className={styles.collors} to={'./black_shoes'}> <div className={styles.collor1}></div> Black: {black.length}</Link>
                            <Link className={styles.collors} to={'./white_shoes'}> <div className={styles.collor2}></div> White: {white.length}</Link>
                            <Link className={styles.collors} to={'./red_shoes'}> <div className={styles.collor3}></div> Red: {red.length}</Link>
                            <Link className={styles.collors} to={'./green_shoes'}> <div className={styles.collor4}></div> Green: {green.length}</Link>
                            <Link className={styles.collors} to={'./blue_shoes'}> <div className={styles.collor5}></div> Blue: {blue.length}</Link>
                            <Link className={styles.collors} to={'./purpule_shoes'}> <div className={styles.collor6}></div> Purpule: {purpule.length}</Link>
                            <Link className={styles.collors} to={'./pink_shoes'}> <div className={styles.collor7}></div> Pink: {pink.length}</Link>
                            <Link className={styles.collors} to={'./another_shoes'}> <div className={styles.collor8}></div> Another: {another.length}</Link>
                            </div>
                            <div className={styles.Card_request}>
                            {loading? (<div className={styles.loadings}><div className={styles.loading}></div><div className={styles.loading2}></div><div className={styles.loading3}></div></div>):product.map(e=>
                                <Cards rasm={e.rasm}
                                rasm2={e.rasm2}
                                rasm3={e.rasm3}
                                rasm4={e.rasm4} 
                                title={e.title} 
                                style={styles.card_img}
                                style2={styles.card_img2}
                                style3={styles.card_img3}
                                style4={styles.card_img4}
                                price={e.price}
                                gen={'men'}
                                 />
                            )}
                            </div>
                            </div>
                        </div>
                    </div>
                
            </section>
        </div>
    )
}

export default WomenSection;