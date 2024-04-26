import React, { useEffect, useState } from "react";
import { addDoc, collection, db, deleteDoc, getDocs, limit, orderBy, query } from "../../FirebaseComfig";

import Navbar from "../deteils/navbar";
import styles from "../page.module.css";
import Cards from "../deteils/cards";
export default function Page(props) {
    const [product,setProduct] = useState([])
    const [productMen,setProductMen] = useState([])
    const [chenge,setchenge] = useState(false)

    useEffect (() =>{
        const getData = async ()=>{
            try {
                const q = query(collection(db, 'woMen_products_nike'),limit(Infinity));
                const dataBasa = await getDocs(q);
                const basaArr = dataBasa.docs.map(doc=>doc.data());
                setProduct(basaArr);
            } catch (error) {
                console.log(error);                
            }
        }
        const getMenData = async ()=>{
            try {
                const q = query(collection(db, 'men_products_nike'),limit(Infinity));
                const dataBasa = await getDocs(q);
                const basaArr = dataBasa.docs.map(doc=>doc.data());
                setProductMen(basaArr);
            } catch (error) {
                console.log(error);                
            }
        }
        getData();
        getMenData();
        setchenge(false)
    },[chenge])
    const result = product.filter(e=> e.title == (props.title)&& e.collor ==(props.collor));
    // const resultMen = productMen.filter(e=> e.title == );
    console.log(result);
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <Navbar/>
      </div>
        {/* <h1>a {data.map(e=> e)}</h1> */}
        {result.map(e=> <Cards
            rasm={e.rasm} 
            rasm2={e.rasm2}
            style2={styles.card_img2}
            title={e.title} 
            style={styles.card_img}
            gen={'men'}
            btn={e.btn}
            />)}
        <h1>a</h1>
        <h1>a</h1>
        <h1>a</h1>
        <h1>a</h1>
        <h1>a</h1>
        {/* <ShopSection/> */}
    </main>
  );
}
