import { useState,useEffect } from "react";
import { db,collection, getDocs,auth,addDoc } from "../../../FirebaseComfig";
import { useParams, Link } from "react-router-dom";
import Navbar from "../../deteils/navbar";
import styles from "../../page.module.css";
import Footer from '../../deteils/footer/Footer'
export default function Buying() {
    const {title,collor} = useParams()
    const [product,setProduct] = useState([])
    const [chenge,setChenge] = useState(false)
    const [total,setTotal] = useState('')
    const [qty,setQty] = useState('')
    const [user, setUser] = useState(null);
    const [fname,setFname] = useState('')
    const [telephone,setTelephone] = useState('')
    const [address,setAddress] = useState('')
    const [citiy,setCitiy] = useState('')
    const [contry,setContry] = useState('')
    const [provinse,setProvinse] = useState('')
    const [postcode,setPostcode] = useState('')
    const [sellectionRange,setSelectionRange] = useState([])
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
          setUser(user);
        });
        return () => unsubscribe();
      }, []);
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
    const setData = async(e) =>{
        e.preventDefault();
        setChenge(true);
        if(!provinse.trim())return

        await addDoc(collection(db,'user_address'),{
            name: fname,
            telephone: telephone,
            address: address,
            citiy: citiy,
            contry: contry,
            provinse: provinse,
            postcode: postcode,
            sellectionRange: sellectionRange,
    })
    }
    const filterProduct = product.filter(e=>e.title == title&& e.collor == collor)
    const totalPrice = qty * total
    // console.log(total * product.quelty);
    const cantry = ['','Usa', 'Russia', 'Poland', 'China', 'India', 'Molaisia', 'Australia', 'Japan', 'Canada', 'north-america', 'north-korea', 'UK', 'Germany', 'United States', 'French', 'United Kingdom', 'Italy', 'Ispania', 'Portugal', 'Argintina','Uzbekistan','Kazakhstan', 'Kirgizistan', 'Tadjikistan', 'Afganistan', 'Turkmanistan', 'Turkiy']
  return (
    <main className={styles.main}>
        <div className={styles.description}>
            <Navbar/>
        </div>
        <div className={styles.space}></div>
        <h3 className={styles.rout}><Link href={'/'} style={{color:'blue'}}>Home</Link>/<Link href={'/cards'} style={{color:'blue'}}>Cards</Link>/{title}</h3>
       <div className={styles.last_container}>
       <div className={styles.last_back}>
            <div className={styles.last_left_slide}>
                <div className={styles.last_top}>
                    <a href="/login"><h4 className={styles.last_contact}>Contact</h4></a>
                    <h4>{!user? (<div>Sorry, you are not registered yet <a href="/login" style={{color:'blue'}}>👉🏼Sign up</a></div>):(`${user.email}`)}</h4>
                </div>
                <div className={styles.last_top_medium}>
                    <h2 className={styles.last_top_medium_title} style={{margin:'10px 0 5px 20px'}}>Shipping Address:</h2>
                    <form action="" className={styles.last_top_medium}>
                    <div style={{display:'flex',flexWrap:'wrap'}}>
                    <label htmlFor="">Full name:
                        <input type="text" name="" id="" className={styles.last_name} value={fname} onChange={e=>setFname(e.target.value)}/>
                    </label>
                    <label htmlFor="" style={{marginLeft:'59px'}}>Telephone:
                        <input type="text" name="" id="" className={styles.last_telephone} value={telephone} onChange={e=>setTelephone(e.target.value)}/>
                    </label>
                    </div>
                    <br />
                    <label htmlFor="">Address:
                        <input type="text" name="" id="" value={address} onChange={e=>setAddress(e.target.value)}/>
                    </label>
                    <br />
                    <label htmlFor="">City:
                        <input type="text" name="" id="" value={citiy} onChange={e=>setCitiy(e.target.value)}/>
                    </label>
                    <br />
                    <h4>Country:</h4>
                    <select onChange={e=>setContry(e.target.value)}>
                        {cantry.map(e=>
                        <option value={e.value}>{e}</option>
                        )}
                    </select>
                    <br />
                    {contry == ''?(''):(<label htmlFor="">Provinse:
                            <input type="text" name="" id=""  disabled={contry == ''} value={provinse} onChange={e=>setProvinse(e.target.value)}/>
                        </label>)}
                    
                    <label htmlFor="">Postcode:
                        <input type="text" name="" id="" value={postcode} onChange={e=>setPostcode(e.target.value)}/>
                    </label>
                    <h2 className={styles.last_top_medium_title}>Shipping Method:</h2>
                    {provinse == '' ? (<h3>You have not entered an address yet</h3>):(<div>
                    <br />
                        <label htmlFor=""  className={styles.last_label1}>
                    <input type="radio" name="1" id="" value={'5'} onChange={e=>setSelectionRange(e.target.value)} style={{width:'20px',height:'20px'}} /><h4>Express Delivery - $5.00</h4>
                    </label>
                    <br />
                    <label htmlFor="" className={styles.last_label2}>
                    <input type="radio" name="1" id="" value={'15'} onChange={e=>setSelectionRange(e.target.value)} style={{width:'20px',height:'20px'}} /><h4>Express Delivery - $15.00</h4>
                    </label>
                    <br />
                    {sellectionRange == ''? ('🫸🏻choose the one you want'):<h3>Your choice: ${sellectionRange}.00</h3>}
                    
                    </div>)}
                    <button disabled={sellectionRange==''&& provinse == ''} >Continue to payment</button>
                    </form>
                </div>
            </div>
            <div className={styles.last_right_slide}>
                {filterProduct.map(e =>(<div>
                    <img src={e.rasm} alt="" className={styles.last_img} />
                    <hr />
                    <p className={styles.last_title}>{e.title}</p>
                    <hr />
                    <p className={styles.last_price}>Price: {e.price}</p>
                    <p className={styles.last_qty}>quality: {e.quelty}</p>
                    <hr style={{marginBottom:'5px'}}/>
                    <h2>Colculator:</h2>
                    <input className={styles.last_input1} type="number" name="" id="" max={225}min={59} placeholder="typing again Price for get Total Price" value={total} onChange={e=> setTotal(e.target.value)}/>
                    <input className={styles.last_input2} type="number" name="" id="" max={9}min={1} placeholder="typing again Quality for get Total Price" value={qty} onChange={e=> setQty(e.target.value)}/>
                    <h2>Total Price:     ${totalPrice}</h2>
                </div>))}
            </div>
        </div>
       </div>
            <Footer/>
    </main>
  );
}
