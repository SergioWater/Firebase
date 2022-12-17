// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANNXokvE7Ri7dd6JYlXQ-v4iEzFsD62II",
  authDomain: "fir-practice-78f7d.firebaseapp.com",
  projectId: "fir-practice-78f7d",
  storageBucket: "fir-practice-78f7d.appspot.com",
  messagingSenderId: "620220796923",
  appId: "1:620220796923:web:78b014996fb9a21c1a855e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();