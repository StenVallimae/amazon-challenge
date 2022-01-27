// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCWUHdQDVsJE-1ygr1HycvctfYChVFngSc",
  authDomain: "clone-f92d0.firebaseapp.com",
  projectId: "clone-f92d0",
  storageBucket: "clone-f92d0.appspot.com",
  messagingSenderId: "850249122238",
  appId: "1:850249122238:web:f802f7b1aa5d7c4f1279ef",
  measurementId: "G-M9KKJ34G98",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
