'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
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
};

// Basic destructuring
const arr = [2, 3, 4];
const a = arr[0]; //2
const b = arr[1]; //3
const c = arr[2]; //4

//Destructuring the array;
const [x, y, z] = arr; // Elements of the array
console.log(x, y, z);
console.log(arr);

// To Destructure
// To skip extracting an element, you will need to add a blank space in the destructure array and add the 'second' value you would like the array element
let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

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

[main, secondary] = [secondary, main]; // since the array is a let, we are simply re-assigning the values for secondary and main.
console.log(main, secondary);

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
console.log(restaurant.order(2, 0)); //Extracing the 3rd element in the starterMenu and the 1st element in the mainMenu

//Recieve 2 return values from a function
//Destructiung the resturant.order
const [starter, mainCourse] = restaurant.order(2, 0);

//Nested De-Structuring
const nested = [2, 4, 6, [5, 6]];
// const [i, , , j] = nested;
// console.log(i, j);
const [i, , , [j, k]] = nested;
console.log(i, j, k);
