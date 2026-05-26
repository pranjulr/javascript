//Primitive data types

//String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 100; // Number
const scoreValue = 100.5; // Number

const isLoggedIn = false; // Boolean
const outsideTemp = null; // Null
let userEmail; // Undefined

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 1234567890123456789012345678901234567890n; // BigInt , n at the end of the number indicates that it is a BigInt

// Reference Types (Non-primitive data types)

//Array, Object, Functions

const heros = ["Superman", "Batman", "Flash"]; // Array

let myObj = {
    name: "Pranjul",
    age: 22,
} // Object

const myFunc = function() {
    console.log("Hello World");
} // Function

console.log(typeof bigNumber); // number

//+++++++++++++++++++++++++++++++++++++++++++++++++++

//Stack Memory (Primitive, Value Copy)
//Heap Memory (Non-Primitive, Reference)

let firstName = "Pranjul"; // stored in stack
let lastName = firstName; // stored in stack, but it is a copy of the value stored in firstName

lastName = "Singh"; 

console.log(lastName); // Singh 
console.log(firstName); // Pranjul  

let userObj1 = {
    name: "Pranjul",
    age: 22,
} // stored in heap

let userObj2 = userObj1; // stored in stack, but it is a reference to the object stored in heap

userObj2.age = 26; // changing the age property of userObj2 will also change the age property of userObj1 because they both reference the same object in heap

console.log(userObj1.age); // 26