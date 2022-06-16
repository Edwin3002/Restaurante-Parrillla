// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAwBMTP6M5ZDes7k0A2hc7Xi3w_4RYF-D0",
    authDomain: "restaurante-e3b67.firebaseapp.com",
    projectId: "restaurante-e3b67",
    storageBucket: "restaurante-e3b67.appspot.com",
    messagingSenderId: "731309522791",
    appId: "1:731309522791:web:d9817dd36576c91282b9c2"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const getDataFire = getFirestore();

export { app, getDataFire }