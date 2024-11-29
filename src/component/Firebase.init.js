// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9aoEFTuj9ccTsSPMVA5cR9WL6qLHyddw",
  authDomain: "coffee-store-1dcb1.firebaseapp.com",
  projectId: "coffee-store-1dcb1",
  storageBucket: "coffee-store-1dcb1.firebasestorage.app",
  messagingSenderId: "1066125172974",
  appId: "1:1066125172974:web:e082bf4e4dad1d46fb13ff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth