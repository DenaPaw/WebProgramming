/* 
console.log("Hello World");
console.log("The answer is "+42);
alert("Message!"); // Single line comment
/* Variables */
/*
let level = 23;
let accuracy = 0.99;
// let name ="Pikachu";
let temp = [55, 60, 57, 5]; //Array

let isValid = "hello!";

const BEST_CLASS="CS3163";
BEST_CLASS="CS3213"; // Error

let credit = 5 + 4 + (2*3);

*/
// Strings

let name = "Bhaskar Ghosh";
let fName = names.substring(0,names.indexOF(" "));
let len =fName.length;
console.log(len);

/* Loops and Conditions...*/

function mystery(a, b) {
    if (a>b){
        return 0;
    }
    else if (a==1){
        let result = 0;
        for (let i=a; i<=b; i++)
        {
            result+=i;
        }
        return result;
    }
}
console.log(mystery(4,6));

while(condition){
    console.log("While loop");
}
do {
    statements;
} while(condition);


/*arrays...*/

let name = ["Earth", "Water", "Fire"];
let array = []; //[]
name[0] = "Hello";
name[0] = "My";

array.push("Bhaskar");
array.unshift("Tyler");
array.pop(); // Delete last element

