import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore,  } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtk_PO-mC9xEZsN8aatyEHdLFkZvt_hTo",
  authDomain: "next-auth-username-passwords.firebaseapp.com",
  projectId: "next-auth-username-passwords",
  storageBucket: "next-auth-username-passwords.appspot.com",
  messagingSenderId: "78794701925",
  appId: "1:78794701925:web:d1baa091db025a1da61a8c"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();

export { app, db, auth }