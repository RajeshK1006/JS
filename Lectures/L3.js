// how to acepts user input in JS 
// 1. easy way
// to create an window prompt;
// this is an part of browser in js not an nodejs feature

// let user;
// user = window.prompt("enter your input please!");
// console.log(user);


// 2. professional way to accept the user input ==> html textbox

// <label id ="user"> user: <label>
// <input if = "usename" type = "text" for="user">
// <button text ="submit" type= "submit" id = "user">

// let user;

// document.getElementById("user").onclick = function() {
//   user = document.getElementById(username).value;
//   // to set the any other tags text cotent 
//   // document.getelementById.textcontent = user;
//   console.log(user);
//   }


// constants
// whose values doesn't chage over the entire program
// mostly to prevent the sensitive data to get changed oro manipulated

const pi = 3.14;
let radius  = 9;
const circum = 2 * pi * radius;
// pi = 43;cannot reassign a const variable
console.log(circum);
