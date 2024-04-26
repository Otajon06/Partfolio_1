'use client';
import Cards from "../cards";
import styles from "../../page.module.css";
import { addDoc, collection, db, deleteDoc, getDocs, limit, orderBy, query } from "../../../FirebaseComfig";
import { useEffect, useState } from "react";
import Link from "next/link";
const ShopSection = () => {
    const [product,setProduct] = useState([])
    const [info,setInfo] = useState([])
    const [size,setSize] = useState('30')
    const [collor,setCollor] = useState([])
    const [price,setPrice] = useState('')
    const [kol,setKol] = useState([])
    const [chenge,setchenge] = useState(false)
    useEffect (() =>{
        const getData = async ()=>{
            try {
                const q = collection(db, 'men_products');
                const dataBasa = await getDocs(q);
                const basaArr = dataBasa.docs.map(doc=>({...doc.data(), id: doc.id}));
                setProduct(basaArr);
            } catch (error) {
                console.log('Xato');                
            }
        }
        getData();
        setchenge(false)
    },[chenge])

    const sendInfo = async(e)=>{
        e.prevetDefault();
        setchenge(true)
        if(!kol.trim()) return;
            await addDoc(collection(db, 'buy_products'),{
                miqdori: kol,
                rang: collor,
                razmer: size,
                narxi: price,
            })
            setKol('')
            setCollor('')
            setSize('')
            setPrice('')
        } 
        const delData= async ()=> {
            try {
                await deleteDoc(doc(db, 'men_products'))
            } catch (error) {
                console.log('xato');
            }
            delData();
            setchenge(true);
        }
    console.log(product);
    const prices= ['','$100','$150','$200','$250','$300','$350','$400','$450','$500','$600','$700','$800']
    const imgs= ['','Boots','Sneakers','Leopards','Skechers','Shoes','Slippers']
    const imgs_1= ['https://alpindustria.ru/i/product/l/-46173_1.jpg','https://images.satu.kz/174032094_krossovki-zhenskie-on.jpg','https://yesoriginal.com.ua/image/cache/catalog/other_images/59-98144-1-472x497.webp']

    return (
        <div className={styles.MSection}>
            <section>
                    <h3 className={styles.rout}><Link href={'/'} style={{color:'blue'}}>Home</Link>/Shop</h3>
                    <div>
                        <form onSubmit={sendInfo}>
                            <label className="last_label">Shoes
                                <select  >
                                    {imgs.map(e=>(
                                        <option value={e}>{e}</option>
                                    ))}
                                </select>
                            </label>
                            <label htmlFor="">Quantities
                                <input type="number" min='1'max='9' value={kol} onChange={e => setKol(e.target.value)} name="a"/>
                                </label>
                            <label htmlFor="">Color
                                <input type="color" value={collor} onChange={e => setCollor(e.target.value.toString(''))} />
                            </label>
                            <label htmlFor="">Size
                                <input type="range"min='5'max='50' value={size} steps='1' onChange={e => setSize(e.target.value)} />
                                {size}
                            </label>
                            <label className="last_label">Price
                                <select  onChange={(e) => setPrice(e.target.value)}>
                                    {prices.map(e=>(
                                        <option value={e}>{e}</option>
                                    ))}
                                </select>
                            </label>
                            <button type="submit">Add to Card</button>
                        </form>
                    </div>
                
               
            </section>
        </div>
    )
}

export default ShopSection;