document.getElementById("loginForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Example: Send data to backend API
  try {
    const response = await fetch("http://localhost:5000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (response.ok) {
      alert("Login successful 🎉");
      window.location.href = "dashboard.html"; // Redirect after login
    } else {
      alert(data.message || "Login failed ❌");
    }
  } catch (error) {
    console.error("Error:", error);
    alert("Something went wrong!");
  }
});

