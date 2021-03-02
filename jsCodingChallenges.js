// Coding Challenge #1
// Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).
// Your tasks:
// 1. StoreMark'sandJohn'smassandheightinvariables
// 2. CalculateboththeirBMIsusingtheformula(youcanevenimplementboth
// versions)
// 3. CreateaBooleanvariable'markHigherBMI'containinginformationabout
// whether Mark has a higher BMI than John.
// Test data:
// § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
// § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

let markWeight = 78; 
let markHeight = 1.69
let johnWeight = 92; 
let johnHeight = 1.95

markBMI = markWeight / (markHeight ** 2); 
johnBMI = johnWeight / (johnHeight ** johnHeight);

console.log(markBMI, johnBMI);

markHigherBMI = markBMI > johnBMI; 
console.log(markHigherBMI); // true

markWeight = 95;
markHeight = 1.88; 
johnWeight = 85; 
johnHeight = 1.76

markBMI = markWeight / (markHeight ** 2); 
johnBMI = johnWeight / (johnHeight ** johnHeight);

console.log(markBMI, johnBMI);

markHigherBMI = markBMI > johnBMI; 
console.log(markHigherBMI); //false

// Coding Challenge #2
// Use the BMI example from Challenge #1, and the code you already wrote, and improve it.
// Your tasks:
// 1. Printaniceoutputtotheconsole,sayingwhohasthehigherBMI.Themessage is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. UseatemplateliteraltoincludetheBMIvaluesintheoutputs.Example:"Mark's BMI (28.3) is higher than John's (23.9)!"
// Hint: Use an if/else statement 😉 GOOD LUCK 😀

markBMI.toFixed(2);
johnBMI.toFixed(2);

if (markBMI > johnBMI) {
    console.log(`Mark's BMI (${markBMI.toFixed(2)}) is higher than Johns (${johnBMI.toFixed(2)})! Mark is the heaviest!`);
} else {
    console.log(`John's BMI (${johnBMI.toFixed(2)}) is higher than Marks (${markBMI.toFixed(2)})! John is the heaviest!`);
}