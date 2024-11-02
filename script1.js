// Firebase configuration
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "culinary-cloud-data.firebaseapp.com",
  projectId: "culinary-cloud-data",
  storageBucket: "culinary-cloud-data.appspot.com",
  messagingSenderId: "397992998923",
  appId: "1:397992998923:web:ed8e8a73854055fd656f0e",
  measurementId: "G-L00DHMR3XM",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

document.addEventListener("DOMContentLoaded", () => {
  const profileButton = document.getElementById("profile-button");
  profileButton.addEventListener("click", () => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        window.location.href = "profile.html";
      } else {
        window.location.href = "sign-in.html";
      }
    });
  });

  // Load recipes on page load
  loadRecipes();
});

async function loadRecipes() {
  const recipeGrid = document.getElementById("recipe-grid");
  try {
    const response = await fetch("https://your-api-endpoint/recipes");
    const recipes = await response.json();

    recipes.forEach((recipe) => {
      const recipeDiv = document.createElement("div");
      recipeDiv.textContent = recipe.name;
      recipeGrid.appendChild(recipeDiv);
    });
  } catch (error) {
    console.error("Failed to load recipes:", error);
  }
}

function sortRecipes() {
  const sortBy = document.getElementById("sort-recipes").value;
  // Implement sorting logic here
}

function submitRecipe() {
  alert("Submit Recipe functionality not implemented yet.");
}
