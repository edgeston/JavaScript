/*LECTURE: Values and Variables
1. Declare variables called 'country', 'continent' and 'population' and
assign their values according to your own country (population in millions)
2. Log their values to the console*/

let country = 'United States';
// let continent = 'North America';
let population = 329000000;
// console.log(country, continent, population);

/*LECTURE: Data Types
1. Declare a variable called 'isIsland' and set its value according to your
country. The variable should hold a Boolean value. Also declare a variable
'language', but don't assign it any value yet
2. Log the types of 'isIsland', 'population', 'country' and 'language'
to the console */

// let isIsland = false; 
let language;

// console.log(typeof(isIsland));
console.log(typeof (population));
console.log(typeof (country));
console.log(typeof (language));

/* LECTURE: let, const and var
1. Setthevalueof'language'tothelanguagespokenwhereyoulive(some countries have multiple languages, but just choose one)
2. Thinkaboutwhichvariablesshouldbeconstvariables(whichvalueswillnever change, and which might change?). Then, change these variables to const.
3. Trytochangeoneofthechangedvariablesnow,andobservewhathappens */

language = 'English';
const continent = 'North America';
const isIsland = false;

// continent and isIsland variables changed color. 
//Also has to comment out all the initial declarations. 

console.log(language, continent, isIsland)


// LECTURE: Basic Operators
// 1. Ifyourcountrysplitinhalf,andeachhalfwouldcontainhalfthepopulation, then how many people would live in each half?
// 2. Increasethepopulationofyourcountryby1andlogtheresulttotheconsole
// 3. Finlandhasapopulationof6million.Doesyourcountryhavemorepeoplethan
// Finland?
// 4. Theaveragepopulationofacountryis33millionpeople.Doesyourcountry
// have less people than the average country?
// 5. Basedonthevariablesyoucreated,createanewvariable'description'
// which contains a string with this format: 'Portugal is in Europe, and its 11 million people speak portuguese'

halfOfPopulation = (population / 2);
console.log(halfOfPopulation + ' ' + 'people'); //164500000 people

// population++;
console.log(population); 329000001

let finlandPopulation = 6000000;
console.log(population > finlandPopulation); //true

let averagePopulation = 33000000;
console.log(population >= averagePopulation);

console.log(country + " is in " + continent + ", and it's " + population + " speak " + language + ".");


// LECTURE: Strings and Template Literals
// 1. Recreatethe'description'variablefromthelastassignment,thistime using the template literal syntax
const description = `The ${country} is in ${continent}, and it's ${population} people speak ${language}.`;
console.log(description);

// LECTURE: Type Conversion and Coercion
// 1. Predict the result of these 5 operations without executing them:
// '9' - '5';
// '19' - '13' + '17';
// '19' - '13' + 17;
// '123' < 57;
// 5 + 6 + '4' + 9 - 4 - 2;
// 2. Execute the operations to check if you were right

console.log('9' - '5'); //4
console.log('19' - '13' + '17'); //617
console.log('19' - '13' + 17); //23
console.log('123' < 57); //false
console.log(5 + 6 + '4' + 9 - 4 - 2); //1143

// LECTURE: Equality Operators: == vs. ===
// 1. Declare a variable 'numNeighbours' based on a prompt input like this:
// prompt('How many neighbour countries does your country
// have?');
// 2. If there is only 1 neighbour, log to the console 'Only 1 border!' (use loose equality
// == for now)
// 3. Use an else-if block to log 'More than 1 border' in case 'numNeighbours'
// is greater than 1
// 4. Use an else block to log 'No borders' (this block will be executed when
// 'numNeighbours' is 0 or any other value)
// 5. Test the code with different values of 'numNeighbours', including 1 and 0.
// 6. Change == to ===, and test the code again, with the same values of
// 'numNeighbours'. Notice what happens when there is exactly 1 border! Why
// is this happening?
// 7. Finally, convert 'numNeighbours' to a number, and watch what happens now
// when you input 1
// 8. Reflect on why we should use the === operator and type conversion in this
// situation

const numNeighbours = prompt(`How many neighboring countries does the ${country} have?`);
console.log(typeof (numNeighbours));

if (numNeighbours != 1) {
    console.log(`One border needed`)
} else if (numNeighbours > 1) {
    console.log(`${numNeighbours} borders needed`)
} else {
    console.log(`No borders needed`)
}
//No Type Coercion performed on the Strict Equality/ InEquality Operator