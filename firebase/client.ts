// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp} from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyC2-LNVxre2vFLZh8fcwSn7bZaQj6Mio1M",
    authDomain: "prepwell-e3a28.firebaseapp.com",
    projectId: "prepwell-e3a28",
    storageBucket: "prepwell-e3a28.firebasestorage.app",
    messagingSenderId: "895423935323",
    appId: "1:895423935323:web:0987f9f26e6010dc95607e",
    measurementId: "G-6459VS9GWX"
};

// Initialize Firebase
const app = !getApps().length? initializeApp(firebaseConfig) : getApp();

const auth = getAuth(app);
const db = getFirestore(app);

export {auth, db};