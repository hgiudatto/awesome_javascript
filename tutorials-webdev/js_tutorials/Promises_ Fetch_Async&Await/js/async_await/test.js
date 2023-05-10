// synchronous
/* console.log("I");

console.log("eat");

setTimeout(() => {
  console.log("icecream");
}, 3000);

setTimeout(() => {
  console.log("with a");
}, 4000);

setTimeout(() => {
  console.log("spoon");
}, 5000); */

let isSaloonOpen = false;

let order = () => {
  return new Promise((resolve, reject) => {
    isSaloonOpen
      ? resolve(console.log("Prepare dish"))
      : reject(console.log("Sorry the saloon is closed"));
  });
};

const kitchen = async () => {
  await order();
};

kitchen();
