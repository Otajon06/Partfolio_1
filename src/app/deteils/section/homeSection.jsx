import HomeCards from "../homeCards";
import styles from "../../page.module.css";
import { collection, db, getDocs, limit, orderBy, query,addDoc } from "../../../FirebaseComfig";
import { useEffect, useState } from "react";
const HomeSection = () => {

    const [product,setProduct] = useState([])
    const [productMen,setProductMen] = useState([])
    const [chenge,setchenge] = useState(false)
    const [rasm,setRasm] = useState([])
    const [rasm2,setRasm2] = useState([])
    const [rasm3,setRasm3] = useState([])
    const [rasm4,setRasm4] = useState([])
    const [title,setTitle] = useState([])
    const [body,setBody] = useState([])
    const [price,setPrice] = useState([])
    const [collor,setCollor] = useState([])
    useEffect (() =>{
    const getData = async ()=>{
        try {
            const q = query(collection(db, 'woMen_products_nike'),limit(3));
            const dataBasa = await getDocs(q);
            const basaArr = dataBasa.docs.map(doc=>doc.data());
            setProduct(basaArr);
        } catch (error) {
            // console.log(error);                
        }
    }
    const getMenData = async ()=>{
        try {
            const q = query(collection(db, 'men_products_nike'),limit(3));
            const dataBasa = await getDocs(q);
            const basaArr = dataBasa.docs.map(doc=>doc.data());
            setProductMen(basaArr);
        } catch (error) {
            // console.log(error);                
        }
    }
    getData();
    getMenData();
    setchenge(false)
},[chenge])
const setInfo = async (e)=>{
    e.preventDefault();
    setchenge(true);
    if(!rasm.trim())return

    await addDoc(collection(db , 'woMen_products_nike'),{
        rasm: rasm,
        rasm2: rasm2,
        rasm3: rasm3,
        rasm4: rasm4,
        title: title,
        body: body,
        price: price,
        collor: collor,
    })
    setRasm([])
    setRasm2([])
    setRasm3([])
    setRasm4([])
    setTitle([])
    setBody([])
    setPrice([])
    setCollor([])
}
    // console.log(product);
    return (
        <div className={styles.HSection} >
            
            <section>
                {/* {product.length}
            <div style={{background:'red',height:'23rem'}}>
            <form onSubmit={setInfo}>
                <label htmlFor="">Title :
                <input type="text" value={title} onChange={e=>setTitle(e.target.value)}style={{width:'200px',height:'50px'}} />
                </label><br />
                <label htmlFor="">Price :
                    <input type="text" value={price} onChange={e=>setPrice(e.target.value)}style={{width:'200px',height:'50px'}} />
                </label><br />
                <label htmlFor="">Src :
                <input type="text" value={rasm} onChange={e=>setRasm(e.target.value)} style={{width:'200px',height:'50px'}} />
                </label><label htmlFor="">Src2 :
                    <input type="text" value={rasm2} onChange={e=>setRasm2(e.target.value)}style={{width:'200px',height:'50px'}} />
                </label><label htmlFor="">Src3 :
                <input type="text" value={rasm3} onChange={e=>setRasm3(e.target.value)}style={{width:'200px',height:'50px'}} />
                </label><label htmlFor="">Src4 :
                <input type="text" value={rasm4} onChange={e=>setRasm4(e.target.value)}style={{width:'200px',height:'50px'}} />
                </label><br />
                <label htmlFor="">Body :
                <input type="text" value={body} onChange={e=>setBody(e.target.value)}style={{width:'200px',height:'50px'}} />
                </label><br />
                <label htmlFor="">Color :
                <input type="radio" value={'white'} onChange={e=>setCollor(e.target.value)} name="collor"style={{width:'30px',height:'30px'}}/>oq
                <input type="radio" value={'black'} onChange={e=>setCollor(e.target.value)} name="collor"style={{width:'30px',height:'30px'}}/>qora
                <input type="radio" value={'red'} onChange={e=>setCollor(e.target.value)} name="collor"style={{width:'30px',height:'30px'}}/>qizil
                <input type="radio" value={'blue'} onChange={e=>setCollor(e.target.value)} name="collor"style={{width:'30px',height:'30px'}}/>ko'k
                <input type="radio" value={'yellow'} onChange={e=>setCollor(e.target.value)} name="collor"style={{width:'30px',height:'30px'}}/>sariq
                <input type="radio" value={'green'} onChange={e=>setCollor(e.target.value)} name="collor"style={{width:'30px',height:'30px'}}/>yashil
                    <input type="radio" value={'pink'} onChange={e=>setCollor(e.target.value)} name="collor"style={{width:'30px',height:'30px'}}/>pushti <br />
                    <input type="radio" value={'purple'} onChange={e=>setCollor(e.target.value)} name="collor"style={{width:'30px',height:'30px'}}/>siyuhrang 
                    <input type="radio" value={'another'} onChange={e=>setCollor(e.target.value)} name="collor"style={{width:'30px',height:'30px'}}/>boshqa
                </label><br />
                
                <button type="submit" disabled={rasm=='' || title==''}style={{width:'200px',height:'50px'}}>Send Info</button>
                </form>
            </div> */}
                <div className={styles.skidka}>
                    <img src="https://ss.sport-express.ru/userfiles/materials/186/1866350/volga.jpg" alt="" className={styles.skidka_img}/>
                    <div className={styles.skidka_title_container}>
                    <h2 className={styles.skidka_title}>Discount 20% For All Orders</h2>
                    <h2 className={styles.skidka_title}>Over $2000</h2>
                    <h5 className={styles.skidka_title}>Use coupon code<strong style={{fontFamily:'cursive',color:'gray'}}>DISCOUNT20</strong></h5>
                    <h5 className={styles.skidka_title}>Use coupon DISCOUNT20</h5>
                    </div>
                </div>
                <div style={{display:"flex",flexWrap:'wrap',justifyContent:'center',alignItems:'center'}}>
                <h1 className={styles.h1}>MEN SHOES</h1>
                </div>
                <div style={{margin:'15px 0 0 0 '}} className={styles.Card_container}>
                    {product.map(e=>
                        <HomeCards rasm={e.rasm} 
                        title={e.title} 
                        style={styles.card_img}
                        collor={e.collor}
                        gen={'women'}
                        btn={e.btn} />
                        )}
                </div>
                <div style={{display:"flex",flexWrap:'wrap',justifyContent:'center',alignItems:'center'}}>
                <h1>WOMEN SHOES</h1>
                </div>
                <div className={styles.Card_container}>
                    {productMen.map(e=>
                        <HomeCards rasm={e.rasm} 
                        rasm2=''
                        title={e.title} 
                        style={styles.card_img}
                        gen={'men'}
                        collor={e.collor}
                        btn={e.btn} />
                        
                        )}
                </div>
                
            </section>
           
        </div>
    )
} 
export default HomeSection;
