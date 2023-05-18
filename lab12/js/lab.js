// index.js - Conditionals
// Author: Leeza Lamb
// Date: 5/18/2023

//Make a return for Grif, Rave, Sly, and Huff
function sortingHat(str) {
    len = str.length;
    mod = len %4;
    if (mod==0) {
        return "Griffindor"
    }
    else if (mod==1) {
        return "Ravenclaw"
    }
    else if (mod==2) {
        return "Slytherin"
    }
    else if (mod==3) {
        return "Hufflepuff"
    }
}

//now conect it to the button
// var myButton =  document.getElementById("button");
// myButton.addEventListener("click", function(){
//     var name = document.getElementById("input").value;
//     var house = sortingHat(name);
//     newText = "<p> The Sorting Hat has sorted you into" +" "+ house + "</p>";
//     document.getElementById("output").innerHTML = newText;

// })

$("#button").click(function(){
    var name = $(this).val();
    var house = sortingHat(name);
    newText = "<p> The Sorting Hat has sorted you into" +" "+ house + "</p>";
    $(this).parent().html(newText);
    });