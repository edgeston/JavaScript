'use strict'
// /*LECTURE: Values and Variables
// 1. Declare variables called 'country', 'continent' and 'population' and
// assign their values according to your own country (population in millions)
// 2. Log their values to the console*/

// let country = 'United States';
// // let continent = 'North America';
// let population = 3290000000;
// // console.log(country, continent, population);

// /*LECTURE: Data Types
// 1. Declare a variable called 'isIsland' and set its value according to your
// country. The variable should hold a Boolean value. Also declare a variable
// 'language', but don't assign it any value yet
// 2. Log the types of 'isIsland', 'population', 'country' and 'language'
// to the console */

// // let isIsland = false; 
// let language;

// // console.log(typeof(isIsland));
// console.log(typeof (population));
// console.log(typeof (country));
// console.log(typeof (language));

// /* LECTURE: let, const and var
// 1. Setthevalueof'language'tothelanguagespokenwhereyoulive(some countries have multiple languages, but just choose one)
// 2. Thinkaboutwhichvariablesshouldbeconstvariables(whichvalueswillnever change, and which might change?). Then, change these variables to const.
// 3. Trytochangeoneofthechangedvariablesnow,andobservewhathappens */

// language = 'English';
// const continent = 'North America';
// const isIsland = false;

// // continent and isIsland variables changed color. 
// //Also has to comment out all the initial declarations. 

// console.log(language, continent, isIsland)


// // LECTURE: Basic Operators
// // 1. Ifyourcountrysplitinhalf,andeachhalfwouldcontainhalfthepopulation, then how many people would live in each half?
// // 2. Increasethepopulationofyourcountryby1andlogtheresulttotheconsole
// // 3. Finlandhasapopulationof6million.Doesyourcountryhavemorepeoplethan
// // Finland?
// // 4. Theaveragepopulationofacountryis33millionpeople.Doesyourcountry
// // have less people than the average country?
// // 5. Basedonthevariablesyoucreated,createanewvariable'description'
// // which contains a string with this format: 'Portugal is in Europe, and its 11 million people speak portuguese'

// halfOfPopulation = (population / 2);
// console.log(halfOfPopulation + ' ' + 'people'); //164500000 people

// // population++;
// console.log(population); 329000001

// let finlandPopulation = 6000000;
// console.log(population > finlandPopulation); //true

// let averagePopulation = 33000000;
// console.log(population >= averagePopulation);

// console.log(country + " is in " + continent + ", and it's " + population + " speak " + language + ".");


// // LECTURE: Strings and Template Literals
// // 1. Recreatethe'description'variablefromthelastassignment,thistime using the template literal syntax
// const description = `The ${country} is in ${continent}, and it's ${population} people speak ${language}.`;
// console.log(description);

// // LECTURE: Type Conversion and Coercion
// // 1. Predict the result of these 5 operations without executing them:
// // '9' - '5';
// // '19' - '13' + '17';
// // '19' - '13' + 17;
// // '123' < 57;
// // 5 + 6 + '4' + 9 - 4 - 2;
// // 2. Execute the operations to check if you were right

// console.log('9' - '5'); //4
// console.log('19' - '13' + '17'); //617
// console.log('19' - '13' + 17); //23
// console.log('123' < 57); //false
// console.log(5 + 6 + '4' + 9 - 4 - 2); //1143

// // LECTURE: Equality Operators: == vs. ===
// // 1. Declare a variable 'numNeighbours' based on a prompt input like this:
// // prompt('How many neighbour countries does your country
// // have?');
// // 2. If there is only 1 neighbour, log to the console 'Only 1 border!' (use loose equality
// // == for now)
// // 3. Use an else-if block to log 'More than 1 border' in case 'numNeighbours'
// // is greater than 1
// // 4. Use an else block to log 'No borders' (this block will be executed when
// // 'numNeighbours' is 0 or any other value)
// // 5. Test the code with different values of 'numNeighbours', including 1 and 0.
// // 6. Change == to ===, and test the code again, with the same values of
// // 'numNeighbours'. Notice what happens when there is exactly 1 border! Why
// // is this happening?
// // 7. Finally, convert 'numNeighbours' to a number, and watch what happens now
// // when you input 1
// // 8. Reflect on why we should use the === operator and type conversion in this
// // // situation

// // const numNeighbours = prompt(`How many neighboring countries does the ${country} have?`);
// // console.log(typeof (numNeighbours));

// // // if (numNeighbours != 1) {
// // //     console.log(`One border needed`)
// // // } else if (numNeighbours > 1) {
// // //     console.log(`${numNeighbours} borders needed`)
// // // } else {
// // //     console.log(`No borders needed`)
// // }
// //No Type Coercion performed on the Strict Equality/ InEquality Operator

// // LECTURE: Logical Operators
// // 1. Comment out the previous code so the prompt doesn't get in the way
// // 2. Let's say Sarah is looking for a new country to live in. She wants to live in a
// // country that speaks english, has less than 50 million people and is not an
// // island.
// // 3. Write an if statement to help Sarah figure out if your country is right for her.
// // You will need to write a condition that accounts for all of Sarah's criteria. Take
// // your time with this, and check part of the solution if necessary.
// // 4. If yours is the right country, log a string like this: 'You should live in Portugal :)'.If
// // not, log 'Portugal does not meet your criteria :('
// // 5. Probably your country does not meet all the criteria.So go back and temporarily
// // change some variables in order to make the condition true(unless you live in
// //     Canada : D)

// // country = 'Canada';
// // language = 'English';
// // population = 40000000;

// // if (language === 'English' && population < 50000000 && !isIsland) {
// //     console.log(`${country} is the country for you!`)
// // } else {
// //     console.log(`${country} does not meet your criteria.`)
// // }

// // // LECTURE: The Conditional (Ternary) Operator
// // // 1. If your country's population is greater than 33 million, use the ternary operator
// // // to log a string like this to the console: 'Portugal's population is above average'.
// // // Otherwise, simply log 'Portugal's population is below average'. Notice how only
// // // one word changes between these two sentences!
// // // 2. After checking the result, change the population temporarily to 13 and then to
// // // 130. See the different results, and set the population back to original

// // population >= 33000000 ? 'above' : 'below';
// // console.log(`The ${country}'s population is ${population >= 33000000 ? 'above' : 'below'} average`);


// function describeCountry(country, population, capitalCity) {
//     return `${country} has ${population} million people and it's capital city is ${capitalCity} `;
// }

// const describeUnitedStates = describeCountry('United States', 329, 'Washington D.C.');
// console.log(describeUnitedStates);
// const describeCanada = describeCountry('Canada', 37.6, 'Ottowa');
// console.log(describeCanada);
// const describeMexico = describeCountry('Mexico', 127.6, 'Mexico City');
// console.log(describeMexico);


// // LECTURE: Function Declarations vs. Expressions
// // 1. The world population is 7900 million people. Create a function declaration
// // called 'percentageOfWorld1' which receives a 'population' value, and
// // returns the percentage of the world population that the given population
// // represents. For example, China has 1441 million people, so it's about 18.2% of
// // the world population
// // 2. To calculate the percentage, divide the given 'population' value by 7900
// // and then multiply by 100
// // 3. Call 'percentageOfWorld1' for 3 populations of countries of your choice,
// // store the results into variables, and log them to the console
// // 4. Create a function expression which does the exact same thing, called
// // 'percentageOfWorld2', and also call it with 3 country populations (can be
// // the same populations)

// function percentageOfWorld1(population) {
//     return ((population / 7900) * 100).toFixed(2);
// }


// const percentageOfWord2 = function (population) {
//     return ((population / 7900) * 100).toFixed(2);
// }

// const usPop = percentageOfWorld1(329);
// const canPop = percentageOfWorld1(37.6);
// const mexPop = percentageOfWorld1(127);
// console.log(usPop, canPop, mexPop);

// // LECTURE: Arrow Functions
// // 1. Recreate the last assignment, but this time create an arrow function called
// // 'percentageOfWorld3'

// const percentageOfWorld3 = population => ((population / 7900) * 100).toFixed(2);
// const usPop1 = percentageOfWorld3(329);
// const canPop1 = percentageOfWorld3(37.6);
// const mexPop1 = percentageOfWorld3(127);
// console.log(usPop1, canPop1, mexPop1);

// // LECTURE: Functions Calling Other Functions
// // 1. Create a function called 'describePopulation'. Use the function type you
// // like the most. This function takes in two arguments: 'country' and
// // 'population', and returns a string like this: 'China has 1441 million people,
// // which is about 18.2% of the world.'
// // 2. To calculate the percentage, 'describePopulation' call the
// // 'percentageOfWorld1' you created earlier
// // 3. Call 'describePopulation' with data for 3 countries of your choice

// const describePopulation = function (country, population) {
//     const percentage = percentageOfWorld1(population);
//     return `${country} has ${population} million people, which is about ${percentage}% of the world's population.`
// }
// console.log(describePopulation('United States', 329));

// LECTURE: Introduction to Arrays
// 1. Create an array containing 4 population values of 4 countries of your choice.
// You may use the values you have been using previously. Store this array into a
// variable called 'populations'
// 2. Log to the console whether the array has 4 elements or not (true or false)
// 3. Create an array called 'percentages' containing the percentages of the
// world population for these 4 population values. Use the function
// 'percentageOfWorld1' that you created earlier to compute the 4
// percentage values

function percentageOfWorld1(population) {
    return ((population / 7900) * 100).toFixed(2);
}
const populations = [329, 127, 37.6, 67];
console.log(populations.length === 4);

const percentages = [
    percentageOfWorld1(populations[0]),
    percentageOfWorld1(populations[1]),
    percentageOfWorld1(populations[2]),
    percentageOfWorld1(populations[3])
];

console.log(percentages);


