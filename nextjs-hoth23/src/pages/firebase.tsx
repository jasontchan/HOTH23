// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAb-5YspqUwPAugdBxPZyAHteWP_G3gj28",
  authDomain: "hoth23-2dfce.firebaseapp.com",
  projectId: "hoth23-2dfce",
  storageBucket: "hoth23-2dfce.appspot.com",
  messagingSenderId: "289952819568",
  appId: "1:289952819568:web:520b50a328367e061c07b5",
  measurementId: "G-99KBNZ28Y0",
  databaseURL: "https://hoth23-2dfce-default-rtdb.firebaseio.com",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const analytics = getAnalytics(app);
