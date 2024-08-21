import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBMvku660M8XtYXwfNwlXxchgYSi_IwH0Q",
  authDomain: "culinary-cloud-data.firebaseapp.com",
  projectId: "culinary-cloud-data",
  storageBucket: "culinary-cloud-data.appspot.com",
  messagingSenderId: "397992998923",
  appId: "1:397992998923:web:ed8e8a73854055fd656f0e",
  measurementId: "G-L00DHMR3XM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export { db, auth };
