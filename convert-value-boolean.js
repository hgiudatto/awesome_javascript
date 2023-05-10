/**
 * Convert a Value to a Boolean
 *
 * Overview of truthy and falsy values and how to convert values
 * into booleans in JavaScript.
 *
Boolean(false);         // false
Boolean(undefined);     // false
Boolean(null);          // false
Boolean('');            // false
Boolean(NaN);           // false
Boolean(0);             // false
Boolean(-0);            // false
Boolean(0n);            // false

Boolean(true);          // true
Boolean('hi');          // true
Boolean(1);             // true
Boolean([]);            // true
Boolean([0]);           // true
Boolean([1]);           // true
Boolean({});            // true
Boolean({ a: 1 });      // true
 *
 */

const tldr =
  "There are two methods to cast a value to a boolean in JavaScript.";

console.log(!!tldr);
console.log(Boolean(tldr));

console.log(!!null);
console.log(Boolean(null));

console.log(!!undefined);
console.log(Boolean(undefined));

console.log(!!"");
console.log(Boolean(""));
