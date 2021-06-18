/*
SCOPE
-locally - think Indianapolis as our local scope
-globally - think planet earth as our glabal scope
*/
//example1
let x = "declared OUTSIDE of the function"; //globally scoped

function exampleScope() {
    let x = "declared INSIDE the function";
    console.log("We are inside the function exampleScope");
    //console.log(x);
}

exampleScope();
console.log(x);

//example 2
let color = "blue";

function skyColor() {
    color = "pink"
    //console.log(color);
}

console.log(color);
skyColor();

/*Var vs Let
    CONST - cannot be reinitialized
    VAR - scoped to nearest function block
    LET - scoped to the nearest enclosing block
*/

var color = "blue";

function skyColor() {
    var color = "pink";
    if (1 == 1) {
        var color = "purple";
        console.log(color); //purple
    }
    console.log(color); //purple
} 

skyColor();
console.log(color); //blue
// Remember that VAR is scoped to the nearest function block, no the nearest enclosing block like LET. That is why our first variable declaration of color gets reinitialized as purple.

//LET
let color = "blue"

function skyColor() {
    let color = "pink"
    if (1 == 1){
        let color = "purple"; 
        console.log(color); //purple
    }
    console.log(color); //pink
}

skyColor();
console.log(color); //blue
//With let we don't have to worry about any bleeding/scope creeping in our functions/conditionals!