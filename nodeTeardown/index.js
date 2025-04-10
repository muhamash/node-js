/*
 * Title: Basic Node app example
 * Description: Simple node application that print random quotes per second interval.
 * Author: Sumit Saha ( Learn with Sumit )
 * Date: 11/09/19
 *
 */

// Dependencies
const mathLibrary = require('./lib/math');
const quotesLibrary = require('./lib/quotes');

// App object - Module scaffolding
const app = {};
// console.log( app );

// Configuration
app.config = {
    timeBetweenQuotes: 1000,
};

// Utility function to shuffle an array
// app.shuffleArray = function (array) {
//     for (let i = array.length - 1; i > 0; i--) {
//         const j = mathLibrary.getRandomNumber(1, i + 1) - 1;
//         [array[i], array[j]] = [array[j], array[i]];
//     }
//     return array;
// };

// Function that prints a random quote
app.printAQuote = function printAQuote() {
    // Get all the quotes
    const allQuotes = quotesLibrary.allQuotes();

    // Get the length of the quotes
    const numberOfQuotes = allQuotes.length;

    // Pick a random number between 1 and the number of quotes
    const randomNumber = mathLibrary.getRandomNumber(1, numberOfQuotes);

    // Get the quote at that position in the array (minus one)
    const selectedQuote = allQuotes[randomNumber - 1];

    // Print the quote to the console
    console.log(selectedQuote);
};

// Function that loops indefinitely, calling the printAQuote function as it goes
// app.indefiniteLoop = function indefiniteLoop() {
//     // Create the interval, using the config variable defined above
//     setInterval(app.printAQuote, app.config.timeBetweenQuotes);
// };

app.finiteLoop = function finiteLoop() {
    const allQuotes = quotesLibrary.allQuotes();
    let index = 0;

    const interval = setInterval(() => {
        console.log(allQuotes[index]);
        index++;

        if (index >= allQuotes.length) {
            clearInterval(interval);
            console.log('✨ All quotes printed. Thank you!');
        }
    }, app.config.timeBetweenQuotes);
};

// Start
console.log('🟢 Starting finite quote loop...');
app.finiteLoop();

// Invoke the loop
console.log(app,"test console!!")
// app.indefiniteLoop();