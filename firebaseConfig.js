// firebaseConfig.js
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
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
export { db, auth };
