var num1 = parseInt(prompt("Enter your first number: "), 10);
var num2 = parseInt(prompt("Enter your second number: "), 10);

function min(num1, num2) {
    if(num1 < num2) {
        console.log(`${num1} is the minimum.`)
    }
    else if (num1 > num2) {
        console.log(`${num2} is the minimum.`)
    }
    else {
        console.log(`${num1} and ${num2} are equal.`)
    }
}
min(num1, num2);