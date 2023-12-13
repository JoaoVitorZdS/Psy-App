// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyASeeYjhHuZJ-GIxYIeJSEGyzir5wlIbqU",
  authDomain: "safespace-9c0d5.firebaseapp.com",
  projectId: "safespace-9c0d5",
  storageBucket: "safespace-9c0d5.appspot.com",
  messagingSenderId: "842737096452",
  appId: "1:842737096452:web:8b6dee476a96299ccfe251",
  measurementId: "G-BZ6PYN7LD7",
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);
