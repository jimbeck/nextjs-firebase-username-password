import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore,  } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIdMmjkGoogePdkcNBoYnaWTQbSJAUPrI",
  authDomain: "rifik-auth-username-password.firebaseapp.com",
  projectId: "rifik-auth-username-password",
  storageBucket: "rifik-auth-username-password.appspot.com",
  messagingSenderId: "656915752501",
  appId: "1:656915752501:web:15c1706d8e23df3f12337c"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();

export { app, db, auth }