import { auth } from "./firebaseConfig.js";

document.addEventListener("DOMContentLoaded", () => {
  // Load recipes on page load
  loadRecipes();
});

function goToProfile() {
  checkUserAuth();
}

function checkUserAuth() {
  auth.onAuthStateChanged((user) => {
    if (user) {
      // User is signed in, redirect to profile
      window.location.href = "profile.html";
    } else {
      // No user is signed in, redirect to sign-in page
      window.location.href = "sign-in.html";
    }
  });
}

function sortRecipes() {
  const sortBy = document.getElementById("sort-recipes").value;
  // Implement sorting logic here
}

function submitRecipe() {
  alert("Submit Recipe functionality not implemented yet.");
}

async function loadRecipes() {
  const recipeGrid = document.getElementById("recipe-grid");
  const response = await fetch("https://your-api-endpoint/recipes");
  const recipes = await response.json();

  recipes.forEach((recipe) => {
    const recipeDiv = document.createElement("div");
    recipeDiv.textContent = recipe.name;
    recipeGrid.appendChild(recipeDiv);
  });
}
