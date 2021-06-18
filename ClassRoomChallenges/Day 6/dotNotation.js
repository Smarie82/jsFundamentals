/****
First create an object about themselves call the variable myInformation. 
It will have the following properties: 

Name: String
Age: Number
numberOfSiblings: Number
Pets: Boolean
PetNames: Array
mostRecentMovieWatched: String
carsOwned: Array {make: String, model: String}
favoriteSinger: String
***/

let myInformation = {
    name: 'Stephanie',
    age: 38,
    numberOfSiblings: 1,
    pets: true,
    petNames: ["Ampersand", "Pendleton", "Rowsdower", "Winifred"],
    mostRecentMovieWatched: "Sailor Moon Eternal Part 1",
    carsOwndedd: [{make: 'Jeep', model: 'Renegade'}],
    favoriteSinger: "Credence Clear Water Revival",
};

/***
Next Challenge is to go into a group and have everyone share their object by 
sharing their screen. Anyone not currently sharing the screen will create a new 
variable called studentInformation1 and copy their object. Then so on and so 
forth, creating an object for each student in your group (studentInformation2, 
studentInformation3, etc.). You should have an object for each person in 
your group.
Create a new array with the variables that you created with your group.
***/

let studentAryn = {
    name: 'Aryn',
    age: 27,
    numberOfSiblings: 9,
    pets: true,
    petNames: ["Drax", "Sonny", "Badgie",],
    mostRecentMovieWatched: 'Raya and the Last Dragon',
    carsOwnded: [{make: "Jeep", model: "Commander",}],
    favoriteSinger: "Beyonce",
}

let studentSterling = {
    name: 'Sterling',
    age: 30,
    numberOfSiblings: 3,
    pets: true,
    petNames: ["Boots", "Purdy", "Kiki", "Tila Tequila", "Cody"],
    mostRecentMovieWatched: "Howl's Moving Castle",
    carsOwnded: [
    {make: "Toyota", model: "Avalon"},
    {make: "Toyota", model: "Avalon"},
    {make: "Mazda", model: "CX-7"}],
    favoriteSinger: "Doja Cat",
}

let arr = [myInformation, studentSterling, studentAryn];

console.log(`In our group we have ${arr[0].name}, ${arr[1].name}, and ${arr[2].name}.`)

//allOfUs.push(myInformation, studentSterling, studentSterling,);

// console.log(allOfUs);

// console.log(allOfUs[2].name);

// console.log(allOfUs[2]["name"]);

// console.log(`In my group, we have ${studentSterling.name}, ${studentSterling.name}, and ${myInformation.name}. ${studentSterling.name} has watched ${studentSterling.mostRecentMovieWatched}, ${studentSterling.name} has watched ${studentSterling.mostRecentMovieWatched}, and ${myInformation.name} has started ${myInformation.mostRecentMovieWatched}. `)
    
/***
For the final part -  console log a few sentences from the newly created 
array with the information you've all shared. 
Example. "In our group we have Taylor, Tony, and Marco. Marco has a 
Honda Civic and 2 siblings. Taylor's favorite singer is Hozier and they watched
"The Woman in the Window" recently. Tony is 24 years old has a dog named Bo. 
***/

