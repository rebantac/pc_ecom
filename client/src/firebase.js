// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC--fUJfIvN58-lki-6XOY2Cnf-53yA0Qo",
    authDomain: "pooja-computers-3afeb.firebaseapp.com",
    projectId: "pooja-computers-3afeb",
    storageBucket: "pooja-computers-3afeb.appspot.com",
    messagingSenderId: "1074661470502",
    appId: "1:1074661470502:web:e22241c617f0be445dd1e7",
    measurementId: "G-CXZ5DR64ZV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };