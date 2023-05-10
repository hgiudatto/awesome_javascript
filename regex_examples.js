// https://regexr.com/
// https://www.freecodecamp.org/news/regular-expressions-for-beginners/

const myRegexp = /\d{10}/;
const digits = "1234567890";
myRegexp.test(digits)
  ? console.log(`There are ten digits.`)
  : console.log(`There are not ten digits.`);

const regexPattern = /^[(\w\d\W)+]+@[\w+]+\.[\w+]+$/i;
console.log(regexPattern.test("abcdef123@gmailcom"));
console.log(regexPattern.test("abcdef123gmail."));
console.log(regexPattern.test("abcdef123@gmail.com"));
