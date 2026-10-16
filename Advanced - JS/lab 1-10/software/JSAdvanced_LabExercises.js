// ============================================================
// MODULE 3 LABS - JS ADVANCED
// Exercises 1 - 10
// ============================================================


// ============================================================
// EXERCISE 1: Counter Function
// ============================================================

function exercise1() {

    console.log("\n==========================================");
    console.log("Exercise 1: Counter Function");
    console.log("==========================================");

    function makeCounter(startFrom = 0, incrementBy = 1) {

        let currentCount = startFrom;

        return function() {

            currentCount += incrementBy;

            console.log(currentCount);

            return currentCount;
        };
    }


    // --------------------------------------------------------
    // Part (a): Independent Counters
    // --------------------------------------------------------

    console.log("\nPart (a): Independent Counters");

    let counter1 = makeCounter();
    let counter2 = makeCounter();

    console.log("Counter 1:");

    counter1();
    counter1();

    console.log("Counter 2:");

    counter2();
    counter2();

    console.log("Counter 1 again:");

    counter1();


    // --------------------------------------------------------
    // Part (b): Starting Value
    // --------------------------------------------------------

    console.log("\nPart (b): Counter Starting From 10");

    let counter3 = makeCounter(10);

    counter3();
    counter3();
    counter3();


    // --------------------------------------------------------
    // Part (c): Increment Value
    // --------------------------------------------------------

    console.log(
        "\nPart (c): Counter Starting From 5, Incrementing By 2"
    );

    let counter4 = makeCounter(5, 2);

    counter4();
    counter4();
    counter4();
    counter4();


    console.log("\n==========================================");
    console.log("Exercise 1 Completed");
    console.log("==========================================");
}


// ============================================================
// EXERCISE 2: Delayed Messages
// ============================================================

function exercise2() {

    return new Promise((resolve) => {

        console.log("\n==========================================");
        console.log("Exercise 2: Delayed Messages");
        console.log("==========================================");


        // ----------------------------------------------------
        // Part (a) and (b): Arrow Function
        // ----------------------------------------------------

        const delayMsg = (msg) => {

            console.log(
                `This message will be printed after a delay: ${msg}`
            );

        };


        console.log("\nPart (a): Execution Order");


        setTimeout(
            delayMsg,
            100,
            "#1: Delayed by 100ms"
        );


        setTimeout(
            delayMsg,
            20,
            "#2: Delayed by 20ms"
        );


        setTimeout(
            delayMsg,
            0,
            "#3: Delayed by 0ms"
        );


        delayMsg("#4: Not delayed at all");


        // ----------------------------------------------------
        // Part (c): Fifth test with long delay
        // ----------------------------------------------------

        console.log("\nPart (c): Adding a long delay");


        const fifthTest = setTimeout(
            delayMsg,
            11000,
            "#5: Delayed by 11000ms"
        );


        // ----------------------------------------------------
        // Part (d): Cancel fifth test
        // ----------------------------------------------------

        clearTimeout(fifthTest);


        console.log(
            "Part (d): Fifth test cancelled using clearTimeout"
        );


        // Wait for all short timers

        setTimeout(() => {

            console.log("\n==========================================");
            console.log("Exercise 2 Completed");
            console.log("==========================================");

            resolve();

        }, 150);

    });
}


// ============================================================
// EXERCISE 3: Debouncing
// ============================================================

function exercise3() {

    return new Promise((resolve) => {

        console.log("\n==========================================");
        console.log("Exercise 3: Debouncing");
        console.log("==========================================");


        // ----------------------------------------------------
        // Part (a) and (b): debounce()
        // ----------------------------------------------------

        function debounce(func, ms = 1000) {

            let timeout;


            return function(...args) {

                clearTimeout(timeout);


                timeout = setTimeout(() => {

                    func(...args);

                }, ms);

            };

        }


        // ----------------------------------------------------
        // Part (c): Function with message
        // ----------------------------------------------------

        function printMe(msg) {

            console.log(
                `Printing debounced message: ${msg}`
            );

        }


        printMe = debounce(printMe);


        console.log(
            "\nTesting debounce with 1000ms delay..."
        );


        // Three calls within 300ms

        setTimeout(() => {

            printMe("#1: First call");

        }, 100);


        setTimeout(() => {

            printMe("#2: Second call");

        }, 200);


        setTimeout(() => {

            printMe("#3: Last call");

        }, 300);


        // Wait for final debounced call

        setTimeout(() => {

            console.log("\n==========================================");
            console.log("Exercise 3 Completed");
            console.log("==========================================");

            resolve();

        }, 1400);

    });
}


// ============================================================
// EXERCISE 4: Fibonacci Sequence
// ============================================================

function exercise4() {

    return new Promise((resolve) => {

        console.log("\n==========================================");
        console.log("Exercise 4: Fibonacci Sequence");
        console.log("==========================================");


        // ----------------------------------------------------
        // Part (a) and (c): setInterval
        // ----------------------------------------------------

        function printFibonacci(limit, finished) {

            let count = 0;

            let first = 1;
            let second = 1;


            console.log(
                "\nPart (a) & (c): Fibonacci using setInterval"
            );


            const interval = setInterval(() => {

                console.log(first);

                count++;


                if (count >= limit) {

                    clearInterval(interval);

                    console.log(
                        "setInterval Fibonacci completed."
                    );

                    finished();

                    return;
                }


                let next = first + second;

                first = second;
                second = next;

            }, 1000);

        }


        // ----------------------------------------------------
        // Part (b): Nested setTimeout
        // ----------------------------------------------------

        function printFibonacciTimeouts(limit, finished) {

            let count = 0;

            let first = 1;
            let second = 1;


            console.log(
                "\nPart (b): Fibonacci using nested setTimeout"
            );


            function printNext() {

                console.log(first);

                count++;


                if (count >= limit) {

                    console.log(
                        "setTimeout Fibonacci completed."
                    );

                    finished();

                    return;
                }


                let next = first + second;

                first = second;
                second = next;


                setTimeout(
                    printNext,
                    1000
                );

            }


            printNext();

        }


        // Run setInterval version

        printFibonacci(5, () => {


            // Run setTimeout version after
            // setInterval has completed

            printFibonacciTimeouts(5, () => {

                console.log(
                    "\n=========================================="
                );

                console.log(
                    "Exercise 4 Completed"
                );

                console.log(
                    "=========================================="
                );

                resolve();

            });

        });

    });
}


// ============================================================
// EXERCISE 5: this, Object Cloning and bind()
// ============================================================

function exercise5() {

    return new Promise((resolve) => {

        console.log("\n==========================================");
        console.log("Exercise 5: this, Object Cloning and bind()");
        console.log("==========================================");


        // ----------------------------------------------------
        // Original car object
        // ----------------------------------------------------

        let car = {

            make: "Porsche",

            model: "911",

            year: 1964,


            description() {

                console.log(
                    `This car is a ${this.make} ${this.model} from ${this.year}`
                );

            }

        };


        // ----------------------------------------------------
        // Original method
        // ----------------------------------------------------

        console.log("\nOriginal car:");

        car.description();


        // ----------------------------------------------------
        // Part (a): Wrapper function
        // ----------------------------------------------------

        console.log(
            "\nPart (a): setTimeout with wrapper function"
        );


        setTimeout(() => {

            car.description();

        }, 200);


        // ----------------------------------------------------
        // Part (b): Clone and change year
        // ----------------------------------------------------

        let updatedCar = {

            ...car,

            year: 2020

        };


        console.log(
            "\nPart (b): Cloned car with new year:"
        );

        updatedCar.description();


// ----------------------------------------------------
// Part (c): Check which values the delayed call uses
// ----------------------------------------------------

console.log("\nPart (c): Delayed description using original car:");

setTimeout(() => {
    car.description();
}, 400);

console.log("Expected delayed output: Porsche 911 from 1964");

        // ----------------------------------------------------
        // Part (d): bind()
        // ----------------------------------------------------

        const boundDescription =
            car.description.bind(car);


        console.log(
            "\nPart (d): Bound description:"
        );


        setTimeout(
            boundDescription,
            600
        );


        // ----------------------------------------------------
        // Part (e): Clone and change model
        // ----------------------------------------------------

        let modifiedCar = {

            ...car,

            model: "Cayenne"

        };


        console.log(
            "\nPart (e): Modified cloned car:"
        );


        modifiedCar.description();


        // Bound function still uses original car

        setTimeout(
            boundDescription,
            800
        );


        // Complete after all delayed calls

        setTimeout(() => {

            console.log("\n==========================================");
            console.log("Exercise 5 Completed");
            console.log("==========================================");

            resolve();

        }, 1000);

    });
}

// ============================================================
// EXERCISE 6: Function Prototype delay()
// ============================================================

function exercise6() {

    return new Promise((resolve) => {

        console.log("\n==========================================");
        console.log("Exercise 6: Function Prototype delay()");
        console.log("==========================================");

        // Parts (a) and (b): Add delay() to all functions
        Function.prototype.delay = function(ms) {

            const originalFunction = this;

            return function(...args) {

                const context = this;

                setTimeout(() => {
                    originalFunction.apply(context, args);
                }, ms);

            };
        };

        // Part (a): Test with two parameters
        function multiply(a, b) {
            console.log(`Result of multiplying ${a} × ${b} = ${a * b}`);
        }

        console.log("\nPart (a): Two parameters");
        multiply.delay(500)(5, 5);

        // Part (b): Test apply() with three parameters
        function multiplyThree(a, b, c) {
            console.log(
                `Result of multiplying ${a}, ${b} and ${c} = ${a * b * c}`
            );
        }

        console.log("\nPart (b): Using apply() with three parameters");
        multiplyThree.delay(500)(2, 3, 4);

        // Part (c): Test with four parameters
        function multiplyFour(a, b, c, d) {
            console.log(
                `Result of multiplying ${a}, ${b}, ${c} and ${d} = ${a * b * c * d}`
            );
        }

        console.log("\nPart (c): Four parameters");
        multiplyFour.delay(500)(2, 3, 4, 5);

        // Wait for delayed calls to complete
        setTimeout(() => {
            console.log("\n==========================================");
            console.log("Exercise 6 Completed");
            console.log("==========================================");
            resolve();
        }, 700);

    });
}


// ============================================================
// EXERCISE 7: DigitalClock Inheritance
// ============================================================

function exercise7() {

    return new Promise((resolve) => {

        console.log("\n==========================================");
        console.log("Exercise 7: DigitalClock Inheritance");
        console.log("==========================================");


        // ----------------------------------------------------
        // DigitalClock
        // ----------------------------------------------------

        class DigitalClock {

            constructor(prefix) {

                this.prefix = prefix;

            }


            display() {

                let date = new Date();


                let [hours, mins, secs] = [

                    date.getHours(),

                    date.getMinutes(),

                    date.getSeconds()

                ];


                if (hours < 10) {

                    hours = "0" + hours;

                }


                if (mins < 10) {

                    mins = "0" + mins;

                }


                if (secs < 10) {

                    secs = "0" + secs;

                }


                console.log(
                    `${this.prefix} ${hours}:${mins}:${secs}`
                );

            }


            stop() {

                clearInterval(this.timer);

            }


            start() {

                this.display();


                this.timer = setInterval(
                    () => this.display(),
                    1000
                );

            }

        }


        // ----------------------------------------------------
        // Part (a): PrecisionClock
        // ----------------------------------------------------

        class PrecisionClock extends DigitalClock {

            constructor(prefix, precision = 1000) {

                super(prefix);

                this.precision = precision;

            }


            start() {

                this.display();


                this.timer = setInterval(
                    () => this.display(),
                    this.precision
                );

            }

        }


        // ----------------------------------------------------
        // Part (b): AlarmClock
        // ----------------------------------------------------

        class AlarmClock extends DigitalClock {

            constructor(prefix, wakeupTime = "07:00") {

                super(prefix);

                this.wakeupTime = wakeupTime;

            }


            start() {

                this.display();


                this.timer = setInterval(() => {

                    this.display();


                    const now = new Date();


                    const hours = String(
                        now.getHours()
                    ).padStart(2, "0");


                    const minutes = String(
                        now.getMinutes()
                    ).padStart(2, "0");


                    const currentTime =
                        `${hours}:${minutes}`;


                    if (
                        currentTime === this.wakeupTime
                    ) {

                        console.log("Wake Up");

                        this.stop();

                    }

                }, 1000);

            }

        }


        // ----------------------------------------------------
        // Test PrecisionClock
        // ----------------------------------------------------

        console.log(
            "\nPart (a): PrecisionClock"
        );


        const precisionClock =
            new PrecisionClock(
                "precision clock:",
                500
            );


        precisionClock.start();


        // Stop PrecisionClock after 2 seconds

        setTimeout(() => {

            precisionClock.stop();


            console.log(
                "PrecisionClock stopped."
            );


            // ------------------------------------------------
            // Test AlarmClock
            // ------------------------------------------------

            console.log(
                "\nPart (b): AlarmClock"
            );


            console.log(
                "Default wakeup time: 07:00"
            );


            // For demonstration, use a time a few seconds
            // ahead of the current time so Wake Up can
            // actually be demonstrated.

            const now = new Date();

            const alarmTime =
                new Date(now.getTime() + 3000);


            const alarmHours =
                String(alarmTime.getHours())
                    .padStart(2, "0");


            const alarmMinutes =
                String(alarmTime.getMinutes())
                    .padStart(2, "0");


            const alarmClockTime =
                `${alarmHours}:${alarmMinutes}`;


            const alarmClock =
                new AlarmClock(
                    "alarm clock:",
                    alarmClockTime
                );


            alarmClock.start();


            // Stop demonstration after 5 seconds

            setTimeout(() => {

                alarmClock.stop();


                console.log(
                    "AlarmClock demonstration stopped."
                );


                console.log(
                    "\n=========================================="
                );


                console.log(
                    "Exercise 7 Completed"
                );


                console.log(
                    "=========================================="
                );


                resolve();

            }, 5000);

        }, 2000);

    });
}


// ============================================================
// EXERCISE 8: String Argument Validation
// ============================================================

function exercise8() {

    return new Promise((resolve) => {

        console.log("\n==========================================");
        console.log("Exercise 8: String Argument Validation");
        console.log("==========================================");


        // ----------------------------------------------------
        // Part (b): Rest operator
        // ----------------------------------------------------

        function orderItems(...itemNames) {

            return (
                `Order placed for: ${itemNames.join(", ")}`
            );

        }


        // ----------------------------------------------------
        // Part (a) and (c): Validation decorator
        // ----------------------------------------------------

        function validateStringArg(fn) {

            return function(...args) {


                for (const arg of args) {

                    if (typeof arg !== "string") {

                        throw new Error(
                            "All arguments must be strings."
                        );

                    }

                }


                return fn(...args);

            };

        }


        // Create decorated function

        const validatedOrderItem =
            validateStringArg(orderItems);


        // ----------------------------------------------------
        // Part (a): Valid string
        // ----------------------------------------------------

        console.log(
            "\nPart (a): Valid string argument"
        );


        try {

            console.log(
                validatedOrderItem("Apple Watch")
            );

        } catch (error) {

            console.log(
                `Error caught: ${error.message}`
            );

        }


        // ----------------------------------------------------
        // Part (b): Multiple strings
        // ----------------------------------------------------

        console.log(
            "\nPart (b): Multiple string arguments"
        );


        try {

            console.log(
                validatedOrderItem(
                    "Apple Watch",
                    "iPhone",
                    "AirPods"
                )
            );

        } catch (error) {

            console.log(
                `Error caught: ${error.message}`
            );

        }


        // ----------------------------------------------------
        // Part (c) and (d): Invalid argument
        // ----------------------------------------------------

        console.log(
            "\nPart (c) and (d): Invalid argument"
        );


        try {

            console.log(
                validatedOrderItem(123)
            );

        } catch (error) {

            console.log(
                `Error caught: ${error.message}`
            );

        }


        // Another invalid argument

        console.log(
            "\nTesting another invalid argument"
        );


        try {

            console.log(
                validatedOrderItem(
                    "Apple Watch",
                    123,
                    "AirPods"
                )
            );

        } catch (error) {

            console.log(
                `Error caught: ${error.message}`
            );

        }


        console.log("\n==========================================");
        console.log("Exercise 8 Completed");
        console.log("==========================================");

        resolve();

    });
}


// ============================================================
// EXERCISE 9: Promise-Based Random Delay
// ============================================================

function exercise9() {

    return new Promise((resolve) => {

        console.log("\n==========================================");
        console.log("Exercise 9: Promise-Based Random Delay");
        console.log("==========================================");


        // ----------------------------------------------------
        // randomDelay()
        // ----------------------------------------------------

        function randomDelay() {

            const delaySeconds =
                Math.floor(Math.random() * 20) + 1;


            const delayMilliseconds =
                delaySeconds * 1000;


            return new Promise((resolve, reject) => {

                console.log(
                    `Random delay selected: ${delaySeconds} seconds`
                );


                setTimeout(() => {

                    if (delaySeconds % 2 === 0) {

                        resolve(delaySeconds);

                    } else {

                        reject(delaySeconds);

                    }

                }, delayMilliseconds);

            });

        }


        // ----------------------------------------------------
        // Test promise
        // ----------------------------------------------------

        randomDelay()

            .then((delay) => {

                console.log(
                    `Success: The delay of ${delay} seconds was even.`
                );

            })


            .catch((delay) => {

                console.log(
                    `Failure: The delay of ${delay} seconds was odd.`
                );

            })


            .finally(() => {

                console.log("\n==========================================");
                console.log("Exercise 9 Completed");
                console.log("==========================================");

                resolve();

            });

    });
}


// ==========================================
// Exercise 10: Fetch and Async/Await
// ==========================================

async function exercise10() {

    console.log("\n==========================================");
    console.log("Exercise 10: Fetch and Async/Await");
    console.log("==========================================");

    // Original function provided in the assignment
    function fetchURLData(url) {
        return fetch(url).then(response => {
            if (response.status === 200) {
                return response.json();
            } else {
                throw new Error(
                    `Request failed with status ${response.status}`
                );
            }
        });
    }

    // Part (a): New async/await version
    async function fetchURLDataAsync(url) {
        const response = await fetch(url);

        if (response.status === 200) {
            return await response.json();
        } else {
            throw new Error(
                `Request failed with status ${response.status}`
            );
        }
    }

    // ------------------------------------------
    // Part (b): Test original function
    // ------------------------------------------

    console.log("\nPart (b): Original fetchURLData() - valid URL");

    try {
        const data = await fetchURLData(
            "https://jsonplaceholder.typicode.com/todos/1"
        );
        console.log(data);
    } catch (error) {
        console.error("Error caught:", error.message);
    }

    console.log("\nPart (b): Original fetchURLData() - invalid URL");

    try {
        const data = await fetchURLData(
            "https://jsonplaceholder.typicode.com/invalid-url"
        );
        console.log(data);
    } catch (error) {
        console.error("Error caught:", error.message);
    }

    // ------------------------------------------
    // Part (a) & (b): Test async/await version
    // ------------------------------------------

    console.log("\nPart (a): Async/await - valid URL");

    try {
        const data = await fetchURLDataAsync(
            "https://jsonplaceholder.typicode.com/todos/1"
        );
        console.log(data);
    } catch (error) {
        console.error("Error caught:", error.message);
    }

    console.log("\nPart (b): Async/await - invalid URL");

    try {
        const data = await fetchURLDataAsync(
            "https://jsonplaceholder.typicode.com/invalid-url"
        );
        console.log(data);
    } catch (error) {
        console.error("Error caught:", error.message);
    }

    // ------------------------------------------
    // Part (c): Promise.all()
    // ------------------------------------------

    console.log("\nPart (c): Multiple URLs using Promise.all()");

    const urls = [
        "https://jsonplaceholder.typicode.com/todos/1",
        "https://jsonplaceholder.typicode.com/todos/2",
        "https://jsonplaceholder.typicode.com/todos/3"
    ];

    try {
        const results = await Promise.all(
            urls.map(url => fetchURLDataAsync(url))
        );

        results.forEach((data, index) => {
            console.log(`URL ${index + 1}:`);
            console.log(data);
        });
    } catch (error) {
        console.error("Error caught:", error.message);
    }

    console.log("\n==========================================");
    console.log("Exercise 10 Completed");
    console.log("==========================================");
}


// ============================================================
// RUN EXERCISES 1 - 10 SEQUENTIALLY
// ============================================================

async function runExercises() {

    exercise1();

    await exercise2();

    await exercise3();

    await exercise4();

    await exercise5();

    await exercise6();

    await exercise7();

    await exercise8();

    await exercise9();

    await exercise10();

}


runExercises();