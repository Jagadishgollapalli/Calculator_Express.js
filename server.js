var express = require("express");
var bodyParser = require("body-parser");

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);

  var data = req.body.submit;

  if (data === "addition") {
    var result = num1 + num2;
    res.send(`The addition is ${result}`);
  } else if (data === "subtraction") {
    var result = num1 - num2;
    res.send(`The subtraction is ${result}`);
  } else if (data === "multiplication") {
    var result = num1 * num2;
    res.send(`The multipliction is ${result}`);
  } else {
    var result = num1 / num2;
    res.send(`The division is ${result}`);
  }

  //You can't send numbers using res.send in express, try converting it into a String.
});

app.listen(3000, function () {
  console.log("Server listening on port 3000");
});
