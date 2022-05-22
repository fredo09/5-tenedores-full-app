// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAiuLCJ8bcUSbqQA53vaede0R3M2HH_-Mg",
  authDomain: "tenedores-v2-ba8a9.firebaseapp.com",
  projectId: "tenedores-v2-ba8a9",
  storageBucket: "tenedores-v2-ba8a9.appspot.com",
  messagingSenderId: "204764024716",
  appId: "1:204764024716:web:234eeb95ca60ad878a50a9",
};

// Initialize Firebase
export const initFirebase = initializeApp(firebaseConfig);
