const form = document.querySelector("form");
const fullName = document.getElementById("full-name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const age = document.getElementById("age");

// Email pattern
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Listen for form submission
form.addEventListener("submit", function (event) {
  event.preventDefault(); // stop page reload

  // Get values
  const fullNameValue = fullName.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const ageValue = Number(age.value.trim());

  // ======================
  // VALIDATION START
  // ======================

  if (fullNameValue === "") {
    alert("Please enter your full name.");
    fullName.focus();
    return;
  }

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

  if (passwordValue.length < 6) {
    alert("Password must be at least 6 characters long.");
    password.focus();
    return;
  }

  if (!ageValue || ageValue < 1) {
    alert("Please enter a valid age.");
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