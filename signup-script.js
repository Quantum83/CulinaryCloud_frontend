document
  .getElementById("signup-form")
  .addEventListener("submit", async (event) => {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
      const response = await fetch(
        "https://w3wuvm9w3a.execute-api.us-east-1.amazonaws.com/dev/signup",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ username, email, password }),
        }
      );

      const result = await response.json();
      if (response.status === 201) {
        alert("User created successfully");
        window.location.href = "signup.html";
      } else {
        document.getElementById("error-message").innerText = result.message;
      }
    } catch (error) {
      document.getElementById("error-message").innerText = "An error occurred";
    }
  });

// Google Sign-In
function onSignIn(googleUser) {
  const id_token = googleUser.getAuthResponse().id_token;
  fetch("https://your-api-endpoint/google-signin", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ token: id_token }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.status === "success") {
        window.location.href = "profile.html";
      } else {
        document.getElementById("error-message").innerText =
          "Google sign-in failed";
      }
    });
}

gapi.load("auth2", function () {
  gapi.auth2.init();
});
