// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { collection, getFirestore } from 'firebase/firestore'
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDthkYA9ETQwnFw_sAwTafL2mTHFL61VQ0",
    authDomain: "fir-136e0.firebaseapp.com",
    projectId: "fir-136e0",
    storageBucket: "fir-136e0.appspot.com",
    messagingSenderId: "357614361193",
    appId: "1:357614361193:web:fa7fbc4a1bdd6d947aa0f8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authApp = getAuth(app);
const db = getFirestore();
export const movieDB = collection(db, 'movieDB');