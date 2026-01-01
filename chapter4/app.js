// PASSING DATA FROM YOUR WEBPAGE TO YOUR SERVER

// jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const app = express();

var items = ["buy food", "Cook food", "eat food"];

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));
// GET REQUEST
app.get("/", function(req, res){
    var today = new Date();
    var options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long'
    };
    var day = today.toLocaleDateString('en-US', options);
    res.render('list', {kindofDay:day, newListItems: items});
});


app.post("/", function(req, res){
    var item = req.body.newItem;
    console.log(items);
    console.log(req.body);
    console.log(req.params);
items.push(item);
res.redirect('/');
})


app.listen(3000,function(){
    console.log("APP IS UP AND RUNNNING ON PORT 3000!!");
});