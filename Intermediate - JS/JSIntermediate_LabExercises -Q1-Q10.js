// ============================================================
// MODULE 3 LABS - JS INTERMEDIATE
// Exercises 1 - 10
// ============================================================


// ============================================================
// EXERCISE 1
// Capitalise the first character of each word
// ============================================================

function ucFirstLetters(str) {
    return str
        .split(' ')
        .map(word => {
            if (word.length === 0) {
                return word;
            }

            return word[0].toUpperCase() + word.slice(1);
        })
        .join(' ');
}

// Test Exercise 1
console.log("========== EXERCISE 1 ==========");

console.log(ucFirstLetters("los angeles"));
// Los Angeles

console.log(ucFirstLetters("hello world"));
// Hello World

console.log(ucFirstLetters("javascript is interesting"));
// Javascript Is Interesting

console.log(ucFirstLetters("the quick brown fox"));
// The Quick Brown Fox



// ============================================================
// EXERCISE 2
// Truncate a string
// ============================================================

// Part a - using if statement

function truncate(str, max) {

    if (str.length > max) {
        return str.slice(0, max) + "...";
    } else {
        return str;
    }
}


// Part b - using conditional operator

function truncateConditional(str, max) {

    return str.length > max
        ? str.slice(0, max) + "..."
        : str;
}


// Test Exercise 2
console.log("\n========== EXERCISE 2 ==========");

console.log(
    truncate(
        "This text will be truncated if it is too long",
        25
    )
);
// This text will be truncated...



console.log(
    truncate(
        "Hello World",
        25
    )
);
// Hello World



console.log(
    truncateConditional(
        "This text will be truncated if it is too long",
        25
    )
);
// This text will be truncated...



console.log(
    truncateConditional(
        "Short text",
        25
    )
);
// Short text



// ============================================================
// EXERCISE 3 - Animals Array
// ============================================================

const animals = ['Tiger', 'Giraffe'];

console.log("\n========== EXERCISE 3 ==========");

console.log("Original animals:");
console.log(animals);


// ------------------------------------------------------------
// 3a) Add 2 new values to the end
// ------------------------------------------------------------

animals.push('Elephant', 'Lion');

console.log("\n3a) Add 2 animals to the end:");
console.log(animals);


// ------------------------------------------------------------
// 3b) Add 2 new values to the beginning
// ------------------------------------------------------------

animals.unshift('Bear', 'Zebra');

console.log("\n3b) Add 2 animals to the beginning:");
console.log(animals);


// ------------------------------------------------------------
// 3c) Sort the values alphabetically
// ------------------------------------------------------------

animals.sort();

console.log("\n3c) Sort animals alphabetically:");
console.log(animals);


// ------------------------------------------------------------
// 3d) Replace the middle animal
// ------------------------------------------------------------

function replaceMiddleAnimal(newValue) {

    const middleIndex = Math.floor(animals.length / 2);

    animals[middleIndex] = newValue;
}

replaceMiddleAnimal('Kangaroo');

console.log("\n3d) Replace middle animal with Kangaroo:");
console.log(animals);


// ------------------------------------------------------------
// 3e) Find animals matching the beginning
// Case-insensitive
// ------------------------------------------------------------

function findMatchingAnimals(beginsWith) {

    const searchText = beginsWith.toLowerCase();

    return animals.filter(animal =>
        animal.toLowerCase().startsWith(searchText)
    );
}


// Test with different cases

console.log("\n3e) Animals beginning with 'K':");
console.log(findMatchingAnimals('K'));

console.log("\nAnimals beginning with 'T':");
console.log(findMatchingAnimals('t'));

console.log("\nAnimals beginning with 'Z':");
console.log(findMatchingAnimals('z'));


// ============================================================
// EXERCISE 4
// camelCase
// ============================================================

// ------------------------------------------------------------
// 4a) camelCase using a for...of loop and conditional operator
// ------------------------------------------------------------

function camelCase(cssProp) {

    let result = "";
    let upperCaseNext = false;

    for (const character of cssProp) {

        if (character === "-") {
            upperCaseNext = true;
        } else {

            result += upperCaseNext
                ? character.toUpperCase()
                : character;

            upperCaseNext = false;
        }
    }

    return result;
}


// ------------------------------------------------------------
// 4b) camelCase using a traditional for loop
// ------------------------------------------------------------

function camelCaseForLoop(cssProp) {

    let result = "";

    for (let i = 0; i < cssProp.length; i++) {

        if (cssProp[i] === "-") {

            if (i + 1 < cssProp.length) {
                result += cssProp[i + 1].toUpperCase();
                i++;
            }

        } else {
            result += cssProp[i];
        }
    }

    return result;
}


// ------------------------------------------------------------
// 4c) camelCase using for...of WITHOUT conditional operator
// ------------------------------------------------------------

function camelCaseNoConditional(cssProp) {

    let result = "";
    let upperCaseNext = false;

    for (const character of cssProp) {

        if (character === "-") {
            upperCaseNext = true;
            continue;
        }

        if (upperCaseNext) {
            result += character.toUpperCase();
            upperCaseNext = false;
        } else {
            result += character;
        }
    }

    return result;
}


// Test Exercise 4
console.log("\n========== EXERCISE 4 ==========");

console.log(camelCase('margin-left'));
// marginLeft

console.log(camelCase('background-image'));
// backgroundImage

console.log(camelCase('display'));
// display


console.log("\nUsing traditional for loop:");

console.log(camelCaseForLoop('margin-left'));
// marginLeft

console.log(camelCaseForLoop('border-top-left'));
// borderTopLeft


console.log("\nWithout conditional operator:");

console.log(camelCaseNoConditional('padding-left'));
// paddingLeft

console.log(camelCaseNoConditional('text-align'));
// textAlign



// ============================================================
// EXERCISE 5
// Decimal numbers and currency operations
// ============================================================

console.log("\n========== EXERCISE 5 ==========");


// ------------------------------------------------------------
// Original example from the exercise
// ------------------------------------------------------------

let twentyCents = 0.20;
let tenCents = 0.10;

console.log(
    `${twentyCents} + ${tenCents} = ${twentyCents + tenCents}`
);

// JavaScript may produce:
// 0.2 + 0.1 = 0.30000000000000004


// ------------------------------------------------------------
// toFixed() example
// ------------------------------------------------------------

let fixedTwenty = twentyCents.toFixed(2);
let fixedTen = tenCents.toFixed(2);

console.log("\nUsing toFixed():");

console.log(fixedTwenty);
console.log(fixedTen);

console.log(fixedTwenty + fixedTen);


// ------------------------------------------------------------
// Exercise 5a explanation
// ------------------------------------------------------------

console.log(
    "\n5a) toFixed() returns a string, not a number."
);

console.log(
    "Therefore fixedTwenty + fixedTen performs string concatenation."
);

console.log(
    "The result is '0.200.10' instead of 0.30."
);


// ------------------------------------------------------------
// Exercise 5b
// currencyAddition()
// ------------------------------------------------------------

function currencyAddition(float1, float2) {

    const factor = 100;

    const number1 = Math.round(float1 * factor);
    const number2 = Math.round(float2 * factor);

    return (number1 + number2) / factor;
}


// Test currencyAddition()

console.log("\n5b) currencyAddition:");

console.log(
    currencyAddition(0.1, 0.2)
);
// 0.3

console.log(
    currencyAddition(0.2, 0.1)
);
// 0.3

console.log(
    currencyAddition(10.50, 5.25)
);
// 15.75


// ------------------------------------------------------------
// Exercise 5c
// currencyOperation()
// Supports +, -, / and *
// ------------------------------------------------------------

function currencyOperation(float1, float2, operation) {

    const factor = 100;

    const number1 = Math.round(float1 * factor);
    const number2 = Math.round(float2 * factor);

    switch (operation) {

        case "+":

            return (number1 + number2) / factor;


        case "-":

            return (number1 - number2) / factor;


        case "*":

            return (number1 * number2) / (factor * factor);


        case "/":

            if (number2 === 0) {
                throw new Error("Cannot divide by zero.");
            }

            return number1 / number2;


        default:

            throw new Error(
                "Invalid operation. Use +, -, / or *."
            );
    }
}


// Test currencyOperation()

console.log("\n5c) currencyOperation:");

console.log(
    currencyOperation(0.1, 0.2, "+")
);
// 0.3

console.log(
    currencyOperation(10.50, 5.25, "+")
);
// 15.75

console.log(
    currencyOperation(10.50, 5.25, "-")
);
// 5.25

console.log(
    currencyOperation(10.50, 2, "*")
);
// 21

console.log(
    currencyOperation(10.50, 2, "/")
);
// 5.25


// ------------------------------------------------------------
// Required tests from the exercise
// ------------------------------------------------------------

console.log("\nRequired tests:");

console.log(
    0.3 == currencyAddition(0.1, 0.2)
);
// true

console.log(
    0.3 == currencyOperation(0.1, 0.2, '+')
);
// true


// ------------------------------------------------------------
// Exercise 5d - Extension
// Support 1 to 10 decimal places
// ------------------------------------------------------------

function currencyOperationExtended(
    float1,
    float2,
    operation,
    numDecimals = 2
) {

    if (
        !Number.isInteger(numDecimals) ||
        numDecimals < 1 ||
        numDecimals > 10
    ) {
        throw new Error(
            "numDecimals must be an integer between 1 and 10."
        );
    }

    const factor = 10 ** numDecimals;

    const number1 = Math.round(float1 * factor);
    const number2 = Math.round(float2 * factor);

    let result;

    switch (operation) {

        case "+":

            result = (number1 + number2) / factor;
            break;


        case "-":

            result = (number1 - number2) / factor;
            break;


        case "*":

            result =
                (number1 * number2) /
                (factor * factor);

            break;


        case "/":

            if (number2 === 0) {
                throw new Error("Cannot divide by zero.");
            }

            result = number1 / number2;
            break;


        default:

            throw new Error(
                "Invalid operation. Use +, -, / or *."
            );
    }

    return Number(result.toFixed(numDecimals));
}


// Test extension

console.log("\n5d) Extended currency operation:");

console.log(
    currencyOperationExtended(1.234, 2.345, "+", 3)
);

console.log(
    currencyOperationExtended(10.50, 2.25, "-", 2)
);

console.log(
    currencyOperationExtended(2.50, 4, "*", 2)
);

console.log(
    currencyOperationExtended(10, 4, "/", 2)
);



// ============================================================
// EXERCISE 6
// Remove duplicate values
// ============================================================

function unique(duplicatesArray) {

    return [...new Set(duplicatesArray)];
}


// Given colours array

const colours = [
    'red',
    'green',
    'blue',
    'yellow',
    'orange',
    'red',
    'blue',
    'yellow'
];


// Given testScores array

const testScores = [
    55,
    84,
    97,
    63,
    55,
    32,
    84,
    91,
    55,
    43
];


// Our own array

const myArray = [
    'apple',
    'banana',
    'apple',
    'orange',
    'banana',
    'grape'
];


// Test Exercise 6

console.log("\n========== EXERCISE 6 ==========");

console.log(unique(colours));
// [ 'red', 'green', 'blue', 'yellow', 'orange' ]

console.log(unique(testScores));
// [ 55, 84, 97, 63, 32, 91, 43 ]

console.log(unique(myArray));
// [ 'apple', 'banana', 'orange', 'grape' ]



// ============================================================
// EXERCISE 7
// Books - find, filter, map and forEach
// ============================================================

const books = [

    {
        id: 1,
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        year: 1925
    },

    {
        id: 2,
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        year: 1960
    },

    {
        id: 3,
        title: '1984',
        author: 'George Orwell',
        year: 1949
    },

    {
        id: 4,
        title: 'Brave New World',
        author: 'Aldous Huxley',
        year: 1932
    },

    {
        id: 5,
        title: 'The Catcher in the Rye',
        author: 'J.D. Salinger',
        year: 1951
    }

];


// ------------------------------------------------------------
// 7a) getBookTitle()
// Uses find()
// ------------------------------------------------------------

function getBookTitle(bookId) {

    const book = books.find(book => book.id === bookId);

    if (book) {
        return book.title;
    }

    return undefined;
}


// Test 7a

console.log("\n========== EXERCISE 7 ==========");

console.log("7a) Book title:");
console.log(getBookTitle(3));
// 1984



// ------------------------------------------------------------
// 7b) getOldBooks()
// Uses filter()
// ------------------------------------------------------------

function getOldBooks() {

    return books.filter(book => book.year < 1950);
}


// Test 7b

console.log("\n7b) Books written before 1950:");

console.log(getOldBooks());



// ------------------------------------------------------------
// 7c) addGenre()
// Uses map()
// ------------------------------------------------------------

function addGenre() {

    return books.map(book => {

        return {
            ...book,
            genre: 'classic'
        };

    });
}


// Test 7c

console.log("\n7c) Books with genre added:");

console.log(addGenre());



// ------------------------------------------------------------
// 7d) getTitles()
// Uses filter() and map()
// ------------------------------------------------------------

function getTitles(authorInitial) {

    return books

        .filter(book =>
            book.author
                .toLowerCase()
                .startsWith(authorInitial.toLowerCase())
        )

        .map(book => book.title);
}


// Test 7d

console.log(
    "\n7d) Books by authors beginning with 'G':"
);

console.log(getTitles('G'));
// [ '1984' ]


console.log(
    "\nBooks by authors beginning with 'H':"
);

console.log(getTitles('H'));
// [ 'To Kill a Mockingbird' ]



// ------------------------------------------------------------
// 7e) latestBook()
// Uses forEach() and find()
// ------------------------------------------------------------

function latestBook() {

    let latestYear = 0;

    // First use forEach() to find the latest year

    books.forEach(book => {

        if (book.year > latestYear) {
            latestYear = book.year;
        }

    });


    // Then use find() to return the book

    return books.find(book => book.year === latestYear);
}


// Test 7e

console.log("\n7e) Latest book:");

console.log(latestBook());



// ============================================================
// EXERCISE 8
// Map / Phone Book
// ============================================================

// Given phoneBookABC

const phoneBookABC = new Map();

phoneBookABC.set(
    'Annabelle',
    '0412312343'
);

phoneBookABC.set(
    'Barry',
    '0433221117'
);

phoneBookABC.set(
    'Caroline',
    '0455221182'
);


// ------------------------------------------------------------
// 8a) Create phoneBookDEF
// ------------------------------------------------------------

const phoneBookDEF = new Map();


// ------------------------------------------------------------
// 8b) Initialise phoneBookDEF by passing an array
// of key/value pairs
// ------------------------------------------------------------

const phoneBookDEFData = [

    ['David', '0466123456'],

    ['Elizabeth', '0477123456'],

    ['Frank', '0488123456']

];

const phoneBookDEF2 = new Map(phoneBookDEFData);


// Use the newly initialised Map
// so the requirement specifically uses an array
const phoneBookDEFFinal = phoneBookDEF2;


// ------------------------------------------------------------
// 8c) Update Caroline's phone number
// ------------------------------------------------------------

phoneBookABC.set(
    'Caroline',
    '0499887766'
);


// ------------------------------------------------------------
// 8d) printPhoneBook()
// ------------------------------------------------------------

function printPhoneBook(contacts) {

    contacts.forEach((phoneNumber, name) => {

        console.log(
            name + ": " + phoneNumber
        );

    });
}


// Test Exercise 8

console.log("\n========== EXERCISE 8 ==========");

console.log("\nABC Phone Book:");

printPhoneBook(phoneBookABC);


console.log("\nDEF Phone Book:");

printPhoneBook(phoneBookDEFFinal);


// ------------------------------------------------------------
// 8e) Combine both Maps
// ------------------------------------------------------------

const phoneBook = new Map([

    ...phoneBookABC,

    ...phoneBookDEFFinal

]);


// Test combined Map

console.log("\nCombined Phone Book:");

printPhoneBook(phoneBook);


// ------------------------------------------------------------
// 8f) Print full list of names
// ------------------------------------------------------------

console.log("\n8f) Full list of names:");

console.log(
    [...phoneBook.keys()]
);



// ============================================================
// EXERCISE 9
// Salaries
// ============================================================

let salaries = {

    "Timothy": 35000,

    "David": 25000,

    "Mary": 55000,

    "Christina": 75000,

    "James": 43000

};


// ------------------------------------------------------------
// 9a) sumSalaries()
// Calculate total salary
// ------------------------------------------------------------

function sumSalaries(salaries) {

    let total = 0;

    for (const salary of Object.values(salaries)) {

        total += salary;

    }

    return total;
}


// Test 9a

console.log("\n========== EXERCISE 9 ==========");

console.log(
    "Total salaries:",
    sumSalaries(salaries)
);

// 233000



// ------------------------------------------------------------
// 9b) topEarner()
// Find person with highest salary
// ------------------------------------------------------------

function topEarner(salaries) {

    let highestSalary = 0;

    let highestEarner = "";

    for (const [name, salary] of Object.entries(salaries)) {

        if (salary > highestSalary) {

            highestSalary = salary;

            highestEarner = name;

        }

    }

    return highestEarner;
}


// Test 9b

console.log(
    "Top earner:",
    topEarner(salaries)
);

// Christina


// ============================================================
// EXERCISE 10 - Date Object
// ============================================================

console.log("\n========== EXERCISE 10 ==========");

const today = new Date();


// Original code
console.log("\nCurrent time is " + today.toLocaleTimeString());

console.log(
    today.getHours() +
    " hours have passed so far today"
);


// ------------------------------------------------------------
// 10(a) Total number of minutes
// ------------------------------------------------------------

const totalMinutes =
    (today.getHours() * 60) +
    today.getMinutes();

console.log(
    "10(a) " +
    totalMinutes +
    " minutes have passed so far today"
);


// ------------------------------------------------------------
// 10(b) Total number of seconds
// ------------------------------------------------------------

const totalSeconds =
    (today.getHours() * 60 * 60) +
    (today.getMinutes() * 60) +
    today.getSeconds();

console.log(
    "10(b) " +
    totalSeconds +
    " seconds have passed so far today"
);


// ------------------------------------------------------------
// 10(c) Calculate your age
// ------------------------------------------------------------

// CHANGE THIS TO YOUR ACTUAL DATE OF BIRTH
const dateOfBirth = new Date("2000-01-01");


function calculateAge(dateOfBirth, today) {

    let years =
        today.getFullYear() -
        dateOfBirth.getFullYear();

    let months =
        today.getMonth() -
        dateOfBirth.getMonth();

    let days =
        today.getDate() -
        dateOfBirth.getDate();


    if (days < 0) {

        months--;

        const daysInPreviousMonth =
            new Date(
                today.getFullYear(),
                today.getMonth(),
                0
            ).getDate();

        days += daysInPreviousMonth;
    }


    if (months < 0) {

        years--;
        months += 12;
    }


    return {
        years: years,
        months: months,
        days: days
    };
}


const age = calculateAge(dateOfBirth, today);

console.log(
    `10(c) I am ${age.years} years, ` +
    `${age.months} months and ` +
    `${age.days} days old`
);


// ------------------------------------------------------------
// 10(d) daysInBetween()
// ------------------------------------------------------------

function daysInBetween(date1, date2) {

    const firstDate = new Date(date1);
    const secondDate = new Date(date2);

    const difference =
        Math.abs(secondDate - firstDate);

    const millisecondsPerDay =
        1000 * 60 * 60 * 24;

    return Math.floor(
        difference / millisecondsPerDay
    );
}


// Test 10(d)

console.log(
    "10(d) Days between 1 January 2025 and 10 January 2025:",
    daysInBetween("2025-01-01", "2025-01-10")
);

console.log(
    "10(d) Days between 10 January 2025 and 10 February 2025:",
    daysInBetween("2025-01-10", "2025-02-10")
);