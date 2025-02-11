let form = document.getElementById("form"); 
let resultDiv = document.getElementById("result");

// Display user input
function displayUserInput(event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let age = document.getElementById("age").value;
    let gender = document.querySelector('input[name="gender"]:checked').value;
    let country = document.getElementById("country").value;
    let agree = document.getElementById("agree").checked;

    if (!agree) {
        alert("You must agree to the terms and conditions.");
        return;
    }

    let resultDisplay = `
        <h2>Submitted Information</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Age:</strong> ${age}</p>
        <p><strong>Gender:</strong> ${gender}</p>
        <p><strong>Country:</strong> ${country}</p>
        <p><strong>Terms and Conditions:</strong> ${agree ? 'Agreed' : 'Not Agreed'}</p>
    `;

    resultDiv.innerHTML = resultDisplay;
}

// form submission
form.addEventListener("submit", displayUserInput);

