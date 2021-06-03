/*
CONDITIONALS - Conditional statements control behavior in JavaScript and determine whether or not pieces of code can run. Conditionals will check if an expression is true. OF the expression is true, a block of code will run.
*/

/* 
Falsy Values - considered false.

1) false
2) null
3) undefined
4) 0
5) Nan (Not a Number)
6) " " (empty string)
*/

/*
Truthy Values - considered true

1) true
2) 42, -42
3) "0" ( a string that isn't empty)
*/

let snowing = true;

if (snowing == true) {
    //true
    console.log('It is snowing outside!');
}

if (snowing) {
    //true
    console.log("It is still snowing!");
}

let snowing = false;
//true
if (snowing ==false) { 
    //true
    console.log (`It stopped snowing. It's too warm.`);
}

if (snowing) { 
    //false! so it will not run.
    console.log("It is not snowing. Bummer!");
}

/*
IF ELSE - If the expression is false, it will run the next block of code.
The else statement spedcifies a block of code to be executed if the condition is false. 
*/

let puppies = 3

if (puppies <1) {
    console.log('I need more puppies')
} else {
    console.log('I have enough puppies')
}
let myName = "Stephanie";

if (myName == "Austin") {
    console.log(`Hello! My name is ${myName}.`)
} else {
    console.log(`Hello, is your name ${myName}.`)
}