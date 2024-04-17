// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAb2xTt8gLCgF2qbZ4EDoOo3LvcicozWhw",
  authDomain: "netflix-gpt-83a1f.firebaseapp.com",
  projectId: "netflix-gpt-83a1f",
  storageBucket: "netflix-gpt-83a1f.appspot.com",
  messagingSenderId: "324552740192",
  appId: "1:324552740192:web:105fe2d7bac931d095a205",
  measurementId: "G-RV58VJ4PHK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();