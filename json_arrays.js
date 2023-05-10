// * Convert Array to JSON Object

// * 1.- Convert Array to JSON Object JavaScript
const arr = [5, 6, 7, 8];
const array2String = JSON.stringify(Object.assign({}, arr));
const string2JsonObject = JSON.parse(array2String);
console.log(string2JsonObject);

// * Converting an Object to an Array
const obj = {
  1: 5,
  2: 7,
  3: 0,
  4: 0,
  5: 0,
  6: 0,
  7: 0,
  8: 0,
  9: 0,
  10: 0,
  11: 0,
  12: 0,
};
console.log(Object.entries(obj));

// * Convert two dimensional (2d) arrays to JSON Object JavaScript
var array = [
  ["Status", "Name", "Marks", "Position"],
  ["active", "Akash", 10.0, "Web Developer"],
  ["active", "Vikash", 10.0, "Front-end-dev"],
  ["deactive", "Manish", 10.0, "designer"],
  ["active", "Kapil", 10.0, "JavaScript developer"],
  ["active", "Manoj", 10.0, "Angular developer"],
];

// JavaScript create JSON object from two dimensional Array
const array2JSONObject = (arr) => {
  // header
  var keys = arr[0];

  // vacate keys from main array
  const newArr = arr.slice(1, arr.length);

  const formatted = [],
    data = newArr,
    cols = keys,
    l = cols.length;
  for (let i = 0; i < data.length; i++) {
    const d = data[i],
      o = {};
    for (var j = 0; j < l; j++) o[cols[j]] = d[j];
    formatted.push(o);
  }
  return formatted;
};
array2JSONObject(array);

// * JavaScript Tutorial | Convert Array to JSON Object
// https://morioh.com/p/9acdbd845f36?f=627e938a295a6002f82969a0
// #javascript #array #json #js #programming
