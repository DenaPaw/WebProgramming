//Traditional JS Function
function greet(name){
    return "Hello, "+name+"!";
}

console.log(greet("Bhaskar"));

function isPostive(number){
    return number >=0;
}

//Arrow JS Function
let greetName = (name) => "Hello, "+name+"!";
console.log(greetName("Ghosh"));

let isPostiveNumber = (number) => number >=0;
console.log(isPostiveNumber(5));