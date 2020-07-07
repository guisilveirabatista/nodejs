const express = require("express");
const request = require("request");
const bodyParser = require("body-parser");

const app = express();

app.use(express.static("public"));

app.use(bodyParser.urlencoded({
    extended: true
}));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/signup.html");
});

app.post("/", function (req, res) {

    var email = req.body.email;
    var firstName = req.body.fName;
    var lastName = req.body.lName;

    var data = {
        members: [
            {
                email_address: email,
                status: "subscribed",
                merge_fields: {
                    FNAME: firstName,
                    LNAME: lastName
                }
            }
        ]
    }

    var jsonData = JSON.stringify(data);

    var options = {
        url: "https://us10.api.mailchimp.com/3.0/lists/4f35220078",
        method: "POST",
        headers: {
            "Authorization": "guisilver ac301f381a50b0033a4f63408aa8de89-us10"
        },
        body: jsonData
    }

    request(options, function (error, response, body) {
        if (error) {
            console.log(error);
            res.sendFile(__dirname + "/failure.html");
        } else {
            console.log(response.statusCode);
            if (response.statusCode === 200) {
                res.sendFile(__dirname + "/success.html");
            } else {
                res.sendFile(__dirname + "/failure.html");
            }
        }
    });

});

app.listen(3000, function () {
    console.log("Server is running on port 3000.");
});