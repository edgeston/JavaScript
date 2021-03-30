'use strict';

// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },

//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
// };

// Basic destructuring
// const arr = [2, 3, 4];
// const a = arr[0]; //2
// const b = arr[1]; //3
// const c = arr[2]; //4

//Destructuring the array;
// const [x, y, z] = arr; // Elements of the array
// console.log(x, y, z);
// console.log(arr);

// To Destructure
// To skip extracting an element, you will need to add a blank space in the destructure array and add the 'second' value you would like the array element
// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

//Basic way of switching, main and temporary
// Switching variables
// let temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary); // flipped the main and secondary choices

//Using destructuring
//Changing secondary into the main

//1. Write an Array with the elements inverted
//2. De-struct

// [main, secondary] = [secondary, main]; // since the array is a let, we are simply re-assigning the values for secondary and main.
// console.log(main, secondary);

//Destructuring menus

// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },

//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
// };
// console.log(restaurant.order(2, 0)); //Extracing the 3rd element in the starterMenu and the 1st element in the mainMenu

//Recieve 2 return values from a function
//Destructiung the resturant.order
// const [starter, mainCourse] = restaurant.order(2, 0);

//Nested De-Structuring
// const nested = [2, 4, 6, [5, 6]];
// const [i, , , j] = nested;
// console.log(i, j);
// const [i, , , [j, k]] = nested;
// console.log(i, j, k);

//Setting default values to variables.
//Helps when we don't know the length of an array

//Default Values
// const [p, q, r] = [8, 9];
// console.log(p, q, r); // r is undefined because theres no 2nd position.

// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r); // r is now 1, where p and q's values are still the same
//Can be useful when we get data from an API

// DeStructuring Objects
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`);
  },
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  }
};


//&& and || operators
//Use Any data type, Return Any data type and Short Curcuiting/ Short Circut Evaluation (if first value is truthy, it will return that first value other operant will not be evaluated)

//||
// console.log(3 || 'Monikka'); //3
// console.log('' || 'Monikka'); // 'Monikka'
// console.log(true || 0); // true
// console.log(undefined || null); //null
// console.log(undefined || 0 || '' || 'Hello' || 23 || null); // Stops at 'Hello'. Hello is a truthy value

// restaurant.numGuests = 23;
// const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guest1);

// const guest2 = restaurant.numGuests || 10;
// console.log(guest2); // Took the first truthy vaalue
// console.log('----- AND ---');
//&& Operator
// console.log(0 && 'Monikka'); // 0
// console.log(7 && 'Jonas'); //Jonas is truthy but is selected because it's the last value being compared 
// console.log('Hello' && 23 && null && 'Monikka'); //null
// // && Operator short circuits when the first falsy value appears

//Practical Example

//We can use short circuting to evaluate if a value exist w/o using an if statement
// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mushrooms', 'spinach');
// }

// restaurant.orderPizza && restaurant.orderPizza('mushroom', 'spinach');
// restaurant.orderPizza('Spinach', 'Onions', 'Olives', 'Mushrooms');
// restaurant.orderPizza('Mushrooms'); // Will leave empty array

//Functions - Rest Parameters
//Does the opposite of the spread operator

// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++)
//     sum += numbers[i];
//   console.log(sum);
// };
// add(2, 3);
// add(5, 3, 7, 2);
// add(8, 2, 3, 5, 4, 8, 2, 1);
// const x = [23, 5, 7];
// add(...x); // Adding the spread operator, Spreading the operator into individally then processing them through the add function. 



// Rest Parameters are taking multiple numbers and packing it into one Array

// Destructuring 
/// Rest in Objects

// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);
//Rest Pattern
// const arr = [1, 2, ...[3, 4]]; // Spread Operator in action
//Rest, because of left side of equal sign
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b); //1,2
// console.log(others); //3,4,5

//We can use the rest patters on both sides of the assignment operator
// const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu]; //Will remove Pizza and Risotto from the main menu. Doesn't include any skipped elements.
// console.log(pizza, risotto, otherFood);

// Only 1 ...rest in each assignment

// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// //Spread Operator
// const newArr = [1, 2, ...arr];
// console.log(newArr);

// console.log(...newArr);// Shows individual elemets of the array

// const newMenu = [...restaurant.mainMenu, 'Gnocchi']; // Creating a completely new array and adding an individual element
// console.log(newMenu);

// //Copy Array
// const mainMenuCopy = [...restaurant.mainMenu]; // Shallow copy of mainMenu array

// // Join 2 Arrays or more
// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menu);

// //Iterables
// const str = 'monikka';
// const letters = [...str, '', 'S.'];
// console.log(letters); //Each letter of the origional string is now an individual element
// console.log(...str);
// Values with multiple commas, do not belong in Template literals

// const ingredients = [prompt("Let's make pasta! Ingredient 1?"), prompt("Ingredient 2?"), prompt("Ingredient 3?")];
// console.log(ingredients);

// restaurant.orderPasta(...ingredients); // Always use ES6 feature spread operator

//Objects

// const newResturant = { foundedIn: 1998, ...restaurant, founder: 'Monikka' };
// console.log(newResturant);

// const restaurantCopy = { ...newResturant };
// restaurantCopy.name = 'Resturanti Mesturanti';
// console.log(restaurantCopy.name, restaurant.name);

// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via del Sole, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });
// const { name, openingHours, categories } = restaurant; // Destructuring Objects. We will use the names of the properties of the objects.
// console.log(name, openingHours, categories);

// // We can also use variables to name the properties.
// const {
//   name: restaurantName, // using colon to speficy a new name.
//   openingHours: hours,
//   categories: tags,
// } = restaurant;

// console.log(restaurantName, hours, tags);

// // Setting default variables

// const { menu = [], starterMenu: starters = [] } = restaurant; //Use = sign to set a default value
// console.log(menu, starters); //menu is an empty default array. starters, is the renames starter menu

// //Mutating Variables

// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// console.log(a, b);

// //Mutating a + b
// ({ a, b } = obj); // We must wrap the variables we're mutating into variables
// console.log(a, b);

// //Nested Objects
// const {
//   fri: { open: o, close: c },
// } = openingHours; // To further destructure the object, use ":"
// console.log(o, c);

