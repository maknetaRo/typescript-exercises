function greetings(name) {
    return "Hello, " + name + ", nice to meet you!";
}
var greet = greetings('Magdalena');
console.log(greet);
function countChars(name) {
    return "\"" + name.charAt(0).toUpperCase() + name.slice(1) + "\" has " + name.length + " characters.";
}
var chars = countChars('Magdalena');
console.log(chars);
chars = countChars('Today is Tuesday, March 29, 2022 year.');
console.log(chars);
function printingQuotes(quote, author) {
    console.log('What is the quote?');
    console.log(quote);
    console.log('Who said it?');
    console.log(author);
    return author + " says, \"" + quote + "\"";
}
var quote = printingQuotes("These aren't the droids you're looking for.", 'Obi-Wan Kenobi');
console.log(quote);
function madLib(noun, verb, adjective, adverb) {
    console.log('Enter a noun: ' + noun);
    console.log('Enter a verb: ' + verb);
    console.log('Enter an adjective: ' + adjective);
    console.log('Enter an adverb: ' + adverb);
    return "Do you " + verb + " your " + adjective + " " + noun + " " + adverb + "? That's hilarious!";
}
var madlib = madLib('cat', 'jump', 'pretty', 'smoothly');
console.log(madlib);
function retirementCalc(currentAge, retireAge) {
    var date = new Date().getFullYear();
    var yearsLeft = retireAge - currentAge;
    return "If you want to retire at " + retireAge + ", you have " + yearsLeft + " years left until you can do it. \n    It's " + date + ", so you can retire in " + (date + yearsLeft) + ".\n  ";
}
var retAge = retirementCalc(48, 65);
console.log(retAge);
