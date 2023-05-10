// Generate random string
const randomStringGen = () => {
  console.log(`Random String: ${Math.random().toString(36).slice(2)}`);
};
randomStringGen();

// Extract Domain Name From An Email
const emailDomainExtractor = (email) => {
  console.log(`Email Domain: ${email.substring(email.indexOf("@") + 1)}`);
};
emailDomainExtractor("contact@learnprogramo.com");

// Check if An Array Is Empty
let arr1 = [];
let arr2 = [1, 2, 3, 4, 5];

let isArr1Empty = !(Array.isArray(arr1) && arr1.length > 0);
console.log(`Is arr1 empty: ${isArr1Empty}`);
let isArr2Empty = !(Array.isArray(arr2) && arr2.length > 0);
console.log(`Is arr2 empty: ${isArr2Empty}`);

// Check if a variable is an array
let city = "Paris";
let cities = [
  "Paris",
  "Toulouse",
  "Dijon",
  "Nantes",
  "Lyon",
  "Rennes",
  "Strasbourg",
];

console.log(`city isn't an array: ${!Array.isArray(city)}`);
console.log(`cities isn't an array: ${!Array.isArray(cities)}`);
