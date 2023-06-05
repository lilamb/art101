// index.js - Ajax and Json 
// Author: Leeza Lamb
// Date: 6/5/2023

$.ajax({
    //url
    url: "https://xkcd.com/info.0.json",
    //want all of the data for most recent comic on api 
    //whatver image the api has updated, it will change into it
    data: {},
    type: "GET",
    dataType: "json",
    success: function(data){
        //success callback function (what code does with the retrieved data)
        console.log("success");
        console.log(data);
        var comicObj = data;
        //puts title on page
        $("#output").append("<h3>" + comicObj.title + "</h3>");
        //puts image on page, and attaches alt text & title to image
        $("#output").append("<img src=" + comicObj.img + " alt=" + comicObj.alt + "title='Image'>");
    }
})