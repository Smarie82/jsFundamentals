// const header = document.getElementById('header');
// console.log(header);

// header.style.color = "green";
// header.innerText = "Hello World";

// const errorList = document.getElementsByClassName('error-list');
// console.log(errorList);

// errorList[1].innerText = "I changed error 2";
// //Example 1 Looping
// for (let i = 0; i < errorList.length; i++) {
//     errorList[i].style.color = "red";
// };

// //Example 2 Looping
// for(error of errorList){
//     error.style.color = "green";
// }

// //Example 3 Looping forEach// CANNOT DO

// //errorList.forEach((error) => (error.style.color = "purple"));

// const tags = document.getElementsByTagName("p");
// console.log(tags);

// tags[0].innerText = "I changed the paragraph using getElementsByTagName!";

// const listItems = document.getElementsByTagName("li");
// console.log(listItems);

// // listItems[0].style.fontStyle = "italic";
// // listItems[1].style.fontStyle = "italic";

// for (let i = 0; i < listItems.length; i++){
//     listItems[i].style.fontStyle = "italic";

// }

//const header = document.querySelector("h1");
const header = document.querySelector("#header");
console.log(header);

const errorList = document.querySelector(".error-list");
console.log(errorList);

const errorList2 = document.querySelector("body > div > li:nth-child(2)");
console.log(errorList2);

const headerTag = document.querySelectorAll("h1");
console.log(headerTags);

console.log(headerTags[1]);

headerTags.forEach((h) => {
    h.style.color = "blue";
});

const listItems = document.querySelectorAll('.error-list');

listItems.forEach(li=>{
    li.style.fontStyle = "italic";
})




//Challenge Challenge: Create a javascript file and link it to the html (JAVASCRIPT GOALS)
// add id's to the h1, p, ul tags to reference in your js file
// use getelementbyid's in .your js file so you can target changes

// Change the Text of My Title to "My Grocery List"
// Change the font color of the p tag to red
// Remove the bullets on the ul's

// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <meta http-equiv="X-UA-Compatible" content="IE=edge" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <title>Document</title>
//   </head>
//   <body>
//     <h1>My Title</h1> 
//     <p>This is my grocery list</p>
//     <ul>
//       <li>Apples</li>
//       <li>Oranges</li>
//       <li>Grapes</li>
//     </ul>
//   </body>
// </html>

// Solution: let para = document.getElementById("para");
// let list = document.getElementById("list");
// let title = document.getElementById("title");
// para.style.color = "red";

// list.style.listStyleType = "none";

// title.innerText = "This is My Grocery List";