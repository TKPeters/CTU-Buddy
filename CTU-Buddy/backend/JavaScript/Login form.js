// Function to validate the form fields
function validateFields() {
    const username = document.getElementById("username");
    const password = document.getElementById("password");

    // Check if fields are empty
    if (username.value.trim() === "") {
        setError(username, "Username cannot be blank");
        return false;
    }

    if (password.value === "") {
        setError(password, "Password cannot be blank");
        return false;
    }

    // Validation successful
    clearError();
    return true;
}

// Function to display error message for a field
function setError(field, message) {
    const errorText = field.parentElement.querySelector(".error");
    errorText.textContent = message;
    field.classList.add("error-border");
}

// Function to clear error messages
function clearError() {
    const errorTexts = document.querySelectorAll(".error");
    const inputFields = document.querySelectorAll(".input-box input");

    errorTexts.forEach((errorText) => {
        errorText.textContent = "";
    });

    inputFields.forEach((inputField) => {
        inputField.classList.remove("error-border");
    });
}

// Function to authenticate user
function authenticate() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Perform your authentication logic here using the entered username and password

    if (username === "Demo_Account") {
        if (password === "Password") {
            // Successful authentication
            // Redirect or perform desired actions
            window.location.href = "home.html";
        } else {
            // Incorrect password
            setError(password, "Incorrect password");
        }
    } else {
        // Invalid username
        setError(password, "Invalid username");
    }
}

// Event listener for form submission
document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault();

    if (validateFields()) {
        authenticate();
    }
});