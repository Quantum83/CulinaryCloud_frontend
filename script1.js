document.addEventListener("DOMContentLoaded", () => {
  // Load recipes on page load
  loadRecipes();
});

const poolData = {
  UserPoolId: "us-east-1_WFdS4C3O4",
  ClientId: "3fj031gafrt8bae5k4cflh1281",
};

function goToProfile() {
  var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
  var cognitoUser = userPool.getCurrentUser();

  if (cognitoUser != null) {
    cognitoUser.getSession(function (err, session) {
      if (err) {
        console.error(err);
        redirectToCognitoSignIn();
      } else {
        window.location.href = "https://culinary-cloud.click/profile.html";
      }
    });
  } else {
    redirectToCognitoSignIn();
  }
}

function redirectToCognitoSignIn() {
  const clientId = "3fj031gafrt8bae5k4cflh1281";
  const domain = "culinary-cloud.auth.us-east-1.amazoncognito.com";
  const redirectUri = "http://localhost:3000/callback";
  const responseType = "code";

  const cognitoUrl = `https://${domain}/login?response_type=${responseType}&client_id=${clientId}&redirect_uri=${encodeURIComponent(
    redirectUri
  )}`;
  window.location.href = cognitoUrl;
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
