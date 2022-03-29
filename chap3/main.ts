// Exercise 7: Area of a Rectangular Room
function roomArea(len: number, wid: number) {
  console.log('What is the length of the room in feet?');
  console.log(len);
  console.log('What is the width of the room in feet? ');
  console.log(wid);
  const conversionFactor: number = 0.09290304;
  const feetConversion: number = 0.3048;
  let squareInFeet: number = len * wid;
  let lenMeters: number = len * feetConversion;
  let widMeters: number = wid * feetConversion;

  let squareInMeters = squareInFeet * conversionFactor;

  return `The dimensions of the room are ${len} feet by ${wid} feet. 
  In meters it is ${roundToTwo(lenMeters)} meters by ${roundToTwo(
    widMeters
  )} meters. 
  The area is
  ${squareInFeet} square feet
  ${roundToTwo(squareInMeters)} square meters.`;
}

let room = roomArea(12, 15);
console.log(room);

function roundToTwo(num: number) {
  return Math.floor(num * 100) / 100;
}

// Exercise 8: Pizza Party
function pizzaParty(people: number, pizzas: number) {
  console.log('How many people?');
  console.log(people);
  console.log('How many pizzas do you have?');
  console.log(pizzas);
  const piecesPerPizza: number = 8;
  let allPieces: number = piecesPerPizza * pizzas;
  let piecePerPerson: number = Math.floor(allPieces / people);
  let remider: number = allPieces % people;

  return `
  ${people} people with ${pizzas} pizza${properPlural(pizzas)}.
  Each person gets ${piecePerPerson} piece${properPlural(
    piecePerPerson
  )} of pizza.
  There are ${remider} leftover piece${properPlural(piecePerPerson)}.`;
}
console.log('**************');
let pizza = pizzaParty(8, 2);
console.log(pizza);
console.log('**************');
pizza = pizzaParty(9, 3);
console.log(pizza);

console.log('**************');
pizza = pizzaParty(7, 1);
console.log(pizza);

function properPlural(pieces: number) {
  if (pieces > 1) {
    return 's';
  } else if (pieces === 1) {
    return '';
  } else {
    return 's';
  }
}

// Exercise 9: Paint Calculator

function gallonsOfPaint(length: number, width: number) {
  const feetPerOneGallon: number = 350;
  let squareFeet = length * width;
  let gallons = Math.ceil(squareFeet / feetPerOneGallon);
  return `
    You will need to purchase ${gallons} of paint to cover ${squareFeet} square feet.
  `;
}
let paint = gallonsOfPaint(15, 20);
console.log(paint);
paint = gallonsOfPaint(25, 20);
console.log(paint);
