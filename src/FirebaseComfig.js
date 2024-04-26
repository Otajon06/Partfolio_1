import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { getFirestore, collection, addDoc, getDocs, query, orderBy, limit, deleteDoc, doc} from 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyAnTATkw8M7NeJNKxwRZesf-CoKL_k9FMU",
  authDomain: "project-7bfd7.firebaseapp.com",
  projectId: "project-7bfd7",
  storageBucket: "project-7bfd7.appspot.com",
  messagingSenderId: "441078878621",
  appId: "1:441078878621:web:b68605e07c5041707f1f74",
  measurementId: "G-QS2XMPPSKH"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
export {auth,app,  db,  collection, addDoc, getDocs, query, orderBy, limit, deleteDoc, doc,googleProvider, signInWithPopup, signOut  };