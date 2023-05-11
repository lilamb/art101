// index.js - JavaScript in the Web 
// Author: Leeza Lamb
// Date: 5/9/2023



// Create a function
// Add a button (id="my-button")

var buttonEl = document.getElementById("my-button");
// Create an event handler within the JS file that listens for a button click.
buttonEl.addEventListener("click", function(){
	console.log("Button pressed");
  // prompt the user to input name function. 
  //var name = prompt
  var name = document.getElementById("user-name").value;
  var nameStr = "Hello, " + sortMe(name);
  // change the text to say the user’s name
  var nameEl = document.getElementById("output");
  nameEl.innerHTML = nameStr;
})


function sortMe(str) {
	return str.split('').sort().join('');
}