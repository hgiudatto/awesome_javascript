// Objects
// Key-value pairs in curly braces
const obj = {name: "Ettore"};

const anotherObj = {
    smart: true,
    answer: 42,
    hobbies: ["Code", "Fishing", "Tennis"],
    beverage: {
        morning: "Tea",
        afternoon: "Iced Tea"
    },
    action: function() {
        return `Time for ${this.beverage.morning}`;
    }
}

console.log(obj);
console.log(obj.name);

console.log(anotherObj.answer);
console.log(anotherObj.smart);
console.log(anotherObj.hobbies);
console.log(anotherObj.hobbies[1]);
console.log(anotherObj["smart"]);
console.log(anotherObj["beverage"]);
console.log(anotherObj.beverage.morning);
console.log(anotherObj.action());

const vehicle = {
    wheels: 4,
    engine: function() {
        return "Vrroooom!";
    }
};

const truck = Object.create(vehicle);
truck.doors = 2;
console.log(truck);
console.log(truck.wheels);
console.log(truck.engine());

const car = Object.create(vehicle);
car.doors = 4;
car.engine = function(){
    return "Vhoooosh!";
};
console.log(car.engine());
console.log(car.wheels);

const tesla = Object.create(car);
console.log(tesla.wheels);
tesla.engine = function() {
    return "Shhhhh...";
};
console.log(tesla.engine());

const band = {
    vocals: "Robert Plant",
    guitar: "Jimmy Page",
    bass: "John Paul Jones",
    drums: "John Bonham"
}

console.log(Object.keys(band));
console.log(Object.values(band));

// For In loop
for (const job in band) {
    console.log(`On ${job}, it's ${band[job]}!`);
}

// Destructuring Objecta
const {guitar: guitarist, vocals: vocalist, bass: bassman, drums: drummer} = band;
console.log(`Led Zeppelin Band members: ${guitarist} - lead guitar, ${vocalist} - lead vocals, ${bassman} - bass, ${drummer} - drums`);

function sings({vocals}) {
    return `${vocals} sings!`; 
}

console.log(sings(band));
