// ============================================================
// MODULE 3 LABS
// JS FUNDAMENTALS
// ============================================================


// ============================================================
// EXERCISE 1 - JavaScript Expressions
// ============================================================

console.log("\n\n========================================");
console.log("EXERCISE 1 - JavaScript Expressions");
console.log("========================================\n");

// The answers are tested using console.log().

console.log('"" + 1 + 0 =', "" + 1 + 0);
// Result: "10"

console.log('"" - 1 + 0 =', "" - 1 + 0);
// Result: -1

console.log("true + false =", true + false);
// Result: 1

console.log("!true =", !true);
// Result: false

console.log('6 / "3" =', 6 / "3");
// Result: 2

console.log('"2" * "3" =', "2" * "3");
// Result: 6

console.log('4 + 5 + "px" =', 4 + 5 + "px");
// Result: "9px"

console.log('"$" + 4 + 5 =', "$" + 4 + 5);
// Result: "$45"

console.log('"4" - 2 =', "4" - 2);
// Result: 2

console.log('"4px" - 2 =', "4px" - 2);
// Result: NaN

console.log('"  -9  " + 5 =', "  -9  " + 5);
// Result: "  -9  5"

console.log('"  -9  " - 5 =', "  -9  " - 5);
// Result: -14

console.log("null + 1 =", null + 1);
// Result: 1

console.log("undefined + 1 =", undefined + 1);
// Result: NaN

console.log("undefined == null =", undefined == null);
// Result: true

console.log("undefined === null =", undefined === null);
// Result: false

console.log('" \\t \\n" - 2 =', " \t \n" - 2);
// Result: -2



// ============================================================
// EXERCISE 2 - Strings, Numbers and Comparison
// ============================================================

console.log("\n\n========================================");
console.log("EXERCISE 2 - Strings, Numbers and Comparison");
console.log("========================================\n");

let three = "3";
let four = "4";
let thirty = "30";

// Original expressions

let addition = three + four;
let multiplication = three * four;
let division = three / four;
let subtraction = three - four;

let lessThan1 = three < four;
let lessThan2 = thirty < four;

// Display original results

console.log("addition:", addition);
console.log("multiplication:", multiplication);
console.log("division:", division);
console.log("subtraction:", subtraction);
console.log("lessThan1:", lessThan1);
console.log("lessThan2:", lessThan2);

// Explanation:
//
// addition gives "34" instead of 7 because both three and four
// are strings. The + operator joins the two strings together.
//
// lessThan2 gives true because thirty and four are strings.
// JavaScript compares the strings lexicographically rather
// than comparing them as numerical values.
//
// Multiplication, division and subtraction convert the numeric
// strings into numbers automatically.


// Fix the addition

let fixedAddition = Number(three) + Number(four);

console.log("fixed addition:", fixedAddition);
// Result: 7


// Fix lessThan2

let fixedLessThan2 = Number(thirty) < Number(four);

console.log("fixed lessThan2:", fixedLessThan2);
// Result: false


// Final corrected results

let correctAddition = Number(three) + Number(four);
let correctMultiplication = Number(three) * Number(four);
let correctDivision = Number(three) / Number(four);
let correctSubtraction = Number(three) - Number(four);

let correctLessThan1 = Number(three) < Number(four);
let correctLessThan2 = Number(thirty) < Number(four);

console.log("Correct addition:", correctAddition);
console.log("Correct multiplication:", correctMultiplication);
console.log("Correct division:", correctDivision);
console.log("Correct subtraction:", correctSubtraction);
console.log("Correct lessThan1:", correctLessThan1);
console.log("Correct lessThan2:", correctLessThan2);



// ============================================================
// EXERCISE 3 - Truthy and Falsy Values
// ============================================================

console.log("\n\n========================================");
console.log("EXERCISE 3 - Truthy and Falsy Values");
console.log("========================================\n");

// 0 is falsy, so this does not print.
if (0) console.log("#1 zero is true");

// "0" is a non-empty string, so it is truthy.
if ("0") console.log("#2 zero is true");

// null is falsy, so this does not print.
if (null) console.log("null is true");

// -1 is a non-zero number, so it is truthy.
if (-1) console.log("negative is true");

// 1 is truthy, so it prints.
if (1) console.log("positive is true");

// The messages that print are:
// #2 zero is true
// negative is true
// positive is true



// ============================================================
// EXERCISE 4 - Ternary / Conditional Operator
// ============================================================

console.log("\n\n========================================");
console.log("EXERCISE 4 - Ternary / Conditional Operator");
console.log("========================================\n");

let a = 2;
let b = 3;

let result = `${a} + ${b} is `;

// The ternary operator has the form:
// condition ? valueIfTrue : valueIfFalse

result += (a + b < 10)
    ? "less than 10"
    : "greater than 10";

console.log(result);


// The += operator is shorthand for:
// result = result + value
//
// For example:
// result += "less than 10";
// is the same as:
// result = result + "less than 10";


// Test with different values

a = 5;
b = 4;

result = `${a} + ${b} is `;

result += (a + b < 10)
    ? "less than 10"
    : "greater than 10";

console.log(result);


a = 6;
b = 5;

result = `${a} + ${b} is `;

result += (a + b < 10)
    ? "less than 10"
    : "greater than 10";

console.log(result);



// ============================================================
// EXERCISE 5 - Function Expression and Arrow Function
// ============================================================

console.log("\n\n========================================");
console.log("EXERCISE 5 - Function Expression and Arrow Function");
console.log("========================================\n");


// a) Function expression

function getGreeting(name) { 
    return 'Hello ' + name + '!'; 
} 

const getGreetingExpression = function(name) {
    return "Hello " + name + "!";
};

console.log(getGreetingExpression("John"));


// b) Arrow function =>

const getGreetingArrow = (name) => {
    return "Hello " + name + "!";
};

console.log(getGreetingArrow("John"));

// Both versions produce the same result:
// Hello John!



// ============================================================
// EXERCISE 6 - Objects, Methods and Conditional Operator
// ============================================================

console.log("\n\n========================================");
console.log("EXERCISE 6 - Objects, Methods and Conditional Operator");
console.log("========================================\n");

const westley = {
    name: "Westley",
    numFingers: 5
};

const rugen = {
    name: "Count Rugen",
    numFingers: 6
};


const inigo = {

    // a) Added lastName property

    firstName: "Inigo",
    lastName: "Montoya",

    greeting(person) {

        let greeting =
            `Hello ${person.name}, my name is ${this.firstName} ${this.lastName}. `;

        console.log(greeting + this.getCatchPhrase(person));
    },


// b) Check if the person has 6 fingers and return
// Inigo's famous catch phrase.
// c) Use arrow function syntax and a conditional operator.

    getCatchPhrase: (person) =>
        person.numFingers === 6
            ? "Hello. My name is Inigo Montoya. You killed my father. Prepare to die."
            : "Nice to meet you."
};


// Test with Westley

inigo.greeting(westley);


// Test with Count Rugen

inigo.greeting(rugen);



// ============================================================
// EXERCISE 7 - Basketball Game and Method Chaining
// ============================================================

console.log("\n\n========================================");
console.log("EXERCISE 7 - Basketball Game and Method Chaining");
console.log("========================================\n");

const basketballGame = {

    score: 0,

    // c) Foul counter

    fouls: 0,


    // Add one point

    freeThrow() {
        this.score++;
        return this;
    },


    // Add two points

    basket() {
        this.score += 2;
        return this;
    },


    // Add three points

    threePointer() {
        this.score += 3;
        return this;
    },


    // c) Increment foul count

    foul() {
        this.fouls++;
        return this;
    },


    // Print halftime score and foul count

    halfTime() {

        console.log(
            "Halftime score is " +
            this.score + " with " + this.fouls + " fouls"
        );

        return this;
    },


    // b) Print full-time final score

    fullTime() {

        console.log(
            "Full time score is " +
            this.score +
            " with " +
            this.fouls +
            " fouls"
        );

        return this;
    }
};


// d) Test method chaining

basketballGame
    .basket()
    .freeThrow()
    .freeThrow()
    .basket()
    .threePointer()
    .halfTime();


// Continue the same game

basketballGame
    .foul()
    .foul()
    .threePointer()
    .freeThrow()
    .fullTime();



// ============================================================
// EXERCISE 8 - for...in Loop
// ============================================================

console.log("\n\n========================================");
console.log("EXERCISE 8 - for...in Loop");
console.log("========================================\n");

const sydney = {
    name: "Sydney",
    population: 5_121_000,
    state: "NSW",
    founded: "26 January 1788",
    timezone: "Australia/Sydney"
};


// a) Function that takes an object and prints
// each property and its value.

function printCityProperties(city) {

    for (let property in city) {
        console.log(property + ": " + city[property]);
    }
}


// Test using Sydney

console.log("Sydney:");
printCityProperties(sydney);


// b) Create another city object

const london = {
    name: "London",
    population: 8_900_000,
    country: "United Kingdom",
    founded: "AD 43",
    timezone: "Europe/London"
};


// Test using the new city

console.log("\nLondon:");
printCityProperties(london);



// ============================================================
// EXERCISE 9 - Objects and Arrays by Reference
// ============================================================

console.log("\n\n========================================");
console.log("EXERCISE 9 - Objects and Arrays by Reference");
console.log("========================================\n");

let teamSports = [
    "Hockey",
    "Cricket",
    "Volleyball"
];

let dog1 = "Bingo";

let cat1 = {
    name: "Fluffy",
    breed: "Siberian"
};


// a) Create moreSports equal to teamSports

let moreSports = teamSports;

moreSports.push("Football");
moreSports.unshift("Basketball");


// d) Print the original and copied values

console.log("teamSports:", teamSports);
console.log("moreSports:", moreSports);


// b) Create dog2 equal to dog1

let dog2 = dog1;

dog2 = "Charlie";

console.log("dog1:", dog1);
console.log("dog2:", dog2);


// c) Create cat2 equal to cat1

let cat2 = cat1;

cat2.name = "Garfield";

console.log("cat1:", cat1);
console.log("cat2:", cat2);


// Explanation:
//
// teamSports changes because moreSports and teamSports
// refer to the same array.
//
// cat1 changes because cat2 and cat1 refer to the same object.
//
// dog1 does not change because strings are primitive values.
// Changing dog2 does not change dog1.


// e) Create independent copies

teamSports = [
    "Hockey",
    "Cricket",
    "Volleyball"
];

cat1 = {
    name: "Fluffy",
    breed: "Siberian"
};


// Use the spread operator to create independent copies

moreSports = [...teamSports];

cat2 = { ...cat1 };


// Make changes to the copies

moreSports.push("Football");
moreSports.unshift("Basketball");

cat2.name = "Garfield";


// Print the originals and independent copies

console.log("Original teamSports:", teamSports);
console.log("Independent moreSports:", moreSports);

console.log("Original cat1:", cat1);
console.log("Independent cat2:", cat2);



// ============================================================
// EXERCISE 10 - Constructor Function and Class
// ============================================================

console.log("\n\n========================================");
console.log("EXERCISE 10 - Constructor Function and Class");
console.log("========================================\n");


// Original constructor function

function Person(name, age) {

    this.name = name;
    this.age = age;
    this.human = true;
}


// e) Add canDrive method to the constructor function

Person.prototype.canDrive = function() {

    // Using 18 as the driving-age threshold

    return this.age >= 18;
};


// a) Create first person

const person1 = new Person("John", 25);


// b) Create second person

const person2 = new Person("Sarah", 17);


// c) Print properties of each person

console.log("Person 1:", person1);
console.log("Person 1 can drive:", person1.canDrive());

console.log("Person 2:", person2);
console.log("Person 2 can drive:", person2.canDrive());


// ============================================================
// d) Rewrite constructor function as a class
// ============================================================

class PersonClass {

    constructor(name, age) {

        this.name = name;
        this.age = age;
        this.human = true;
    }


    // e) Add canDrive method to the class

    canDrive() {

        // Using 18 as the driving-age threshold

        return this.age >= 18;
    }
}


// Create a third person using PersonClass

const person3 = new PersonClass("Michael", 30);


// Print third person

console.log("Person 3:", person3);
console.log("Person 3 can drive:", person3.canDrive());


// ============================================================
// END OF MODULE 3 - JS FUNDAMENTALS
// ============================================================

console.log("\n\n========================================");
console.log("ALL 10 EXERCISES COMPLETED SUCCESSFULLY");
console.log("========================================\n");