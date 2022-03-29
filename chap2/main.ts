// Exercises from Chapter 2 but without prompts from users
function greetings(name: string) {
  return `Hello, ${name}, nice to meet you!`;
}

let greet = greetings('Magdalena');
console.log(greet);

function countChars(name: string) {
  return `"${name.charAt(0).toUpperCase()}${name.slice(1)}" has ${
    name.length
  } characters.`;
}

let chars = countChars('Magdalena');
console.log(chars);
chars = countChars('Today is Tuesday, March 29, 2022 year.');
console.log(chars);

function printingQuotes(quote: string, author: string) {
  console.log('What is the quote?');
  console.log(quote);
  console.log('Who said it?');
  console.log(author);
  return `${author} says, "${quote}"`;
}

let quote = printingQuotes(
  "These aren't the droids you're looking for.",
  'Obi-Wan Kenobi'
);
console.log(quote);

function madLib(noun: string, verb: string, adjective: string, adverb: string) {
  console.log('Enter a noun: ' + noun);
  console.log('Enter a verb: ' + verb);
  console.log('Enter an adjective: ' + adjective);
  console.log('Enter an adverb: ' + adverb);

  return `Do you ${verb} your ${adjective} ${noun} ${adverb}? That's hilarious!`;
}

let madlib = madLib('cat', 'jump', 'pretty', 'smoothly');
console.log(madlib);

function retirementCalc(currentAge: number, retireAge: number) {
  let date = new Date().getFullYear();
  let yearsLeft: number = retireAge - currentAge;
  return `If you want to retire at ${retireAge}, you have ${yearsLeft} years left until you can do it. 
    It's ${date}, so you can retire in ${date + yearsLeft}.
  `;
}

let retAge = retirementCalc(48, 65);
console.log(retAge);
