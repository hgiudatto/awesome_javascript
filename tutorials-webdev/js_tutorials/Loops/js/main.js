// Loops
/* let myNumber = 0;
while (myNumber < 50) {
    myNumber++;
    console.log(myNumber);
} */

let name = "Ettore";
let counter = 0;
let myLetter;
while (counter <= 3) {
    myLetter = name[counter];
    console.log(myLetter);
    if (counter === 1) {
        counter += 2;
        continue;
    }
    if (myLetter === "r") break;
    counter++;
}

console.log(counter);
