import React, {useState,useEffect, useRef} from "react";
import styles from "../page.module.css";
import { auth, db, googleProvider, signInWithPopup, signOut,  collection, addDoc, getDocs, query, orderBy, limit  } from '../../FirebaseComfig';

const Messanger = ({ isOpen, onClose }) => {
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
    //   containerRef.current.scrollIntoView({ behavior: 'smooth' });
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
    useEffect(() => {
        if (isOpen) {
            const timer = setTimeout(() => {
                onClose();
            },1000000);

            return () => clearTimeout(timer);
        }
    }, [isOpen, onClose]);

    if (!isOpen) return null;
    return (
        <div className={styles.messageOverlay} >
            <div>
            <section className={styles.MesSection}>
        <div className={styles.top}><h2 className={styles.h2}>Messanger</h2>
        <button onClick={onClose} style={{position:'absolute',margin:'15px 0 0 630px',display:'flex',justifyContent:'center',alignItems:'center',backgroundColor:'red',cursor:'pointer',border:'3px solid black',borderRadius:'50%',width:'30px',height:'30px'}}>X</button>

        </div>
          <div className={styles.Back_messanger}>
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
        </div>
    );
};

export default Messanger;
