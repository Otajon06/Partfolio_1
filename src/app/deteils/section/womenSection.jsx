import Cards from "../cards";
import styles from "../../page.module.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { addDoc, collection, db, deleteDoc, getDocs } from "../../../FirebaseComfig";

const WomenSection = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const getData = async () => {
            try {
                const q = collection(db, 'woMen_products_nike');
                const dataBasa = await getDocs(q);
                const basaArr = dataBasa.docs.map(doc => doc.data());
                setProducts(basaArr);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };
        getData();
    }, []);

    const moveToPage = async (data, destinationCollection) => {
        try {
            const destCollectionRef = collection(db, destinationCollection);
            await Promise.all(data.map(async (item) => {
                await addDoc(destCollectionRef, item); // Add item to destination collection
                await deleteDoc(collection(db, 'woMen_products_nike', item.id)); // Delete item from original collection
            }));
        } catch (error) {
            console.error("Error moving data:", error);
        }
    };

    useEffect(() => {
        if (products.length > 0) {
            const highPriceItems = products.filter(item => item.price > 200);
            moveToPage(highPriceItems, 'new_destination_collection');
        }
    }, [products]);

        const black = products.filter(e => e.collor == 'black');
    const white = products.filter(e => e.collor == 'white');
    const red = products.filter(e => e.collor == 'red');
    const green = products.filter(e => e.collor == 'green'); 
    const blue = products.filter(e => e.collor == 'blue');
    const purpule = products.filter(e => e.collor == 'purple');
    const pink = products.filter(e => e.collor == 'pink');
    const another = products.filter(e => e.collor == 'another');


        return (
        <div className={styles.WmSection}>
            <section>
            <div className={styles.space}></div>

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
                                <h2 style={{borderBottom:'1px solid black',width:'100%'}}>Price:</h2>
                            <div className={styles.price_infos} style={{marginTop:'5px'}}>
                                <p>$59.97</p>
                            <div className={styles.sorcul1}></div>
                            <div className={styles.horiz}></div>
                            <div className={styles.sorcul2}></div>
                                <p>$210</p>
                            </div>
                            <h2 style={{borderBottom:'1px solid black',width:'100%'}}>Collors:</h2>
                            <p className={styles.collors} to={'./black_shoes'} style={{marginTop:'5px'}}> <div className={styles.collor1}></div> Black: {black.length}</p>
                            <p className={styles.collors} to={'./white_shoes'}> <div className={styles.collor2}></div> White: {white.length}</p>
                            <p className={styles.collors} to={'./red_shoes'}> <div className={styles.collor3}></div> Red: {red.length}</p>
                            <p className={styles.collors} to={'./green_shoes'}> <div className={styles.collor4}></div> Green: {green.length}</p>
                            <p className={styles.collors} to={'./blue_shoes'}> <div className={styles.collor5}></div> Blue: {blue.length}</p>
                            <p className={styles.collors} to={'./purpule_shoes'}> <div className={styles.collor6}></div> Purpule: {purpule.length}</p>
                            <p className={styles.collors} to={'./pink_shoes'}> <div className={styles.collor7}></div> Pink: {pink.length}</p>
                            <p className={styles.collors} to={'./another_shoes'}> <div className={styles.collor8}></div> Another: {another.length}</p>
                            </div>
                            <div className={styles.Card_request}>
                    
                            {loading? (<div className={styles.loadings}><div className={styles.loading}></div><div className={styles.loading2}></div><div className={styles.loading3}></div></div>):
                            (products.map(e => (
                                <Cards
                                    key={e.id}
                                    rasm={e.rasm}
                                    rasm2={e.rasm2}
                                    rasm3={e.rasm3}
                                    rasm4={e.rasm4}
                                    title={e.title}
                                    style={styles.card_img}
                                    style2={styles.card_img2}
                                    style3={styles.card_img3}
                                    style4={styles.card_img4}
                                    price={e.price}
                                    collor={e.collor}
                                    gen={'women'}
                                />
                            )))}
                            </div>
                            </div>
                        </div>
                    </div>
                
            </section>
        </div>
    )
}

export default WomenSection;
