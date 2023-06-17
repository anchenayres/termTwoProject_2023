// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdwUULobxcvRZ3mqIdMgamvaugOdeiDMk",
  authDomain: "termtwoproject-971ca.firebaseapp.com",
  projectId: "termtwoproject-971ca",
  storageBucket: "termtwoproject-971ca.appspot.com",
  messagingSenderId: "128512827806",
  appId: "1:128512827806:web:c92ed89c440356e5cef68f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
