//MEDIUM: Create a program that accepts a number (1-12) as input and
// logs to the console that number and its corresponding month. For
// example: if the user enters the number 3, then it should return
// the month “March.” Alert the user if they enter an invalid number
// (e.g. less than 1 or greater than 12).

// CHAD'S NOTE: There is a way to utilize an array of months
//   so you can really make this code much cleaner and more
//   concise.
var num = parseInt(prompt("Enter a number 1-12: "), 10);

switch (num) {
    case 1:
        console.log(`Number ${num} is the month of January.`);
        break;
    case 2:
        console.log(`Number ${num} is the month of February.`);
        break;
    case 3:
        console.log(`Number ${num} is the month of March.`);
        break;
    case 4:
        console.log(`Number ${num} is the month of April.`);
        break;
    case 5:
        console.log(`Number ${num} is the month of May.`);
        break;
    case 6:
        console.log(`Number ${num} is the month of June.`);
        break;
    case 7:
        console.log(`Number ${num} is the month of July.`);
        break;
    case 8:
        console.log(`Number ${num} is the month of August.`);
        break;
    case 9:
        console.log(`Number ${num} is the month of September.`);
        break;
    case 10:
        console.log(`Number ${num} is the month of October.`);
        break;
    case 11:
        console.log(`Number ${num} is the month of November.`);
        break;
    case 12:
        console.log(`Number ${num} is the month of December.`);
        break;
    default:
        console.log("You entered an invalid number!");
        break;
}