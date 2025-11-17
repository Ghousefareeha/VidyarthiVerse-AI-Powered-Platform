document.addEventListener("DOMContentLoaded", async () => {
    const token = localStorage.getItem("token");

    if (!token) {
        alert("You must log in first!");
        window.location.href = "/"; // Redirect to login page
        return;
    }

    const response = await fetch("http://localhost:5000/api/auth/profile", {
        method: "GET",
        headers: { "Authorization": `Bearer ${token}` }
    });

    const data = await response.json();

    if (response.ok) {
        document.getElementById("fullName").textContent = data.fullName;
        document.getElementById("email").textContent = data.email;
        document.getElementById("education").textContent = data.education;
        document.getElementById("institution").textContent = data.institution;
    } else {
        alert("Error loading profile!");
    }
});
