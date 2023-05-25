
// * 3_array_metodos.js

/* Funciones de Flecha - Arrow Functions
function name2UpperCase(text) {
  const nameUpper = text.toUpperCase();
  console.log(nameUpper);
}

const name2UpperCase = (text) => {
  const nameUpper = text.toUpperCase();
  console.log(nameUpper);
};

name2UpperCase("Achilles"); */

/* const foodAndDrinks = [
  "🥝",
  "🍔",
  "🥦",
  "🍟",
  "🥤",
  "🍎",
  "🥞",
  "🌭",
  "🥪",
  "🍮",
  "🍒",
  "🍝",
  "🥨",
  "🍙",
  "🍋",
  "🍕",
  "🥕",
];
let frenchFries = foodAndDrinks[4];
console.log(frenchFries); */

/* Agregando elementos a un array
foodAndDrinks.push("🧇");

Array.isArray(foodAndDrinks); */

/* Destructuring
let [hamburger, hotDog, waffle] = ["🍔", "🌭", "🧇"];
console.log(hamburger);

const len = foodAndDrinks.length;
foodAndDrinks[len - 1];

foodAndDrinks.push("🍄");

foodAndDrinks.unshift("🍖");

foodAndDrinks.pop();

foodAndDrinks.push("🍄");

const soldOut = foodAndDrinks.shift();
console.log(`Sold Out: ${soldOut}`);

foodAndDrinks.unshift("🍖");

foodAndDrinks.forEach((num, ind) => console.log(`Index: ${ind} Value: ${num}`)); */

// * 4_destructuring_array_object.js

// * 5_array_CRUD.js

// * 6_array_iterator_metodos.js

// * 7_spread_rest_operators.js

/* Copy y Clone
let foodAndDrinksCopy = foodAndDrinks.slice();
let foodAndDrinksCopy0 = [...foodAndDrinks]; */

/* Array Destructuring
let [mushroom, pretzel, apple] = ["🍄", "🥨", "🍎"];
console.log(pretzel); */

/* Default value
let [pretzels, mushrooms = "🍄"] = ["🥨"];
console.log(mushrooms);
console.log(pretzels); */

/* Skip
let [aMushroom, , anApple] = ["🍄", "🥨", "🍎"];
console.log(aMushroom);
console.log(anApple); */

/* Nested Array Destructuring - Fetch the carrot
let [, , , , [, carrot]] = ["🍉", "🍌", "🍍", "🍑", ["🍄", "🥕", "🥦"]];
console.log(carrot); */

/* rest parameter
const [, banana, , peach, ...theRest] = [
  "🍉",
  "🍌",
  "🍍",
  "🍑",
  ["🍄", "🥕", "🥦"],
];
console.log(banana);
console.log(peach);
console.log(theRest);
const [watermelon, , , , [, aCarrot, broccoli], ...remaining] = [
  "🍉",
  "🍌",
  "🍍",
  "🍑",
  ["🍄", "🥕", "🥦"],
];
console.log(watermelon);
console.log(aCarrot);
console.log(broccoli);
console.log(remaining); */

/* Usando el Spread Operator
const tuttiFrutti = [
  ...[watermelon, , , , [, aCarrot, broccoli], ...remaining],
];

console.log("TuttiFrutti: ", tuttiFrutti); */

Swappeando valores con destructuring
let first = "🍌";
let second = "🍍";
[first, second] = [second, first];
console.log("first: ", first);
console.log("second: ", second);

Merge Arrays
const food = ["🍔", "🍟", "🌭", "🥞", "🍕"];
const drinks = ["🥤", "🍵", "☕"];

const lunch = [...food, ...drinks];

const showLunch = () => {
  lunch.map((fd) => {
    console.log(`you get: ${fd}`);
  });
};

showLunch();

Array Methods
const one = [1, 2, 3];
const two = [4, 5, 6];
const three = [7, 8, 9];
const four = [10, 11, 12];
const five = [13, 14, 15];
const merged = one.concat(two, three, four, five);

const showMerged = () => {
  merged.map((m) => {
    console.log(`Merged: ${m}`);
  });
  console.log("-----------------------------");
  one.map((p) => {
    console.log(`one: ${p}`);
  });
  console.log("-----------------------------");
  two.map((s) => {
    console.log(`two: ${s}`);
  });
  console.log("-----------------------------");
  three.map((t) => {
    console.log(`three: ${t}`);
  });
  console.log("-----------------------------");
  four.map((f) => {
    console.log(`four: ${f}`);
  });
  console.log("-----------------------------");
  five.map((fi) => {
    console.log(`five: ${fi}`);
  });
};
showMerged();

const fastFood = ["🍔", "🍟", "🌭", "🥞", "🍕"];

console.log(`fast food: ${fastFood.join("|")}`);

Usamos fill() array method
const showFilled = () => {
  fastFood.fill("🍔");
  fastFood.map((t) => console.log(t));
};
showFilled();
console.log("-----------------------------");
const showFilledSome = () => {
  fastFood.fill("🌭", 2, 4);
  fastFood.map((t) => console.log(t));
};
showFilledSome();

Usamos includes() array method
console.log(fastFood.includes("🌭"));
console.log(fastFood.includes("🌰"));

Usamos indexOf() array method
console.log(fastFood.indexOf("🍔"));
console.log(fastFood.indexOf("🍟"));
console.log(fastFood.indexOf("🌭"));
console.log(fastFood.indexOf("🥞"));
console.log(fastFood.indexOf("🍕"));

const names = ["tom", "alex", "bob", "tom", "john"];

console.log(
  "🚀 ~ file: array_methods.js ~ line 200 ~ names.indexOf('alex');",
  names.indexOf("alex")
);
console.log(
  "🚀 ~ file: array_methods.js ~ line 201 ~ names.indexOf('rob')",
  names.indexOf("rob")
);
names.indexOf("tom");
console.log(
  "🚀 ~ file: array_methods.js ~ line 208 ~ names.indexOf('tom')",
  names.indexOf("tom")
);
names.lastIndexOf("tom");
console.log(
  "🚀 ~ file: array_methods.js ~ line 208 ~ names.lastIndexOf('tom')",
  names.lastIndexOf("tom")
);

Usamos reverse() array method
const swapped = ["🍔", "🌭", "🍕"].reverse();
console.log("🚀 ~ file: array_methods.js ~ line 214 ~ swapped", swapped);

Usamos array method
const sorted = ["🍔", "🌭", "🍕"].sort();
console.log("🚀 ~ file: array_methods.js ~ line 224 ~ sorted", sorted);

const sortedNames = ["Hector", "Achilles", "Priamo", "Peleo"].sort();
console.log(
  "🚀 ~ file: array_methods.js ~ line 227 ~ sortedNames",
  sortedNames
);

const numbers = [23, 5, 100, 56, 9, 13, 37, 10, 1];
console.log(numbers.sort());

const ascSortedNums = numbers.sort((a, b) => a - b);
console.log(
  "🚀 ~ file: array_methods.js ~ line 238 ~ ascSortedNums ~ ascSortedNums",
  ascSortedNums
);

const descSortedNums = numbers.sort((a, b) => b - a);
console.log(
  "🚀 ~ file: array_methods.js ~ line 241 ~ descSortedNums",
  descSortedNums
);

Usamos splice() array method
const foods = ["🍔", "🌭", "🍕"];
foods.splice(2, 0, "🍟");

const showSplicedFood = () => {
  foods.map((food) => {
    console.log(`food: ${food}`);
  });
};
showSplicedFood();

const fastFoods = ["🍔", "🌭", "🍕"];
fastFoods.splice(1, 1, "🥤");

const showSplicedFastFoods = () => {
  fastFoods.map((ffs) => {
    console.log(`ffs: ${ffs}`);
  });
};
showSplicedFastFoods();

Usamos Static Array Methods in JavaScript

const arrayOfThings = Array.of(
  true,
  "🥞",
  "😋",
  "Lemon Tree",
  [55, 106, 23, 503],
  {
    "mobile-device": "Tablet PC",
  }
);

const showArrayOf = () => {
  arrayOfThings.map((t) => {
    console.log(`arrayOfThings element: ${t}`);
    typeof t === "object" && console.log(`Object: ${JSON.stringify(t)}`);
  });
};
showArrayOf();

Usamos Array Iterator Methods in JavaScript
let students = [
  {
    id: 001,
    f_name: "Alex",
    l_name: "B",
    gender: "M",
    married: false,
    age: 22,
    paid: 250,
    courses: ["JavaScript", "React"],
  },
  {
    id: 002,
    f_name: "Ibrahim",
    l_name: "M",
    gender: "M",
    married: true,
    age: 32,
    paid: 150,
    courses: ["JavaScript", "PWA"],
  },
  {
    id: 003,
    f_name: "Rubi",
    l_name: "S",
    gender: "F",
    married: false,
    age: 27,
    paid: 350,
    courses: ["Blogging", "React", "UX"],
  },
  {
    id: 004,
    f_name: "Zack",
    l_name: "F",
    gender: "M",
    married: true,
    age: 36,
    paid: 250,
    courses: ["Git", "React", "Branding"],
  },
];

Usamos filter() array method
const femaleStudents = students.filter((value) => {
  return value.gender === "F";
});
console.log(`female students: `, femaleStudents);

Usamos map() array method
console.log(`Students: `);
const fullNames = students.map((student) => {
  console.log(`fullname: ${student.f_name} ${student.l_name}`);
});

Usamos reduce() array method
const total = students.reduce((accumulator, student, currentIndex, array) => {
  accumulator = accumulator + student.paid;
  return accumulator;
}, 0);
console.log(total);

Usamos some() array method
const hasSingleStudent = students.some((student) => {
  return !student.married;
});
hasSingleStudent
  ? console.log("has single student")
  : console.log("Everyone is married");

Usamos find() array method
const student = students.find((value) => {
  return value.paid >= 300;
});
console.log(student.f_name);

Usamos every() array method

const atLeastTwoCourses = students.every((value) => {
  return value.courses.length >= 2;
});
console.log(atLeastTwoCourses);

Proposed Array Methods

Usamos at() Method

const junkFoodILove = ["🥖", "🍔", "🍟", "🍕", "🌭", "🥪", "🌮", "🍿"];
console.log(foodAndDrinks.at(1));

snacks = ["🌰", "🥜", "🥐", "🧀", "🌮"];
snacks.splice(3, 0, "🌭");

const splicedSnacks = () => {
  console.log(`Spliced snacks: `);
  snacks.forEach((elValor, elIndice) =>
    console.log(`Order: ${elIndice} Food: ${elValor}`)
  );
};

splicedSnacks();

const desserts = [
  {
    number: 1,
    name: "Iced Happiness",
    type: "icecream",
    ingredients: ["apple", "icecream", "syrup"],
    price: 185,
  },
  {
    number: 2,
    name: "Mozart Symphony",
    type: "cake",
    ingredients: ["chocolate", "cream", "blueberries"],
    price: 215.5,
  },
  {
    number: 3,
    name: "Strawberry fields forever",
    type: "cake",
    ingredients: ["strawberry", "american cream"],
    price: 122,
  },
  {
    number: 4,
    name: "Fresh & Cool",
    type: "icecream",
    ingredients: ["kiwi", "icecream", "syrup"],
    price: 198.5,
  },
  {
    number: 5,
    name: "Smiley",
    type: "icecream",
    ingredients: ["bananas", "chocolate icecream", "syrup"],
    price: 315.65,
  },
];

const dessertChoiceByPrice = () => {
  const choice = desserts.filter((dessert) => {
    return dessert.price < 150;
  });
  console.log(`Desserts choice by price: `, choice);
};

dessertChoiceByPrice();

const dessertChoiceByFruit = () => {
  const choice = desserts.filter((dessert) => {
    return dessert.ingredients.find((ingredient) => {
      return ingredient === "bananas";
    });
  });
  console.log(`Desserts choice by fruit: `, choice);
};

dessertChoiceByFruit();

const dessertChoice = () => {
  let theChoice = desserts.map((dessert) => {
    console.log(`Dessert: ${dessert.name}`);
  });
};
dessertChoice();

const dessertHasAny = () => {
  let itHas = desserts.some((dessert) => {
    return dessert.type === "cake";
  });
  itHas
    ? console.log(`Yes, here it is your piece of cake!`)
    : console.log("Sorry, no cake today.");
};

dessertHasAny();

const dessertEvery = () => {
  let every = desserts.every((dessert) => {
    return dessert.ingredients.find((ingredient) => {
      return ingredient === "icecream";
    });
  });
  every && console.log("We always have icecream!");
  console.log("Sometimes there is icecream.");
};

dessertEvery();

const aFunc = () => {
  console.log("Vamos a trabajar con JavaScript Array Iterator Methods");

  const theDesserts = desserts.filter((element, index) => {
    return element.type === "icecream";
  });

  console.log(`Icecreams: `, theDesserts);

  theDesserts.length
    ? console.log("There are more than one icecream flavour.")
    : console.log("There is only one icecream.");

  theDesserts.length;

  const firstChoice = ({
    number: number,
    name: name,
    type: type,
    ingredients: ingredients,
    price: price,
  } = theDesserts[0]);

  console.log(
    `First choice: ${firstChoice.name} - ingredients: ${firstChoice.ingredients} - price: ${firstChoice.price}`
  );
};

aFunc();
