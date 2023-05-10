// Modules
import playGuitar from "./guitars.js";
import { shredding as shred, plucking as fingerpicking} from "./guitars.js";
import User from "./user.js";

console.log(playGuitar());
console.log(shred());
console.log(fingerpicking());

const me = new User("emailqemail.com", "Ettore");
console.log(me);
console.log(me.greeting());
