// Functions

// function Declaration Syntax:
/* function sum(n1, n2) {
    return n1 + n2;
}

console.log(sum(2,6)); */

function getUserNameFromEmail (email) {
    return email.slice(0, email.indexOf("@"));
}

console.log(getUserNameFromEmail("hgiuda@gmail.com"));
