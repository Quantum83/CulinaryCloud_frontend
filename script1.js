document.addEventListener("DOMContentLoaded", () => {
  // Load recipes on page load
  loadRecipes();
});

const poolData = {
  UserPoolId: "us-east-1_0r3Udl8ng",
  ClientId: "14k3k2bu3a03pk4clfg94q02r3",
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
  const clientId = "14k3k2bu3a03pk4clfg94q02r3";
  const domain = "culinarycloud.auth.us-east-1.amazoncognito.com";
  const redirectUri = "https://culinary-cloud.click/profile.html";
  const responseType = "code";

  const WhereToGoUrl = `https://${domain}/login?client_id=${clientId}&response_type=${responseType}&scope=email+openid+phone&redirect_uri=${encodeURIComponent(
    redirectUri
  )}`;
  console.log(WhereToGoUrl);
  window.location.href = WhereToGoUrl;
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
