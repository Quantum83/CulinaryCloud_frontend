document.addEventListener("DOMContentLoaded", () => {
  // Load recipes on page load
  loadRecipes();
});

function goToProfile() {
  alert("Profile page not implemented yet.");
}

function sortRecipes() {
  const sortBy = document.getElementById("sort-recipes").value;
  // Implement sorting logic here
}

async function loadRecipes() {
  const recipeGrid = document.getElementById("recipe-grid");
  // Fetch recipes from your API
  const response = await fetch("https://your-api-endpoint/recipes");
  const recipes = await response.json();

  recipes.forEach((recipe) => {
    const recipeDiv = document.createElement("div");
    recipeDiv.textContent = recipe.name;
    recipeGrid.appendChild(recipeDiv);
  });
}
