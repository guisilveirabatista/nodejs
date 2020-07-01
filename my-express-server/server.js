const express = require("express");

var app = express();

app.get("/", function(req, res){
    res.send("Hello 2");
});

app.get("/contact", function(req, res){
    res.send("My contact is smdm_silver@hotmail.com");
});

app.listen(3000, function(){
    console.log('Server started on port 3000');
});