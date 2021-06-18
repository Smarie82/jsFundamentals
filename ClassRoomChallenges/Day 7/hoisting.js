/*
HOISTING
Hoisting is used to store data to memory so that it can be reference later.
*/

// console.log(firstName);
// let firstName = "Taylor";

console.log(firstName);
var firstName = "Taylor";
console.log(firstName);


example();

function example() {
    console.log("I HAVE BEEN HOISTED");
}

function petName(name) {
    console.log(`My cat's name is ${name}`);
}

petName("Connor");

petName("Connor");

function petName(name) {
    console.log(`My cat's name is ${name}`);
}

/* ONLY DECLARATIONS ARE HOISTED */
// console.log(hello);
// hello = "hi"; //error because we are initialzing it.

// console.log(pet1 + " and " = pet2);

// var pet2 = "Chloe";
// pet1 = "Connor";