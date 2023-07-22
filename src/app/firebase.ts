import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore,  } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDP6lkgHAu9iHZprgrmwBFvmRkQjEC6bSE",
  authDomain: "nextauth-passwordless.firebaseapp.com",
  projectId: "nextauth-passwordless",
  storageBucket: "nextauth-passwordless.appspot.com",
  messagingSenderId: "912405577685",
  appId: "1:912405577685:web:c675f8fd90f93960ce075c"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();

export { app, db, auth }