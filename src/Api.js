import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
    apiKey: "AIzaSyCJjmVcjpo_LXNxdZJzTiKenJPLARJSQac",
    authDomain: "nps-digital-college.firebaseapp.com",
    projectId: "nps-digital-college",
    storageBucket: "nps-digital-college.appspot.com",
    messagingSenderId: "719275913807",
    appId: "1:719275913807:web:53b8437f90d7f5d099f03a",
    measurementId: "G-3DWVYQ55BJ"
};


const app = initializeApp(firebaseConfig);
export const provider = new GoogleAuthProvider();
export const auth = getAuth();
export const db = getFirestore(app);
auth.languageCode = 'it';



