// Duplicate arrays
const faces = [
  "🤠",
  "😄",
  "🤔",
  "🤔",
  "😘",
  "😄",
  "😎",
  "🤠",
  "🤔",
  "🤠",
  "🙄",
];

const sameFaces = [...faces];
console.log("🚀 ~ file: 9_array_tips.js ~ line 5 ~ sameFaces", sameFaces);

const flags = ["🏳️‍🌈", "🎌", "🚩"];

const fruits = ["🍓", "🍉", "🍍"];

const mergedArrays = [...faces, ...fruits, ...flags];
console.log(mergedArrays);

const uniqueFaces = [...new Set(faces)];
console.log(uniqueFaces);

const names = ["Hunter", "Ashlyn", "Jessica", "Joe", "Cathy", "Henry"];

const hnames = names.filter((name) => {
  return name.startsWith("H");
});
console.log(hnames);

const numbers = [4, 11, 8, 22, 14, 12];

const isEven = (num) => {
  return num % 2 === 0
};
number = 47
isEven(number) ? console.log(`${number} is even.`) : console.log(`${number} is odd.`)

const evens = numbers.some((num) => {
  return num % 2 === 0 && true;
});

console.log(`Evens: ${evens}`);

const odds = numbers.some((num) => {
  return num % 2 !== 0 && true;
});
console.log("🚀 ~ file: 9_array_tips.js ~ line 51 ~ odds ~ odds", odds);

const animals1 = ["🙉", "🦇", "🦆", "🙊"];
const animals2 = ["🙈", "🐶", "🦊", "🐗", "🦇"];

const intersection = animals1.filter((animal) => animals2.includes(animal));
console.log(
  "🚀 ~ file: 9_array_tips.js ~ line 58 ~ intersection",
  intersection
);

const difference = animals1.filter((animal) => !animals2.includes(animal));
console.log("🚀 ~ file: 9_array_tips.js ~ line 63 ~ difference", difference);

const allDifferences = [
  ...animals1.filter((animal) => !animals2.includes(animal)),
  ...animals2.filter((animal) => !animals1.includes(animal)),
];
console.log(
  "🚀 ~ file: 9_array_tips.js ~ line 68 ~ allDifferences",
  allDifferences
);
