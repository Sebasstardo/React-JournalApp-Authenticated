// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBd7pmQ269e7Fe0vx6on5yLgsAMctezZzM",
  authDomain: "react-journalapp-633ee.firebaseapp.com",
  projectId: "react-journalapp-633ee",
  storageBucket: "react-journalapp-633ee.appspot.com",
  messagingSenderId: "219471099770",
  appId: "1:219471099770:web:276feb5c54dfa9a016c8c3"
};

// Initialize Firebase
export const fireBaseApp = initializeApp(firebaseConfig);
export const FireBaseAuth =getAuth(fireBaseApp);
export const firebaseDB = getFirestore( fireBaseApp);