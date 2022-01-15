/*
HARD: Given the information below for Tom and Jerry. 

Tom - height:  9in   mass: 8 g
Jerry - height: 10in mass: 45 g
Compare the BMI (Body Mass Index) of Tom & Jerry using the formula below:

    BMI = mass / height ^2 = mass / (height * height)

Store Tom & Jerry’s mass and height as variables. Calculate both their BMI’s. Create a Boolean variable containing information about whether Tom has a higher BMI than Jerry. Print a string to the console with the variable from step 3 ( e.g. Is Tom’s BMI higher than Jerry’s? false).

*/


var names = ["Tom", "Jerry"]
var height = [9, 10]
var mass = [8, 45]
let tomBmi;
let jerryBmi;
let isTomBmiHigher;

function calculateBMI(height, mass) {
    return mass/(height*height);
}

for (let i = 0; i < names.length; i++) {
    const calculatedBMI = calculateBMI(height[i], mass[i]);

    if (names[i] === "Tom") {
        tomBmi = calculatedBMI;
    } else {
        jerryBmi = calculatedBMI;
    }
}

isTomBmiHigher = (tomBmi > jerryBmi);

console.log(`Is Tom's BMI higher than Jerry's? ${isTomBmiHigher}`);