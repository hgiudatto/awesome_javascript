// Arrays
const myArray = [];

// Add elements to an array
myArray[0] = "Ettore";
myArray[1] = 1001;
myArray[2] = false;

// Refer to an array
console.log(myArray);

// length property
console.log(myArray.length);

// Last element in an array
console.log(myArray[myArray.length-1]);

console.log(myArray[1]);

myArray.push("school");

console.log(myArray);

// Deleting the last element of an array 
const lastItem = myArray.pop();

console.log(lastItem);

console.log(myArray);

// Modifying the front of an array
/* const newLength = myArray.unshift(42); */
const newLength = myArray.push(42);

console.log(myArray);

console.log(newLength);

// Removing the front of an array
const firstItem = myArray.shift();

console.log(firstItem);

console.log(myArray);

console.log(myArray[1]);

console.log(myArray[3]);

delete myArray[1];

console.log(myArray);

console.log(myArray[1]);

myArray.splice(1,1,false);

console.log(myArray);

myArray.splice(0,1);

console.log(myArray);

myArray.splice(1, 2, "Ettore", "Pizza");

console.log(myArray);

myArray.splice(1, 0, true);

console.log(myArray);

// Smart array Methods
const arraySmartMethods = ['A', 'B', 'C', 'D', 'E', 'F'];

const newArray = arraySmartMethods.slice(2);

console.log(newArray);

console.log(arraySmartMethods.slice(2, 5));

arraySmartMethods.reverse();

console.log(arraySmartMethods);

const newString = arraySmartMethods.join();

console.log(newString);

arraySmartMethods.reverse();

console.log(arraySmartMethods);

const joinParam = arraySmartMethods.join("-");

console.log(joinParam);

const joinParam1 = arraySmartMethods.join("|");

console.log(joinParam1);

const myArray1 = ["A", "B", "C", "D", "E", "F"];

const newJoinParam = myArray1.join();

const pipeSplitted = newJoinParam.split("|");

console.log(pipeSplitted);

// Old way: concat
const myArrayA = ["A", "B", "C"];
const myArrayB = ["D", "E", "F"];

const newStrArray = myArrayB.concat(myArrayA);

console.log(newStrArray);

// Newer way: Spred operator
const spreaded = [...myArrayA, ...myArrayB];

console.log(spreaded);
