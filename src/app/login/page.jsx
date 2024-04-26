import React, { useState, useEffect, useRef } from 'react';
import { auth, db, googleProvider, signInWithPopup, signOut,  collection, addDoc, getDocs, query, orderBy, limit  } from '../../FirebaseComfig';
import  styles from '../page.module.css';
import Navbar from '../deteils/navbar';

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
  
    useEffect(() => {
      containerRef.current.scrollIntoView({ behavior: 'smooth' });
      const fetchMessages = async () => {
        const q = query(collection(db, 'messages'), orderBy('createdAt'), limit(Infinity));
        const querySnapshot = await getDocs(q);
        const messagesArray = querySnapshot.docs.map(doc => doc.data());
        setMessages(messagesArray);
      };
      console.log('1')
      setchenge(false)
      fetchMessages();
    }, [chenge]);
  
    const sendMessage = async (e) => {
      e.preventDefault();
      setchenge(true);
      if (!formValue.trim()) return;
  
      await addDoc(collection(db, 'messages'), {
        text: formValue,
        createdAt: new Date(),
        uid: user.uid,
        displayName: user.displayName,
        photoURL:  user.photoURL,
      });
  
      setFormValue('');
    };
  
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
  
      
    return (
      <div className={styles.Back_messanger}>
        <Navbar/>
        <div style={{paddingTop:'60px', backgroundColor:'#aaa9a9d0'}}></div>
        <header style={{display:'flex',justifyContent:'center',alignItems:'center',flexWrap:'wrap'}}>
          {user ? (
            <div>
              <h1 className={styles.h1}>Registration</h1>
              <p className={styles.gl}>  Hello, {user.displayName}</p>
              <button onClick={signOutUser} className={styles.google}>Sign Out</button>
            </div>
          ) : (
            <button onClick={signInWithGoogle} className={styles.Sgoogle}>Sign In with Google</button>
          )}
        </header>
        <section className={styles.MesSection}>
        <div className={styles.top}><h2 className={styles.h2}>Messanger</h2></div>
          <div>
            {messages.map((message, index) => (
              <div key={index} className={message.uid === user?.uid ? (styles.sent) : (styles.received)}>
                <img src={message.photoURL} alt="user Photo" className={styles.img} />
                <div className={styles.box}>
                <p className={styles.user}>{message.displayName}</p>
                <br />
                <p className={styles.tx}> {message.text}</p>
                </div>
              </div>
            ))}
            <div ref={containerRef}></div>
          </div>
        </section>
        <footer className={styles.MesFooter}>
          {user && (
            <form onSubmit={sendMessage}>
              <input
                type="text"
                value={formValue}
                onChange={(e) => setFormValue(e.target.value)}
                placeholder="Type your message here"
                className={styles.input}
              />
              <button type="submit" className={styles.send}>Send</button>
            </form>
          )}
        </footer>
         
     
        
     
     
      </div>
     
    );
  };     
