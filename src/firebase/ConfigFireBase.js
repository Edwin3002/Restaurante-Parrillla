// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDte6L5uQee0unQwuWflhFuOFPpIr5gF7A",
    authDomain: "medallo-hackthon.firebaseapp.com",
    projectId: "medallo-hackthon",
    storageBucket: "medallo-hackthon.appspot.com",
    messagingSenderId: "598447598682",
    appId: "1:598447598682:web:2b9e2d049413da6b573c63",
    measurementId: "G-MGZE90PSFZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const getDataFire = getFirestore();

export { app, getDataFire }