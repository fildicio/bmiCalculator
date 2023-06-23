const express = require('express');
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {
  var num1 = parseInt(req.body.num1);
  var num2 = parseInt(req.body.num2);
  var result = num1 + num2;
  
  console.log(result);
  res.send("The result is " + result);
});

app.get("/bmiCalculator", function(req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmiCalculator", function(req, res) {
  var height = parseInt(req.body.height);
  var weight = parseInt(req.body.weight);

  var heightInMeters = height / 100;
  var bmi = weight / (heightInMeters * heightInMeters);
  var finalResult = bmi.toFixed(2);

  if (finalResult < 18.5) {
    res.send("Your BMI is " + finalResult + ". You are too fucking skinny!");
  } else if (finalResult >= 18.5 && finalResult <= 24.9) {
    res.send("Your BMI is " + finalResult + ". You PERFECT! BRAVO!");
  } else if (finalResult >= 25 && finalResult <= 29.9) {
    res.send("Your BMI is " + finalResult + ". You are too fucking FAT!");
  } else if (finalResult >= 30) {
    res.send("Your BMI is " + finalResult + ". Dr. NOWZARADAN is waiting for you!");
  } else {
    ("ERROR");
  }
});



app.listen(3000, function() {
  console.log("You are connected on port 3000");
});
