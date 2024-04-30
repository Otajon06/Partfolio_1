import { collection, db, getDocs,addDoc } from "../../FirebaseComfig";
import styles from '../page.module.css'
import Cards from "../deteils/cards";
import React, { useEffect, useState } from "react";
import { useParams,Link } from "react-router-dom";
import Modal from "../deteils/Modal";
import Navbar from "../deteils/navbar";
const ProductPage_women = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { title, collor } = useParams();
    const [product, setProduct] = useState(null);
    const [qty, setQty] = useState(0);
    useEffect(() => {
        const getProductData = async () => {
            try {
                const q = collection(db, 'woMen_products_nike');
                const dataBasa = await getDocs(q);
                const basaArr = dataBasa.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                const foundProduct = basaArr.find(item => item.title === title && item.collor === collor);
                setProduct(foundProduct);
            } catch (error) {
                console.log(error);
            }
        };
        getProductData();
    }, [title, collor]);

    const setData =async (e) => {
        e.preventDefault();
        if(!product.rasm.trim())return

        await addDoc(collection(db, 'buy_shoes'),{
            rasm: product.rasm,
            price: product.price,
            title: product.title,
            quelty: Number(qty),
            collor: product.collor
        })
        setQty()
    }

    if (!product) {
        return (
            <div className={styles.loadings}><div className={styles.loading}></div><div className={styles.loading2}></div><div className={styles.loading3}></div></div>
        );
    }
    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
    return (
        <div>
        <Navbar/>
        <div className={styles.space}></div>
            <h3 className={styles.rout}><Link href={'/'} style={{color:'blue'}}>Home</Link>/<Link href={'/men'} style={{color:'blue'}}>Men</Link>/{product.title}</h3>
            <div className={styles.back_add_card}>
                    <form action="" onSubmit={setData}>
                        <div className={styles.container}>
                        <div className={styles.slide_wrapper}>
                        <div className={styles.left_side}>
                        <img id='slide-1' src={product.rasm} alt="" className={styles.add_img1} />
                        <img id='slide-2' src={product.rasm2} alt="" className={styles.add_img2} />
                        <img id='slide-3' src={product.rasm3} alt="" className={styles.add_img3} />
                        <img id='slide-4' src={product.rasm4} alt="" className={styles.add_img4} />
                    </div>
                        <div className={styles.slider_nav}>
                            <a href="#slide-1"></a>
                            <a href="#slide-2"></a>
                            <a href="#slide-3"></a>
                            <a href="#slide-4"></a>
                        </div>
                        </div>
                    </div>
                    <div className={styles.right_side}>
                        <h1 className={styles.add_title}>{product.title}</h1>
                        <h3 className={styles.add_body}>Info: {product.body}</h3>
                        <label htmlFor="">quality: <input type="number" placeholder="" max={9}min={1} name="" id="" value={qty} onChange={e=> setQty(e.target.value)} />
                        {qty == '0'?(<div>minimum quality - 1</div>):''}
                        </label>
                        <h2 className={styles.add_price}>Price: {product.price}</h2>
                        <button onClick={openModal} type="submit" className={styles.add_btn} disabled={qty == '0'}>Add To Card</button>
                    </div>
                    <Modal isOpen={isModalOpen} onClose={closeModal} />
                    </form>
            </div>
            
    </div>
);
};

export default ProductPage_women;
