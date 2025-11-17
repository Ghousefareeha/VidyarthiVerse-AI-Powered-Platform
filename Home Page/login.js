document.getElementById("loginForm").addEventListener("submit", async function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!email || !password) {
        alert("Please fill in all fields.");
        return;
    }

    try {
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
        });

        const data = await response.json();

        if (response.ok) {
            localStorage.setItem("token", data.token);
            window.location.href = "dashboard.html";
        } else {
            alert(data.message || "Login failed!");
        }
        if (response.status === 401) {
            alert("Session expired. Please login again.");
            localStorage.removeItem("token");
            window.location.href = "login.html";
        }
    } catch (error) {
        console.error("Login Error:", error);
        alert("Something went wrong. Try again later.");
    }
});
