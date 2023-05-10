// * Accessing properties of JSON Objects
const anObj = { st: "Ok", nm: "Device", mr: "01", pt: "1st" };
console.log(`Name: ${anObj.nm}`);

// Dynamically
let key = "pt";
let position = anObj[key];
console.log(`Position: ${position}`);

// If you don't already have it as an object, you'll need to convert it.
let response = '{"result":true,"count":1}';
let resp2JSON = JSON.parse(response);
console.log(`result: ${resp2JSON.result}`);
console.log(`count: ${resp2JSON.count}`);

// Exercise
let response = '{"result":true,"count":1}';
let resp2JSON = JSON.parse(response);
console.log(resp2JSON);
// output: {result: true, count: 1}
console.log(resp2JSON.result);
// output: true
console.log(JSON.parse(response).count);
// output: 1
