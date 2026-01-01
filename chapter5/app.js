const express = require("express");
const bodyParser = require('body-parser');
const ejs = require("ejs");

const app = express();

let items = ["Buy Food", "Cook Food", "Eat Food"];
let workList = [];

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public")); // For CSS, images, etc.

app.get("/", function(req, res) {
    let today = new Date();
    let options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long'
    }
    let day = today.toLocaleDateString('en-US', options);

    res.render("lists", {
        listTitle: day,
        newListItems: items
    });
});

app.post("/", function(req, res) {
    const item = req.body.newItem;
    if (req.body.submit === "Work") {
        workList.push(item);
        res.redirect('/work');
    } else {
        items.push(item);
        res.redirect("/");
    }
});

app.get("/work", function(req, res) {
    res.render("lists", { listTitle: "Work", newListItems: workList });
});

app.listen(3000, function() {
    console.log("NODEJS APP IS UP AND RUNNING ON PORT 3000!!");
});