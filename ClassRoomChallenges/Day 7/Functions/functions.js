greeting(); //call the function

function greeting() {
    //Code inside will be executed when the function is called
console.log("Hello from greeting");
}

//Expression Functions - Order Matters
//The key difference between a funciton and a function expression
//-declaration get hoisted
// - expressions do not get hoisted

let expressionGreeting = function () {
    console.log("Hello from expression greeting");
};

expressionGreeting();
//Challenge
//Create a function that, when invoked, lists out the numbers 1-10
//Using a for loop

function challenge1(){
    for (let i = 1; i<=10; i++) {
        console.log(i);
    }
}

challenge1();

// Parameters
//Function parameters are place holders for data that we pass into a function

function studentGreeting(studentName) {
    console.log(`Good Morning ${studentName}`);
}

studentGreeting("Stephanie");
studentGreeting("Austin");

/*
-Write a function that takes two parameters:
    - one parameter is for a first name,
    - the other parameters is for a last name;
    - have them come together in a variable in a variable inside the function.
    - consol.log 'Hello, my name is <your name>'
    -call (or invoke) your function
    */

    function myName(fName, lName) {
        let fullName = fName + " " + lName;
        console.log(fullName);
}

myName("Stephanie", "A");

function area(length, width){
    let areaCalc = length * width;
    return areaCalc; //without a return this function returns undefined
}

let area1 = area(3, 4);
let area2 = area(5, 3);
console.log(area1, area2);

function cube(length, width, height){
    let cubeCalc = length * width * height;
    return cubeCalc;
}

let cube1 = cube(3, 4, 5);
console.log(cube1);

//function that will take a parameter for dog age
// must return the human age
// store and console.log the return the function
//HumanAge = (DogAge -2) x 4 + 21

function humanAge(dogAge) {
    let humanAgeCalc = (dogAge - 2) * 4 + 21;
    return humanAgeCalc;
}

let roverAge = humanAge(3);
console.log(roverAge);
