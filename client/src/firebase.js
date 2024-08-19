// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBSE_API_KEY,
  authDomain: "mern-estate-45b1f.firebaseapp.com",
  projectId: "mern-estate-45b1f",
  storageBucket: "mern-estate-45b1f.appspot.com",
  messagingSenderId: "1094953221664",
  appId: "1:1094953221664:web:d8e44342fea1dbdbb4c645"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);