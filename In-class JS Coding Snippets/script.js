// Select Elements
let evenOddButton = document.getElementById("evenOddButton");
let reverseButton = document.getElementById("reverseButton");
let changeBackgroundColorButton = document.getElementById("changeBackgroundColorButton");
let returnMaximunValueButton = document.getElementById("returnMaximunValueButton");
let countsNumOfVowelsButton = document.getElementById("countsNumOfVowelsButton");

// Function to generate a random color
function getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Check if a given number is even or odd.
evenOddButton.addEventListener("click", function(){
    let num = document.getElementById("evenOddInput").value;
    let result = num % 2 === 0 ? "Even" : "Odd";
    document.getElementById("evenOddResult").textContent = `The number is: ${result}`;
});  

// Reverse a string
reverseButton.addEventListener("click", function(){
    let str = document.getElementById("reverseInput").value;
    let reverseStr = str.split("").reverse().join("");
    document.getElementById("reverseResult").textContent = `The reversed string is: ${reverseStr}`;
}); 

// Change the background color of a webpage
changeBackgroundColorButton.addEventListener("click", function(){ 
    document.body.style.backgroundColor = getRandomColor();
}); 

// Takes an array of numbers and returns the maximum value
returnMaximunValueButton.addEventListener("click", function(){
    let numbers = document.getElementById("returnMaximunValueInput").value.split(",");
    let maxValue = Math.max(...numbers.map(num => parseInt(num.trim())));
    document.getElementById("returnMaximunValueResult").textContent = `The maximum number is: ${maxValue}`;
}); 

// Counts the number of vowels in a given string
countsNumOfVowelsButton.addEventListener("click", function(){
    let str = document.getElementById("countsNumOfVowelsInput").value;
    let vowelCount = (str.match(/[AEIOUaeiou]/g) || []).length;
    document.getElementById("countsNumOfVowelsResult").textContent = `The number of vowels is: ${vowelCount}`;
}); 

