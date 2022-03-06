// Initialize Cloud Firestore through Firebase
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseApp = initializeApp({
  apiKey: "AIzaSyBPkioT03Xy-eCpCgenPSAJnASMJr6XubU",
  authDomain: "covid19-9252f.firebaseapp.com",
  projectId: "covid19-9252f",
  storageBucket: "covid19-9252f.appspot.com",
  messagingSenderId: "955433204539",
  appId: "1:955433204539:web:de77169d06ddbba3e9951e",
  measurementId: "G-73SKMB9XKV",
});

const db = getFirestore(firebaseApp);
export default db;
