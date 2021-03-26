'use strict';
// function calcAge(birthYear) { // Defined in the Global Scope
//     const age = 2021 - birthYear;

//     function printAge() {
//         let output = `${firstName} is ${age} years old born in ${birthYear}` // Variable look up ascends
//         console.log(output);

//         if (birthYear >= 1981 && birthYear <= 1996) {
//             //Creating new variable with same name as outer scopes variable
//             const firstName = 'Monique'; // must initalize before running string JS loos for Variable name within current scope
//             const str = `Oh, and you're a millenial, ${firstName}`;
//             console.log(str);

//             function add(a, b) {
//                 return a + b;
//             }
//             console.log(add(3, 4)); //Code still runs outside the blockscope
//             output = 'NEW OUTPUT'; //CRe-assigning outer scope's variable
//             console.log(output);
//         }
//         // console.log(str); //const and let variables are only available in the block scope
//     }
//     printAge();
//     return age;
// }

// const firstName = 'Monikka'; // Global variable = Accessible Everywhere
// // calcAge(1993);
// // console.log(age); // Reference Error: age is not defines globally
// // printAge(); // function cannot definined globally

// // Hoisting practice

// //Variables
// console.log(me); // undefined
// // console.log(job); //Reference Error - TDZ here. We must declare before
// // console.log(year); //Reference Error - TDZ here. We must declare before.
// var me = 'Monikka';
// let job = 'programmer';
// const year = 1993;

// //Functions

// console.log(addDeclaration(2, 3)); // can be ran before the function is declared
// // console.log(addExpression(2, 3)); // Reference error. Placed in TDZ is considered a const variable so the same rules will apply
// console.log(arrow); // Will be considered undefined, if we add values, we will get errors.
// function addDeclaration(a, b) {
//     return a + b;
// }

// const addExpression = function (a, b) {
//     return a + b;
// }

// var arrow = (a, b) => a + b;

// //Pitfall of Hoisting

// if (!numProducts) deleteShoppingCart();
// var numProducts = 10; //Since the variable is delcared by var, we will get a falsy value undefined. 0 also is a falsy value Hoisting will cause the deleteShoppingCart function to be declared.

// function deleteShoppingCart() {
//     console.log('All products deleted');
// }

// var x = 1;
// let y = 2;
// const z = 3;

// console.log(x === window.x);
// console.log(y === window.y);
// console.log(z === window.z);

// This keyword practice

//Simple function call
// console.log(this); // The window object
// const calcAge = function (birthYear) {
//     console.log(2021 - 1993);
//     console.log(this); // undefined in strict mode.
// }

// calcAge(1993);

// Arrow function

// const calcAge = birthYear => 2021 - birthYear; // Arrow function does not get it's own this keyword, it moves up to the global scope.
// calcAge(1993);
// console.log(this); //Lexical scope = moved to the global scope

// const monikka = {
//   firstName: 'Monikka',
//   year: 1993,
//   calcAge: function () {
//     console.log(this);
//     console.log(2021 - this.year);
//   },
//   greet: () => console.log(`Hey ${this.firstName}`),
// };

// monikka.greet();

//Primitive Types
let lastName = 'Edgeston';
let oldLastName = lastName;
lastName = 'Williams';
console.log(lastName, oldLastName);

//Reference Types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

const marriedJessica = jessica; // References the origional memory address. Both hold the same memory value in the reference.
jessica.lastName = 'Davis';
console.log(`Before Marriage:`, jessica);
console.log(`After Marriage`, marriedJessica);
//Davis appears in the lastName of the origional and marriedJessica objects.

// marriedJessica = {} - Will not work with const

// How to copy an object and change the object without altering the other.
//Copying Objects

const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

//If we wanted to alter info on one object, we will use a method call object.assign() Merges two objects and returns a new one.
const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';
console.log('Before Marriage', jessica2);
console.log('After Marriage', jessicaCopy);
