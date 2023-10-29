const form = document.getElementById("userForm");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    if (validateForm()) {
        alert("Benutzer wurde registriert!");
    }
});

function validateForm() {
    let valid = true;

    const nameInput = document.getElementById("name");
    const ageInput = document.getElementById("age");
    const passwordInput = document.getElementById("password");
    const emailInput = document.getElementById("email");

    const nameError = document.getElementById("nameError");
    const ageError = document.getElementById("ageError");
    const passwordError = document.getElementById("passwordError");
    const emailError = document.getElementById("emailError");

    nameError.textContent = "";
    ageError.textContent = "";
    passwordError.textContent = "";
    emailError.textContent = "";

    if (nameInput.value.trim() === "") {
        nameError.textContent = "Name ist erforderlich.";
        valid = false;
    }

    if (isNaN(ageInput.value) || ageInput.value < 0 || ageInput.value > 100) {
        ageError.textContent = "Alter muss eine gültige Nummer sein.";
        valid = false;
    }

    if (passwordInput.value.length < 6) {
        passwordError.textContent = "Password muss mindestens 6 Stellig sein.";
        valid = false;
    }

    if (!validateEmail(emailInput.value)) {
        emailError.textContent = "Ungültiges E-Mail-Format.";
        valid = false;
    }

    return valid;
}

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
