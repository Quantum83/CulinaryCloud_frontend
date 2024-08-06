document.addEventListener("DOMContentLoaded", () => {
  // Load recipes on page load
  loadRecipes();
});

function goToProfile() {
  var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
  var cognitoUser = userPool.getCurrentUser();

  if (cognitoUser != null) {
    cognitoUser.getSession(function (err, session) {
      if (err) {
        console.error(err);
      } else {
        window.location.href = "https://culinary-cloud.click/profile.html";
      }
    });
  } else {
    return "not yet implemented";
  }
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
  // Fetch recipes from your API
  const response = await fetch("https://your-api-endpoint/recipes");
  const recipes = await response.json();

  recipes.forEach((recipe) => {
    const recipeDiv = document.createElement("div");
    recipeDiv.textContent = recipe.name;
    recipeGrid.appendChild(recipeDiv);
  });
}
