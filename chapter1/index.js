// CHAPTER 1 - NPM PACKAGE

// var superHero = require("superheros");
// // var  mySuperHero = superHero.random();
// console.log(superHero());


// ###########################################
// CHAPTER 2 - NPM PACKAGE
// var randomSupervillain = require("supervillains");
// console.log(randomSupervillain);


// ###########################################
//  CHAPTER 3 - EXPRESS PACKAGE
/* jshint esversion: 6 */
// const express = require("express");
// const app = express();

// // app.get("/", (req, res) => {
// //     res.send("Hello");
// // });
// // app.get("/",(req, res) => {
// //     res.send("<h1>Hello World!!</h1>");
// // })

// app.listen(3000, function(){
//     console.log("Server is Up and Running onm port 3000");
// });



// ###########################################
// #UNDERSTANDING & WORKING WITH ROUTES
// const express = require("express");
// const app = express();
// app.get("/",  (req, res)=>{
//     res.send("<h1>Nodejs | EXPRESS </h1>");
// });
// app.listen(3000, (req,res)=>{
//     console.log("APP IS UP AND RUNNING ON PORT 3000");
// });



// ###########################################
// ### ADDING ABOUTUS ROUTE
// const express = require("express");
// const app = express();
// app.get("/", (req, res) => {
//     res.send("HOME PAGE | NODEJS | EXPRESS");
//     console.log("HOME PAGE | NODEJS | EXPRESS");
// });
// app.get("/about", (req,res)=>{
//     res.send("ABOUT US PAGE | THIS IS ABOUT US PAGE");
//     console.log("ABOUT US PAGE | THIS IS ABOUT US PAGE");
// });
// app.listen(3000, (req,res)=>{
//     console.log("APP IS UP AND RUNNING ON PORT 3000");
// });

// ###########################################
// ### ADDING MULTIPLE PAGE ROUTE
// const express = require("express");
// const app = express();
// app.get("/", (req, res)=>{
//     res.send("HOME PAGE ROUTE");
// });
// app.get("/aboutus", (req, res) => {
//     res.send("ABOUT US PAGE ROUTE");
// });
// app.get("/contact", (req,res)=>{
//     res.send("CONTACT US PAGE ROUTE");
// });
// app.get("/services", (req, res) =>{
//     res.send("SERVICES PAGE ROUTE");
// });
// app.get("/termsandcondition", (req, res) => {
//     res.send("TERM & CONDITION PAGE ROUTE");
// });
// app.get("/policy", (req, res) => {
//     res.send("PRIVATE POLICY PAGE ROUTE");
// });
// app.listen(3000, (req,res)=>{
//     console.log("App is up and running on port 3000");
// });

// ### NODEMON JS PACKAGE :- npm install -g nodemon


// ###########################################
// ### Processing POST REQUEST WITH BODYPARSER
// ### CREATING A CALCULATER
// const express = require("express");
// const bodyParser = require("body-parser");
// const app = express();
// app.use(bodyParser.urlencoded({extended: true}));
// app.get("/", (req, res)=>{
//     res.sendFile(__dirname+"/cal.html");
// });
// app.post("/", (req,res) => {
//     var num1 = Number(req.body.weight);
//     var num2 = Number(req.body.height);

//     var result = num1 / (num2*num2);
//     res.send("Our BMI Result is" + result);
// });
// app.listen(3000, (req,res)=>{
//     console.log("SERVER START ON PORT 3000");
// });

// ###########################################
// const express = require("express");
// const app = express();
// app.use(express.urlencoded({ extended: true }));
// app.get("/", (req, res) => {
//     res.sendFile(__dirname + "/cal.html");
// });
// app.post("/", (req, res) => {
//     const weight = Number(req.body.weight);
//     const height = Number(req.body.height);

//     const bmi = weight / (height * height);

//     res.send("Our BMI Result is " + bmi);
// });
// app.listen(3000, () => {
//     console.log("SERVER STARTED ON PORT 3000");
// });
// ###########################################
// const express = require("express");
// const app = express();

// app.use(express.urlencoded({extended: true}));
// app.get("/", (req, res) =>{
//     res.sendFile(__dirname+"/cal.html");
// });
// app.post('/', (req, res) =>{
//     const weight = req.body.weight;
//     const height = req.body.height;

//     let result = weight / (height*height);

//     res.send("Your BIM is "+ result);
// });
// app.listen(3000, (req, res)=>{
//     console.log("APP IS UP AND RUNNING ON PORT 3000");
// });

// ###########################################
// const express = require("express");
// const app = express();
// app.use(express.urlencoded({extended: true}));
// app.get("/", (req, res) => {
//     res.sendFile(__dirname+"/cal.html");
// });
// app.post("/", (req, res) => {
//     const weight = req.body.weight;
//     const height = req.body.height;

//     let result;
//     result = (weight / (height*height));

//     res.send("Your BMI is"+ result);
// });
// app.listen(3000,()=>{
//     console.log("NODEJS APP IS START UP AND RUNNING ON PORT 3000!!!!");
// });

// ###########################################
// 1. Basic Arithmetic Calculator
// const express = require("express");
// const app = express();

// app.use(express.urlencoded({extended: true}));

// app.get("/", (req, res) => {
//     res.sendFile(__dirname+"/calculator.html");
// });
// app.post("/", (req, res) => {
//     const num1 = Number(req.body.num1);
//     const num2 = Number(req.body.num2);
//     const op = req.body.op; // value from radio button

//     let result;

//     function add(a, b) {
//         return a + b;
//     }

//     function subs(a, b) {
//         return a - b;
//     }

//     function multi(a, b) {
//         return a * b;
//     }

//     function divide(a, b) {
//         return b !== 0 ? a / b : "Cannot divide by zero";
//     }

//     switch (op) {
//         case "add":
//             result = add(num1, num2);
//             break;

//         case "subs":
//             result = subs(num1, num2);
//             break;

//         case "multi":
//             result = multi(num1, num2);
//             break;

//         case "divide":
//             result = divide(num1, num2);
//             break;

//         default:
//             result = "Invalid operation";
//     }

//     res.send("Answer is: " + result);
// });


// app.listen(3000, ()=>{
//     console.log("SERVER IS UP AND RUNNING ON PORT 3000!!!!");
// });