// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyCjdbTiTT04AHkfAxWr1y19rEedXkqqPwc",
  authDomain: "todo-ce276.firebaseapp.com",
  projectId: "todo-ce276",
  storageBucket: "todo-ce276.appspot.com",
  messagingSenderId: "170675737633",
  appId: "1:170675737633:web:137afa81988c51c06dff60",
  measurementId: "G-E4QH2XCNYV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);