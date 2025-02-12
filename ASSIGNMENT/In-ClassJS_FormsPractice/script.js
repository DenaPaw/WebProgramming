let form = document.getElementById("form");
let resultDiv = document.getElementById("result");

// Validate form on submission
function validateForm(event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let age = document.getElementById("age").value.trim();

    let nameError = document.getElementById("nameError");
    let emailError = document.getElementById("emailError");
    let ageError = document.getElementById("ageError");

    let valid = true;

    // Reset previous error messages and styles
    nameError.innerHTML = "";
    emailError.innerHTML = "";
    ageError.innerHTML = "";

    document.getElementById("name").classList.remove("invalid");
    document.getElementById("email").classList.remove("invalid");
    document.getElementById("age").classList.remove("invalid");

    if (name === "") {
        nameError.innerHTML = "Name is required";
        document.getElementById("name").classList.add("invalid");
        valid = false;
    }

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
        emailError.innerHTML = "Email is required";
        document.getElementById("email").classList.add("invalid");
        valid = false;
    } else if (!emailPattern.test(email)) {
        emailError.innerHTML = "Invalid email format";
        document.getElementById("email").classList.add("invalid");
        valid = false;
    }


    let ageNumber = Number(age);
    if (age === "" || ageNumber < 18 || ageNumber > 100) {
        ageError.innerHTML = "Age must be between 18 and 100";
        document.getElementById("age").classList.add("invalid");
        valid = false;
    }

    if (valid) {
        resultDiv.innerHTML = `
            <h2>Submitted Information</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Age:</strong> ${age}</p>
            <p class='success'>Form submitted successfully!</p>
        `;
        document.getElementById("form").reset();
    }
}

// form submission
form.addEventListener("submit", validateForm);
