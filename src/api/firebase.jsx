// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdrwd7JzhZH3K7yUlf45FanBRrqKBYF3I",
  authDomain: "chord8-22e59.firebaseapp.com",
  projectId: "chord8-22e59",
  storageBucket: "chord8-22e59.appspot.com",
  messagingSenderId: "360770596110",
  appId: "1:360770596110:web:ed48debbf9158f8598fb5f",
  measurementId: "G-QYBNGEP8J6"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
firebase.initializeApp(firebaseConfig);
export const storage = firebase.storage();