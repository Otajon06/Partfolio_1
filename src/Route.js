import React, {useState,useEffect} from "react"
import Cards from "./app/deteils/cards";
import styles from "./app/page.module.css";
import { collection, db, getDocs, limit, orderBy, query,addDoc } from "./FirebaseComfig";
import Home from "../src/app/page"
import Men from './app/men/page'
import Women from "./app/women/page"
import Shop from "./app/shop/page"
import { LoginPage } from "./app/login/page"
import ProductPage_women from "./app/pages/PagesWomen"
import ProductPage_men from "./app/pages/PagesMen"
// import Buy from "./app/shop/buy/page"
import Navbar from "./app/deteils/navbar"
import ProductCollors from "./app/deteils/Collors";
import Buying from "./app/shop/buy/buying";
const { Routes, Route, Link } = require("react-router-dom")
const Details = () => {
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
            const q = query(collection(db, 'woMen_products_nike'),limit(Infinity));
            const dataBasa = await getDocs(q);
            const basaArr = dataBasa.docs.map(doc=>doc.data());
            setProductMen(basaArr);
        } catch (error) {
            // console.log(error);                
        }
    }
    const getMenData = async ()=>{
        try {
            const q = query(collection(db, 'men_products_nike'),limit(Infinity));
            const dataBasa = await getDocs(q);
            const basaArr = dataBasa.docs.map(doc=>doc.data());
            setProduct(basaArr);
        } catch (error) {
            // console.log(error);                
        }
    }
    getData();
    getMenData();
    setchenge(false)
},[chenge])
    const black_res = product.filter(el => el.collor == 'green');
    const black = product.filter(e => e.collor == 'black');
    const white = product.filter(e => e.collor == 'white');
    const red = product.filter(e => e.collor == 'red');
    const green = product.filter(e => e.collor == 'green'); 
    const blue = product.filter(e => e.collor == 'blue');
    const yellow = product.filter(e => e.collor == 'yellow');
    const another = product.filter(e => e.collor == 'another');

    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/men" element={<Men/>}/>
            <Route exact path="/women" element={<Women/>}/>
            <Route path="/cards" element={<Shop/>}/>
            <Route path="/cards/:title/:collor" element={<Buying/>}/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/women/:title/:collor" element={<ProductPage_women/>}/>
            <Route path="/men/:title/:collor" element={<ProductPage_men/>}/>
            
        </Routes>
    )
}
export default Details