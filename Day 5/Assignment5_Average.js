//Will ask to enter a number 2 time and then average them.

function average () {
    let num = parseFloat(prompt("Enter num: "));
    let num1 = parseFloat(prompt("Enter num1: "));
    return (num + num1) /2;
}
console.log (average());