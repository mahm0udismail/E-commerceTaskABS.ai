// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZrxhaggWEWX61OqZwj2VRJp6uf7w5_eU",
  authDomain: "e-commercetaskabsai.firebaseapp.com",
  projectId: "e-commercetaskabsai",
  storageBucket: "e-commercetaskabsai.firebasestorage.app",
  messagingSenderId: "292509770470",
  appId: "1:292509770470:web:3818a6916013cb51375127"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);  

// Set up GoogleAuthProvider
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Export everything needed for Google sign-in
export { app, db, auth, provider, signInWithPopup };
