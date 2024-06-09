document.addEventListener("DOMContentLoaded", () => {
  // Load recipes on page load
  loadRecipes();
});

const poolData = {
  UserPoolId: "us-east-1_WFdS4C3O4",
  ClientId: "3fj031gafrt8bae5k4cflh1281",
};
const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

function goToProfile() {
  const cognitoUser = userPool.getCurrentUser();

  if (cognitoUser) {
    cognitoUser.getSession((err, session) => {
      if (err || !session.isValid()) {
        // If there is an error or the session is not valid, redirect to sign-in page
        window.location.href = "signup.html";
      } else {
        // If the session is valid, redirect to profile page
        window.location.href = "profile.html";
      }
    });
  } else {
    // If there is no user, redirect to sign-in page
    window.location.href = "signup.html";
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
