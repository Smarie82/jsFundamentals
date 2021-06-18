/*
ARROW FUNCTIONS
*/

function hello(){
    console.log("hello");
}

hello();

//arrow funcitons were introduced in ES6. They are more concise way of writing function expressions.
    //(1)    (2)

let hi = () => {
    console.log('hi');
}

hi();

/*
    1. Ste my arrow function to a variable
    2. Use my arrow to signify that it's a function. 
    Arrow funtions are not declarions - therefor they cannot be hoisted
*/

//CONCISE BODY
let hi = () => console.log("hi");

hi();

//BLOCK BODY
let hi = () => {
    console.log("hi");
}

hi();

//CONCISE VS BODY
let apples = (x) => console.log('There are ${x} apples.');
apples(10);

let apples = (x, y) => {
    console.log('there are ${x} apples and ${y} oranges.');
};
apples(10, 15);