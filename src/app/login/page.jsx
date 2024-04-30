import React, { useState, useEffect, useRef } from 'react';
import { auth, db, googleProvider, signInWithPopup, signOut,  collection, addDoc, getDocs, query, orderBy, limit  } from '../../FirebaseComfig';
import  styles from '../page.module.css';
import Navbar from '../deteils/navbar';
import { Link } from 'react-router-dom';
import Messanger from '../deteils/Messanger';
export const LoginPage = () => {
    const [user, setUser] = useState(null);
    const [formValue, setFormValue] = useState('');
    const [messages, setMessages] = useState([]);
    const [chenge, setchenge] = useState(false);
    const containerRef = useRef(null)
    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged(user => {
        setUser(user);
      });
      return () => unsubscribe();
    }, []);
  
    
  
    const signInWithGoogle = async () => {
      try {
        await signInWithPopup(auth, googleProvider);
      } catch (error) {
        console.error('Error signing in with Google:', error);
      }
    };
    console.log(user)
  
    const signOutUser = async () => {
      try {
        await signOut(auth);
      } catch (error) {
        console.error('Error signing out:', error);
      }
    };
  
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
    return (
      <div className={styles.Back_messanger}>
        <Navbar/>
        <div style={{paddingTop:'60px', backgroundColor:'#aaa9a9d0'}}></div>
        <h3 className={styles.rout}><Link href={'/'} style={{color:'blue'}}>Home</Link>/Shop</h3>
        <header style={{display:'flex',justifyContent:'center',alignItems:'center',flexWrap:'wrap'}}>
          {user ? (
            <div>
              <h1 className={styles.h1}>Registration</h1>
              <p className={styles.gl}>  Name, {user.displayName}</p>
              <p className={styles.gl}>  Email, {user.email}</p>
              <button onClick={signOutUser} className={styles.google}>Sign Out</button>
            </div>
          ) : (
            <button onClick={signInWithGoogle} className={styles.Sgoogle}><img src="https://freesvg.org/img/1534129544.png" alt="" />Sign In with Google</button>
          )}
        <button onClick={openModal} className={styles.btn_messanger} ><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Facebook_Messenger_logo_2020.svg/640px-Facebook_Messenger_logo_2020.svg.png" className={styles.icon_messanger} /></button>
        </header>
        
         
     
        
     
        <Messanger isOpen={isModalOpen} onClose={closeModal} />
      </div>
     
    );
  };     
