// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAI-lQYR8v2AaBzoNFaLVjyfXJrZ0TW14s",
    authDomain: "telimania.firebaseapp.com",
    projectId: "telimania",
    storageBucket: "telimania.appspot.com",
    messagingSenderId: "492195954500",
    appId: "1:492195954500:web:0b78a50034e408d1cd6111"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authApp = getAuth(app);