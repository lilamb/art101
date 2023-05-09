// index.js - JavaScript in the Web 
// Author: Leeza Lamb
// Date: 5/9/2023

//document.getElementById ("bio") 
//Var bioEl = document.getElementById("Bio")

//add a new El first step is fine the EL 
//find the EL then create the EL then Append the child.


//find the element 
var outputEl = 
document.getElementById ("output");
//create the new element 
var new1El = 
document.createElement ("p");
//give it a new ID 
new1El.id = "This-is-the-new-P";
//Make a second new element 
var new2El = 
document.createElement("P")
new2El.id = "This-is-my-second-P";
//append the child
outputEl.appendChild(new1El);
outputEl.appendChild(new2El);
//Incert the innerHTML
new1El.innerHTML = "WHAT DID I SAY??"
new2El.innerHTML= "OHHHH THATS WHAT I SAID!"

