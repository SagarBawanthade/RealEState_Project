// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "real-estate-ae10f.firebaseapp.com",
    projectId: "real-estate-ae10f",
    storageBucket: "real-estate-ae10f.appspot.com",
    messagingSenderId: "818856974295",
    appId: "1:818856974295:web:cc167d63bd2c34c68a5d92",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
