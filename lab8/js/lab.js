// index.js - anon functions and Callbacks 
// Author: Leeza Lamb
// Date: 5/8/2023

function isOdd(x) {
    return (x % 2 == 1);
}

//gotta text this stuff
console.log("Is 0 odd?", isOdd (0));
console.log("Is 1 odd?", isOdd(1));

array = [450, 390, 2, 56, 81,]
console.log("My array", array);

var results = array.map(isOdd);
// this should come out as false, false, false, false, true
console.log("Test of oddness of array:", results);

var result = array.map(function (x){
    return x * 2;
})

//this is dubbled by 2 so we have 900, 780, 4, 112, 162
console.log("Multiplied the array:", results);

