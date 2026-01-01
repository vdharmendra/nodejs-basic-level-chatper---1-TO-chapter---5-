// CHAPTER 1
// const express = require("express");
// const bodyParser = require("body-parser");
// const app = express();
// app.get("/", function(req, res){
//     // res.send("Hello");
//     // GET THE CURRENT DATE
//     var today = new Date();
//     var currentday = today.getDay();

//     if(currentday == 0 || currentday == 6){
//         res.write("<h1>Yah!, It's weekend!</h1>");
//     } else {
//         res.sendFile(__dirname+"/index.html");
//     }
// });

// app.listen(3000, function(){
//     console.log("SERVER IS UP AND RUNNING ON PORT 3000");
// });

// CHAPTER 2
// const express = require("express");
// const bodyParser = require("body-parser");

// const app = express();

// app.set("view engine", 'ejs');
// app.get("/", function(req, res){
    // var today = new Date();
    // var currentday = today.getDay();
//     var day = '';

//     if (currentday === 6 || currentday === 0) {
//         day = 'Weekend';
//     } else {
//         day = 'Weekday';
//     }
//     res.render('list', {kindofday: day})
// });
// app.listen(3000, function(){
//     console.log("SERVER IS UP AND RUNNING ON PORT 3000");
// });

// CHAPTER 3
const express = require("express");
const bodyParser = require("body-parser");

const app= express();
app.set("view engine", 'ejs');
app.get("/", function(req, res){
    var today = new Date();
    var currentDay = today.getDay();
    let day ='';

    switch(currentDay){
        case 0:
        day='sunday';
        break;
        case 1:
        day='monday';
        break;
        case 2:
        day='tuesday';
        break;
        case 3:
        day='wednesday';
        break;
        case 4:
        day='thursday';
        break;
        case 5:
        day='friday';
        break;
        case 6:
        day='saturday';
        break;
        default:
            console.log("Error: "+currentDay);
        
    }
    res.render("list", {kindofday:day});
});

app.listen(3000, function(){
    console.log("SERVER IS UP AND RUNNING ON PORT 3000!!");
});