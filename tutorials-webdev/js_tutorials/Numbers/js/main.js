// numbers

// an integer is a whole number
const myNumber = 42;

// A number with a deciml point is a float which
// references the "floating point"
const myFloat = 42.0;

const myString = "42";

console.log(myNumber);
console.log(myString);

console.log(myNumber === myFloat);
console.log(myNumber === myString);

console.log(myString + 3);

console.log(Number(myString) + 3);
console.log(Number(myString) === myNumber);
 
console.log(Number("Ettore"));
console.log(isNaN(Number("Ettore")));
console.log(Number(true));
console.log(Number(false));

// Number Methods
// The Number.isInteger() method determines whether the passed value is an Integer.
console.log(Number.isInteger(myNumber));
console.log(Number.isInteger(myFloat));
console.log(Number.isInteger(myString));

// The Number.parseFloat() methodparses an rgument and returns a floating point
// number. If a number cannot be parsed from the argument, it returns NaN.
console.log(Number.parseFloat(myString));
console.log(Number.parseFloat(myFloat));
