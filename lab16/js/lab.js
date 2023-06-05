// index.js - Ajax and Json 
// Author: Leeza Lamb
// Date: 6/1/2023

$.ajax({
    //URL
    url: "https://xkcd.com/info.0.json",
    //Want all of the data for the most recent comic
    //Image the API has updated it will change into
    data: {},
    type: "GET",
    dataType: "json",
    success: function(data) {
        //callback function (code does with the retrieved data)
        console.log("success");
        console.log(data);
        var comicObj = data;
        //put the title on the page
        $("#output").append("<h3>" + comicObj.title + "</h3>");
        //put the image on the pafe and attaches alt text and title to image 
        $("#output").append("<img src=" + comicObj.img + "alt=" + comicObj.alt + "title='Image'>");
    }

})