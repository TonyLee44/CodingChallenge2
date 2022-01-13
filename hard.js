var names = ["Tom", "Jerry"]
var height = [9, 10]
var mass = [8, 45]

function compare(height, mass) {
    var bmi = mass/(height*height);
}

for (i = 0; i < names.length; i++) {
    compare(height[i], mass[i]);
    console.log(`${names[i]}'s height is ${height[i]} and mass is ${mass[i]}`);
}