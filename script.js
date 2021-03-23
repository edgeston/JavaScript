'use strict';
function calcAge(birthYear) { // Defined in the Global Scope
    const age = 2021 - birthYear;

    function printAge() {
        let output = `${firstName} is ${age} years old born in ${birthYear}` // Variable look up ascends
        console.log(output);


        if (birthYear >= 1981 && birthYear <= 1996) {
            //Creating new variable with same name as outer scopes variable 
            const firstName = 'Monique'; // must initalize before running string JS loos for Variable name within current scope
            const str = `Oh, and you're a millenial, ${firstName}`;
            console.log(str);

            function add(a, b) {
                return a + b;
            }
            console.log(add(3, 4)); //Code still runs outside the blockscope
            output = 'NEW OUTPUT'; //CRe-assigning outer scope's variable 
            console.log(output);
        }
        // console.log(str); //const and let variables are only available in the block scope
    }
    printAge();
    return age;
}

const firstName = 'Monikka'; // Global variable = Accessible Everywhere
calcAge(1993);
// console.log(age); // Reference Error: age is not defines globally
// printAge(); // function cannot definined globally
