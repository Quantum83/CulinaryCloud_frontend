document.addEventListener("DOMContentLoaded", () => {
  // Load recipes on page load
  loadRecipes();
});

function goToProfile() {
  alert("Functionality not implemented yet.");
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
