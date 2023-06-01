// index.js - Ajax 
// Author: Leeza Lamb
// Date: 5/30/2023


function getStuff() {
    //not working=debug
    console.log("Clicked!");
    //button worked
    $.ajax({
        //where-string
        url: "https://yesno.wtf//api",
        //how-string
        type: "GET",
        //what-empty object
        data: {},
    })
    .done(function(data) {
        //console.log(data)
        //it worked
        //go to the web
        console.log(data);
        var answer = data.answer;
        var imgURL = data.image;
        $("#output").html("<h2>" + answer);
        $("#output").append("<img src=" + imgURL + ">");
    })
}

$("#activate").click(getStuff);