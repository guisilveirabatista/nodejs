const express = require("express");
const request = require("request");
const bodyParser = require("body-parser");
const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
    extended: true
}));

app.get("/", function (req, res) {
    // res.send("Hello World!");
    // res.sendFile(__dirname + "/index.html");

    var today = new Date();
    var currentDay = today.getDay();
    // var day = "";

    res.render('list', {currentDay: currentDay});
});

app.post("/", function (req, res) {
    // console.log(req.body.num1);
    // let result = parseFloat(req.body.num1) + parseFloat(req.body.num2);
    // let result = Number(req.body.num1) + Number(req.body.num2);
    // res.send("Resultado: " + result);
});

app.listen(3000, function () {
    console.log("Server is running on port 3000.");
});