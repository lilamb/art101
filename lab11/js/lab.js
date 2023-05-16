// index.js - Libraries & jQuery 
// Author: Leeza Lamb
// Date: 5/16/2023

//make buttons and append them
$("#challenge").append("<button id= 'c-button'>Challenge!</button>");
$("#problems").append("<button id= 'p-button'>Problems</button>");
$("#results").append("<button id= 'r-button'>Results</button>");

//make the button doggle and switchback and forth between colors
$("#c-button").click(function(){
    $(this).parent().toggleClass("special");
})

$("#p-button").click(function(){
    $(this).parent().toggleClass("special");
})

$("#r-button").click(function(){
    $(this).parent().toggleClass("special");
})