let student = {
    name: "Amruta",
    awesome: true,
    certification: "JavaScript",
    week: 1
    //properties : value
    //key = property
};

for(item in student) {
    //console.log(item);
    console.log(student[item]);
}
// the for in loop iterates over a student object.
// each iteration return a property(item)
//the key/property is used to access the value of the key/property
// the value of the key/property is student[item].

//For in loops are great for iterating over valuse in an object.
//For in loops count the enureable (countable) properties in an object.

//Objects contain properties that are enurerable. Properties in and object don't contain an index like arrays. But they can be counted.

//properties are keys. Keys go in objects(lock) for it to correctly work and unlock.

/* BRONZE -CHALLENGE-

    - Using a for in loop, console.log the name of each character from the 
    members key in the fellowshipOfTheRing object.

*/
/* SILVER
    - Add a conditional to the for in loop that checks if the characters 
    name does NOT begin with a vowel. Then, using string interpolation, 
    console.log either '__'s name does not begin with a vowel' or '__'s 
    name does begin with a vowel'.
*/
/* GOLD

    - Declare a globally scoped variable of arr that is initialized as 
    an empty array. If the characters name does not begin with a vowel, 
    add that character to the new array, and then console.log the array.

*/

let fellowshipOfTheRing = {
    members: {
        Gandalf: 'Staff',
        Frodo: 'Sting',
        Sam: 'Lembas Bread',
        Aragorn: 'Anduril',
        Legolas: 'Bow of the Galadhrim',
        Gimli: 'Walking Axe',
        Pippin: 'Barrow Blades',
        Merry: 'Barrow Blades',
        Boromir: 'Horn of Gondor'
    },
    purpose: "To take the One Ring to Mordor, where it is to be \"cast into the fiery chasm from whence it came,\" in order for it to be destroyed and Sauron\'s power to come to an end.",
    formed: '25 October, 3018',
    dissolved: '26 February, 3019'
}
    //console.log(fellowshipOfTheRing.members.Gandalf);
    //console.log(fellowshipOfTheRing['members']['Gandalf']);

    //for(character in fellowshipOfTheRing.members){
       // console.log(character);
    //}

   
//SILVER solution
    // for(character in fellowshipOfTheRing.members){
    //     if(character[0] !== 'A' && character[0] !== 'E' && character[0] !== 'I' && character[0] !== 'O' && character[0] !== 'U') {
    //         console.log(`${character}'s name does NOT begin with a vowel!`)
    //     }else{
    //         console.log(`${character}'s name DOES begin with a vowel`)
    //     }
    // }

    //GOLD
    let arr =[]

    for(character in fellowshipOfTheRing.members){
        if(character[0] !== 'A' && 
            character[0] !== 'E' && 
            character[0] !== 'I' && 
            character[0] !== 'O' && 
            character[0] !== 'U') {
            console.log(`${character}'s name does NOT begin with a vowel!`)
            arr.push(character);
        }else{
            console.log(`${character}'s name DOES begin with a vowel`)
        }
    }

    console.log(arr);