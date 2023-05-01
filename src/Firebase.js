import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBW4784yqCRaf4zKbVN1HRhknzUgkCZm6Q",
  authDomain: "textapp-cb65a.firebaseapp.com",
  projectId: "textapp-cb65a",
  storageBucket: "textapp-cb65a.appspot.com",
  messagingSenderId: "470666856793",
  appId: "1:470666856793:web:885c2f3dede8f7d21a2448",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
