// ============================
// Part 1: Event Handling
// ============================

// Example: Button click event
const clickBtn = document.getElementById("clickBtn");
const clickMessage = document.getElementById("clickMessage");

clickBtn.addEventListener("click", () => {
    clickMessage.textContent = "🎯 You clicked the button!";
});


// ============================
// Part 2: Interactive Elements
// ============================

// Feature 1: Light/Dark Mode Toggle
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

// Feature 2: Counter
let counter = 0;
const counterValue = document.getElementById("counterValue");
const incrementBtn = document.getElementById("incrementBtn");

incrementBtn.addEventListener("click", () => {
    counter++;
    counterValue.textContent = counter;
});


// ============================
// Part 3: Custom Form Validation
// ============================

const form = document.getElementById("myForm");

form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent actual form submission

    // Clear previous errors
    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("passwordError").textContent = "";
    document.getElementById("formSuccess").textContent = "";

    let isValid = true;

    // Validate Name
    const name = document.getElementById("name").value.trim();
    if (name === "") {
        document.getElementById("nameError").textContent = "Name is required!";
        isValid = false;
    }

    // Validate Email
    const email = document.getElementById("email").value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById("emailError").textContent = "Enter a valid email!";
        isValid = false;
    }

    // Validate Password
    const password = document.getElementById("password").value.trim();
    if (password.length < 6) {
        document.getElementById("passwordError").textContent = "Password must be at least 6 characters!";
        isValid = false;
    }

    if (isValid) {
        document.getElementById("formSuccess").textContent = "✅ Form submitted successfully!";
    }
});
