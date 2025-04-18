

// Dependencies
const fs = require('fs');

// Quotes object - Module scaffolding
const quotes = {};
// console.log(quotes, fs, 'quotes file')

// Get all the quotes and return them to the user
quotes.allQuotes = function allQuotes() {
    // Read the text file containing the quotes
    const fileContents = fs.readFileSync(`${__dirname}/quotes.txt`, 'utf8');

    // Turn the string into an array
    const arrayOfQuotes = fileContents.split( /\r?\n/ );
    // console.log(fileContents, arrayOfQuotes)

    // Return the array
    return arrayOfQuotes;
};

// Export the library
module.exports = quotes;