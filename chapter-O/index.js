// CHAPTER 1
// console.log("Hello, Node.js!");

// CHAPTER 2 - Simple Calculator
// const [,,a,op,b] = process.argv;

// const num1 = Number(a);
// const num2 = Number(b);

// if(op === "+") console.log(num1 + num2);
// if(op === "-") console.log(num1 - num2);


// CHAPTER 3 - FILE READ & WRITE APP
   
// const fs = require("fs");

// fs.writeFileSync("data.txt", "Hello File System.\n My Name is John Doe");
// const data = fs.readFileSync("data.txt", "utf-8");

// console.log(data);

// CHAPTER 4 - SIMPLE HTTP SERVER

// const http = require("http");
// const server = http.createServer((req, res) => {
//     res.write("Hello from server");
//     res.end();
// });
// server.listen(3000);

// const http = require("http");
// const server = http.createServer((req, res) => {
//     res.write("Hello from server");
//     res.end();
// });
// server.listen(3000);

// const http = require("http");
// const server = http.createServer((req, res) => {
//     res.write("Hello World!\nServer is up and running on server 3000");
//     res.end();
// });
// server.listen(3000);



// CHAPTER 6 - Express Hello World
// const express = require("express");
// const app = express();
// app.get("/", (req,res) => {
//     res.send("Hello Express");
// });
// app.listen(3000);

// const express = require("express");
// const app = express();
// app.get("/",(req,res) => {
//     res.send("Hello World!,\nThis is new world Order.\nMy Name is John Doe.\nSEE YOU ON OTHER SIDE COPPER");
// });
// app.listen(3000);


// const express = require("express");
// const app = express();
// app.get("/", (req,res) => {
//     res.send("Hello Express!! ITS HEAD AND TAIL AT SAMETIME");
// });
// app.listen(3000);

// CHAPTER 7 - REST API (CRUD - IN - MEMORY)
// const express = require("express");
// const app = express();
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// let users = [];
// app.post("/users", (req, res) => {
//     users.push(req.body);
//     console.log(req.body);
//     res.send("User added");
// });
// app.get("/users", (req, res) => {
//     res.json(users);
// });
// app.listen(3000);