// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBwMwlHjt3Y8FXU5G8A1NFkXmCcfjFjehQ",
  authDomain: "health-website-96eb9.firebaseapp.com",
  projectId: "health-website-96eb9",
  storageBucket: "health-website-96eb9.appspot.com",
  messagingSenderId: "584771477584",
  appId: "1:584771477584:web:16cc2e093c745c65907155"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);