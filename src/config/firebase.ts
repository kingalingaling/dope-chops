// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBntULML64oij7K7R3tjQxU1Yk2AIqG-L0",
  authDomain: "dope-chops.firebaseapp.com",
  projectId: "dope-chops",
  storageBucket: "dope-chops.appspot.com",
  messagingSenderId: "1033715737675",
  appId: "1:1033715737675:web:9920fcd41c61bef204d9ce",
  measurementId: "G-YXZX1EL62T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app)