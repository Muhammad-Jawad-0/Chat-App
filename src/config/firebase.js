import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword,onAuthStateChanged,signOut,signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, setDoc,getDoc  } from "firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyDVL3CJxDYIFEEkSUboBU0I5mrTyaRp9Gc",
    authDomain: "learning-firebase-with-jawad.firebaseapp.com",
    projectId: "learning-firebase-with-jawad",
    storageBucket: "learning-firebase-with-jawad.appspot.com",
    messagingSenderId: "729993256048",
    appId: "1:729993256048:web:a8cc0b32972dc66da268b5",
    measurementId: "G-XDJH6YB19M"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app)

export {
    app,
    auth,
    db,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    doc,
    setDoc,
    getDoc ,
    signOut,
    signInWithEmailAndPassword

}