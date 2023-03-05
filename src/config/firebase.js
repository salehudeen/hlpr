
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC1QyGFbQJOGX2si_KGYMcDLZ31mVspfsY",
  authDomain: "hlpr-303b4.firebaseapp.com",
  projectId: "hlpr-303b4",
  storageBucket: "hlpr-303b4.appspot.com",
  messagingSenderId: "791910178416",
  appId: "1:791910178416:web:d395fad869d68cf42a5eb5",
  measurementId: "G-PXWMNNCBPP"
};

const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app)