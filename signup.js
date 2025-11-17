document.addEventListener("DOMContentLoaded", function () {
    const steps = document.querySelectorAll(".form-step");
    const nextBtns = document.querySelectorAll(".next-btn");
    const prevBtns = document.querySelectorAll(".prev-btn");
    const progressSteps = document.querySelectorAll(".step");

    let currentStep = 0;

    function showStep(step) {
        steps.forEach((s, index) => {
            s.classList.toggle("active", index === step);
        });

        progressSteps.forEach((p, index) => {
            p.classList.toggle("active", index <= step);
        });
    }

    nextBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
            if (currentStep < steps.length - 1) {
                currentStep++;
                showStep(currentStep);
            }
        });
    });

    prevBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
            if (currentStep > 0) {
                currentStep--;
                showStep(currentStep);
            }
        });
    });

    document.getElementById("signupForm").addEventListener("submit", function (e) {
        e.preventDefault();
        alert("Signup Successful! Welcome to VidyarthiVerse 🚀");
    });
});
document.getElementById("signupForm").addEventListener("submit", async function (e) {
    e.preventDefault();
    signupUser();
});