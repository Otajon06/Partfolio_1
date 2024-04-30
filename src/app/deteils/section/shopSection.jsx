import Cards from "../cards";
import styles from "../../page.module.css";
import { addDoc, collection, db, deleteDoc, getDocs, limit, orderBy, query,doc } from "../../../FirebaseComfig";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Buy_Cards from "../buy_cards";
// import bootstrap from "react-bootstrap";
const ShopSection = () => {
    // const carousel = new bootstrap.Carousel('#myCarousel')
    const [product,setProduct] = useState([])
    const [val, setVal] = useState([])    
    const [chenge,setChenge] = useState(false)
    useEffect (() =>{
        const getData = async ()=>{
            try {
                const q = collection(db, 'buy_shoes');
                const dataBasa = await getDocs(q);
                const basaArr = dataBasa.docs.map(doc=>({...doc.data(), id: doc.id}));
                setProduct(basaArr);
            } catch (error) {
                console.log('Xato');                
            }
        }
        getData();
        setChenge(false)
    },[chenge])

    const delClick = async (e) => {
        e.preventDefault();
        try {
          const querySnapshot = await getDocs(collection(db, 'buy_shoes'));
          let docIdToDelete = null;
      
          // Foydalanuvchi nomiga mos keladigan birinchi dokumentni topish
          querySnapshot.forEach((doc) => {
            if (doc.data().title == val) {
                docIdToDelete = doc.id;
              }
          });
      
          if (docIdToDelete) {
            await deleteDoc(doc(db, 'buy_shoes', docIdToDelete));
            console.log("Dokument muvaffaqiyatli o'chirildi");
          } else {
            console.error("Foydalanuvchi nomiga mos keladigan dokument topilmadi");
          }
        } catch (error) {
          console.error("Dokumentni o'chirishda xato:", error);
        }
        setChenge(true);
      };  
    // console.log(product[0].price );
    return (
        <div className={styles.ShSection}>
            <table>
                    <h3 className={styles.rout}><Link href={'/'} style={{color:'blue'}}>Home</Link>/Shop</h3>
                    <div style={{width:'100%',margin:'5px 0px 5px 10%'}}>
                    <input type="text" name="" id="" value={val} onChange={e=>setVal(e.target.value)} placeholder="Typing product title" />
                    <button onClick={delClick}>Remuve</button>
                    </div>
                    <div className={styles.shop_body}>
                    <thead>
                        <th>Pictures:</th>
                        <th>Quality:</th>
                        <th>Title:</th>
                        <th>Price:</th>
                        <th>For buy:</th>
                    </thead>
                    <tbody >
                    {product.map(e=> (
                        <>
                        <Buy_Cards rasm={e.rasm}
                        title={e.title}
                        price={e.price}
                        qty={e.quelty}
                        collor={e.collor}
                        />
                        </>
                    ))}
                    </tbody>
                    </div>
            </table>
            <div style={{width:'100%',margin:'5px 0px 5px 10%'}}>
            <h2>Promotion code?</h2>
            <input type="text" name="" id=""placeholder="Enter coupon code!" />
            <button>Apply</button>
            </div>
        </div>
    )
}

export default ShopSection;