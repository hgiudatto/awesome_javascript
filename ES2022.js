// * Class Private Instance Fields
class Counter {
  #i = 0; // public class field

  #print() {
    console.log(this.#i);
  }

  publicPrint() {
    this.#print();
  }
}

const c = new Counter();

c.publicPrint();

// * Relative Indexing Method.
const nums = [1, 2, 3, 4, 5];
console.log(nums.at(-1));

// * Object.hasOwn()
const someObject = {
  someProp: "something",
};
console.log(someObject.hasOwnProperty("someProp"));
console.log(Object.hasOwn(someObject, "someProp"));

// Array destructuring
let [p1, p2, p3] = ["Johnny", "Linda", "Martin"];
console.log(`Person_1: ${p1}, Person_2: ${p2}, Person_3: ${p3}`);

// Object Destructuring
const obj = { word: "datatypes", num: 0001, bool: true, bigint: 2.999999 };
const words = obj.word;
const boolean = obj.bool;
console.log(words);
console.log(boolean);

// Spread Operator
// Function rest parameter
const createStudent = (firstName, lastName, ...grades) => {
  const avgGrade = grades.reduce((acc, curr) => acc + curr, 0) / grades.length;
  return {
    firstName: firstName,
    lastName: lastName,
    grades: grades,
    avgGrade: avgGrade,
  };
};

const student = createStudent("Nick", "Anderson", 10, 12, 16);
console.log(`Student: `, student);

// Truthy / Falsy
let a = [] == true;
let b = [1] == true;
let d = [3] == true;
console.log(`a is: ${a}, b is: ${b}, c is: ${d}`);

// Access object properties
const user = {
  fname: "John",
  age: 28,
};
let nameInUser = "fname" in user;
let pCodeInUser = "postal_code" in user;
console.log(
  `user object has name property: ${nameInUser}, user object has postal_code property: ${pCodeInUser}`
);
