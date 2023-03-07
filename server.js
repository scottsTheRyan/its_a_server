//jshint esversion:6

const express = require("express");

const app = express();

app.get("/", function(request, response){
    response.send("Hello");
});

app.get("/contact", function(request, response){
    response.send("Contact me at: 8675309");
});

app.get("/about", function(request, response){
    response.send("I am not a potato");
});

app.listen(3000, function(){
    console.log("Server started on port 3000");
});

