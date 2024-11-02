// Import Firebase functions
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import {
  getAuth,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMvku660M8XtYXwfNwlXxchgYSi_IwH0Q",
  authDomain: "culinary-cloud-data.firebaseapp.com",
  projectId: "culinary-cloud-data",
  storageBucket: "culinary-cloud-data.firebasestorage.app",
  messagingSenderId: "397992998923",
  appId: "1:397992998923:web:ed8e8a73854055fd656f0e",
  measurementId: "G-L00DHMR3XM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.addEventListener("DOMContentLoaded", () => {
  // Profile button click listener
  const profileButton = document.getElementById("profile-button");
  profileButton.addEventListener("click", () => {
    checkUserAuth();
  });

  // Load recipes on page load
  loadRecipes();
});

// Check user authentication
function checkUserAuth() {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, redirect to profile page
      window.location.href = "profile.html";
    } else {
      // No user is signed in, redirect to sign-in page
      window.location.href = "sign-in.html";
    }
  });
}

// // Load recipes function (stubbed as example)
// async function loadRecipes() {
//   const recipeGrid = document.getElementById("recipe-grid");
//   try {
//     const response = await fetch("https://your-api-endpoint/recipes");
//     const recipes = await response.json();

//     recipes.forEach((recipe) => {
//       const recipeDiv = document.createElement("div");
//       recipeDiv.textContent = recipe.name;
//       recipeGrid.appendChild(recipeDiv);
//     });
//   } catch (error) {
//     console.error("Failed to load recipes:", error);
//   }
// }
