// index.js - Functions
// Author: Leeza Lamb
// Date: 5/3/2023

function sortUserName() {
    var userName = window.prompt ("Hello, Can I get your full name please so I can fix it?");
    console.log("userName=", userName);
    //Split string to Array
    var nameArray = userName.split ('');
    console.log("nameArray=", nameArray);
    //Sorting the arry
    var nameArraySort = nameArray.sort();
    console.log("nameArraySort=", nameArraySort);
    //joining the array back to string
    var nameSorted = nameArraySort.join('');
    console.log("nameSorted=", nameSorted);
    //somehting 
    // userName.toLower().split('').sort().join('');
    //returning
    return nameSorted;
}

document.writeln("Thank you I have fixed your name.",
    sortUserName(), "</br>");

    // function sortStr (str) {
    //     var strArray = str.slit ("");
    //     var sortedArray = strArray.sort();
    //     var sortedStr = sortedArray.join("");
    //     return sortedStr;

    // }

    // var str ="Art 101 programing for the arts"
    // var sortedStr = sortStr(str);
    // document.writeln("The sorted string is: " + sortedStr);
