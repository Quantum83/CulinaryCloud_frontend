document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("signup-form");
  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const data = {
      username: formData.get("username"),
      email: formData.get("email"),
      password: formData.get("password"),
    };

    try {
      const response = await fetch(
        "https://w3wuvm9w3a.execute-api.us-east-1.amazonaws.com/dev",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        alert("Sign up successful!");
        window.location.href = "index.html"; // Redirect to homepage after successful sign-up
      } else {
        const errorData = await response.json();
        alert("Sign up failed: " + errorData.message);
      }
    } catch (error) {
      alert("Sign up failed: " + error.message);
    }
  });
});
