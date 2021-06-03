var myName = "Stephanie";
var person1 = 'Austin';
var person2 = `Pendleton`;
let animal = "tiger"

const weather = "cloudy"
console.log("weather", weather)

//weather = 'rainy' < produces error
console.log("Weather changed", weather)

var myname = "Jeff"

console.log("My Name", myName);

//var myName = 'Steve';    <not needed

//Reassigning a variable we do not need to reinitialize the bucket
myName = "Steve"

console.log("My Name Changed", myName)

let phrase = "good morning"

//console.log(phrase, myName) //works fine

//console.log(phrase+" "+myName) //works fine

console.log(`${phrase} ${myName} how are you?`)

let example = "ThE FoX JUmpeD OveR the Turtle"

console.log(example.toLocaleLowerCase())

let name1 = "Marco"

let name2 = "MaRco"

let match = name1.toLowerCase() === name2.toLowerCase()

console.log("Do Names Match:", match)

console.log("Does Example have this word in it?:", example.includes("FoX"))

console.log("length of Example:", example.length)

