// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAA9ho0UCR9dmExG3xRN-OXHdmIlr73o2I",
  authDomain: "react-journalapp-75c90.firebaseapp.com",
  projectId: "react-journalapp-75c90",
  storageBucket: "react-journalapp-75c90.appspot.com",
  messagingSenderId: "215323052618",
  appId: "1:215323052618:web:dfa8f693048a6716cdb4b3"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(FirebaseApp);

export const FirebaseDB = getFirestore(FirebaseApp);