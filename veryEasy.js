//VERY EASY: Write a function named min that takes two arguments and returns their minimum.

// CHAD'S NOTE: This is one to pay attention to the specific directions
//   What is the expected behavior of the function here? Currently the
//   behavior is a console.log, but what is it actually asking for?

var num1 = parseInt(prompt("Enter your first number: "), 10);
var num2 = parseInt(prompt("Enter your second number: "), 10);

function min(num1, num2) {
    if (num1 < num2) {
        console.log(`${num1} is the minimum.`)
    } else if (num1 > num2) {
        console.log(`${num2} is the minimum.`)
    } else {
        console.log(`${num1} and ${num2} are equal.`)
    }
}

min(num1, num2);