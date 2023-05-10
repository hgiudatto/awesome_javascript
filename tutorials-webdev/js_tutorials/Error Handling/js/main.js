// JavaScript Errors and Error Handling
"use strict";

// Reference
/* variable = "Ettore";
console.log(variable); */

// Syntax
// Object..create();

// Type
/* const name = "Ettore";
name = "Joe"; */

const makeError = () => {
    let i = 1;
    while (i <= 5) {
        try {
            /* const name = "Ettore";
            name = "Joe"; */
            // throw new customError("This is a custom error!");
            if (i % 2 !== 0) {
                throw new Error("Odd number!");
            }
            console.log("Even number!");
        } catch (err) {
            // console.log(err);
            console.error(err.stack);
            // console.warn(err);
            // console.table(err);
        } finally {
            console.log("...finally");
            i++;
        }   
    }
};
makeError();

function customError (message) {
    this.message = message;
    this.name = "customError";
    this.stack = `${this.name}: ${this.message}`;
}
