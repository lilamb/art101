// index.js - Arrays and Objects
// Author: Leeza Lamb
// Date: 4/26/2023

//Define Variables 
    var myTransport= ["bus", "walking", "skateboard", ];

// //Create an object for myRide
     myRide = {
         make: "Ford",
         model: "Thunderbird",
         color: "Rusty Red",
         year: 1960,
         age: function () {
             return 2023 - this.year;
         }

     }

//Output
    document.writeln("I travel by: " + myTransport + "<br>");

    document.writeln("My Main Ride: <pre>", 
        JSON.stringify(myRide, null, '\t'), "</pre>");
    