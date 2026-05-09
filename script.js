const form = document.querySelector("form");
const fullName = document.getElementById("full-name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");
const age = document.getElementById("age");

// Email pattern
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Password pattern:
// - At least 8 characters
// - One uppercase letter
// - One number
// - One special character
const passwordPattern =
    /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/;

// Listen for form submission
form.addEventListener("submit", function (event) {
    event.preventDefault(); // stop page reload

    // Get values
    const fullNameValue = fullName.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const confirmPasswordValue = confirmPassword.value.trim();
    const ageValue = Number(age.value.trim());

    // ======================
    // VALIDATION START
    // ======================


    //   FULL NAME VALIDATION 
    if (fullNameValue === "") {
        alert("Please enter your full name.");
        fullName.focus();
        return;
    }

    const nameParts = fullNameValue.split(/\s+/); // Split by spaces
    if (nameParts.length < 2) {
        alert("Please enter your first name and last name.");
        return;
    }

    //    EMAIL VALIDATION
    if (emailValue === "") {
        alert("Please enter your email address.");
        email.focus();
        return;
    }

    if (!emailPattern.test(emailValue)) {
        alert("Please enter a valid email address.");
        email.focus();
        return;
    }

    //    PASSWORD VALIDATION

    if (passwordValue === "") {
        alert("Please enter a password.");
        password.focus();
        return;
    }

    if (!passwordPattern.test(passwordValue)) {
        alert(
            "Password must be at least 8 characters long and include one uppercase letter, one number, and one special character."
        );
        password.focus();
        return;
    }

    // CONFIRM PASSWORD VALIDATION
    if (confirmPasswordValue === "") {
        alert("Please confirm your password.");
        confirmPassword.focus();
        return;
    }

    if (confirmPasswordValue !== passwordValue) {
        alert("Passwords do not match.");
        confirmPassword.focus();
        return;
    }

    //    AGE VALIDATION
    if (!ageValue || ageValue < 18) {
        alert("You must be 18 years or older to register.");
        age.focus();
        return;
    }

    // ======================
    // SUCCESS STATE
    // ======================

    alert("Registration successful 🎉");

    // Log data (for learning/debugging)
    console.log("Form Data Submitted:");
    console.log({
        fullName: fullNameValue,
        email: emailValue,
        password: passwordValue,
        age: ageValue,
    });

    // Reset form
    form.reset();
});