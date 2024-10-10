// Step 1: Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function() {
    // Step 2: Select the form and feedback division
    const form = document.getElementById("registration-form");
    const feedbackDiv = document.getElementById("form-feedback");

    // Step 3: Add event listener to the form's submit event
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent default form submission

        // Step 4: Retrieve and trim input values
        const username = document.getElementById("username").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        // Step 5: Initialize validation variables
        let isValid = true;
        const messages = [];

        // Step 6: Username validation (must be at least 3 characters)
        if (username.length < 3) {
            isValid = false;
            messages.push("Username must be at least 3 characters long.");
        }

        // Step 7: Email validation (must include "@" and ".")
        if (!email.includes("@") || !email.includes(".")) {
            isValid = false;
            messages.push("Please enter a valid email address.");
        }

        // Step 8: Password validation (must be at least 8 characters)
        if (password.length < 8) {
            isValid = false;
            messages.push("Password must be at least 8 characters long.");
        }

        // Step 9: Display feedback
        feedbackDiv.style.display = "block"; // Make feedback visible

        if (isValid) {
            feedbackDiv.textContent = "Registration successful!";
            feedbackDiv.style.color = "#28a745"; // Green color for success
        } else {
            feedbackDiv.innerHTML = messages.join("<br>"); // Show error messages
            feedbackDiv.style.color = "#dc3545"; // Red color for errors
        }
    });
});
