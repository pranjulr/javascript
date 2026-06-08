let name = "John";

//String Interpolation
console.log(`Hello my name is ${name}`); // Template String or Template Literal


const gameName = new String("Chess"); // String Object

console.log(gameName[0]);
console.log(gameName.length);
console.log(gameName.toUpperCase());


console.log(gameName.charAt(2));
console.log(gameName.indexOf('s'));

const newString = gameName.substring(0, 3); // substring(startIndex, endIndex)
console.log(newString);

const newStringOne = "   Hello World    ";
console.log(newStringOne.trim());