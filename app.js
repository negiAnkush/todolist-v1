const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));

var items = ["Eat", "Sleep", "Run"];

app.get("/", function(req, res){
  //res.sendFile(__dirname + "/index.html");
  //res.send("hello word");
  var today = new Date();
  var options = {
    weekday: "long",
    day: "numeric",
    month:"long"
  };

  var day = today.toLocaleDateString("en-US", options);
  res.render("list", {kindOfDay: day, newListIteam: items});

});

app.post("/", function(req, res){
  var item = req.body.task;
  items.push(item);
  res.redirect("/");
});

app.listen(3000, function(){
  console.log("server start at port 3000");
})
