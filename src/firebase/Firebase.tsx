
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAA8gfYv1Dpl3733J6VJeRfmN3w46GcnDM",
  authDomain: "signin-18c65.firebaseapp.com",
  projectId: "signin-18c65",
  storageBucket: "signin-18c65.appspot.com",
  messagingSenderId: "558145874669",
  appId: "1:558145874669:web:3fb448715f7acce8267ae4"
};


export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);