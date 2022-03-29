// Exercise 7: Area of a Rectangular Room
function roomArea(len, wid) {
    console.log('What is the length of the room in feet?');
    console.log(len);
    console.log('What is the width of the room in feet? ');
    console.log(wid);
    var conversionFactor = 0.09290304;
    var feetConversion = 0.3048;
    var squareInFeet = len * wid;
    var lenMeters = len * feetConversion;
    var widMeters = wid * feetConversion;
    var squareInMeters = squareInFeet * conversionFactor;
    return "The dimensions of the room are " + len + " feet by " + wid + " feet. \n  In meters it is " + roundToTwo(lenMeters) + " meters by " + roundToTwo(widMeters) + " meters. \n  The area is\n  " + squareInFeet + " square feet\n  " + roundToTwo(squareInMeters) + " square meters.";
}
var room = roomArea(12, 15);
console.log(room);
function roundToTwo(num) {
    return Math.floor(num * 100) / 100;
}
// Exercise 8: Pizza Party
function pizzaParty(people, pizzas) {
    console.log('How many people?');
    console.log(people);
    console.log('How many pizzas do you have?');
    console.log(pizzas);
    var piecesPerPizza = 8;
    var allPieces = piecesPerPizza * pizzas;
    var piecePerPerson = Math.floor(allPieces / people);
    var remider = allPieces % people;
    return "\n  " + people + " people with " + pizzas + " pizza" + properPlural(pizzas) + ".\n  Each person gets " + piecePerPerson + " piece" + properPlural(piecePerPerson) + " of pizza.\n  There are " + remider + " leftover piece" + properPlural(piecePerPerson) + ".";
}
console.log('**************');
var pizza = pizzaParty(8, 2);
console.log(pizza);
console.log('**************');
pizza = pizzaParty(9, 3);
console.log(pizza);
console.log('**************');
pizza = pizzaParty(7, 1);
console.log(pizza);
function properPlural(pieces) {
    if (pieces > 1) {
        return 's';
    }
    else if (pieces === 1) {
        return '';
    }
    else {
        return 's';
    }
}
// Exercise 9: Paint Calculator
function gallonsOfPaint(length, width) {
    var feetPerOneGallon = 350;
    var squareFeet = length * width;
    var gallons = Math.ceil(squareFeet / feetPerOneGallon);
    return "\n    You will need to purchase " + gallons + " of paint to cover " + squareFeet + " square feet.\n  ";
}
var paint = gallonsOfPaint(15, 20);
console.log(paint);
paint = gallonsOfPaint(25, 20);
console.log(paint);
