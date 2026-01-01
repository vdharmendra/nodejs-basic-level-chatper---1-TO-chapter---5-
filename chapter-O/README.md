# Node.js Learning Project

This repository contains beginner-friendly examples and experiments while learning Node.js concepts step by step.
Each section in index.js represents a different chapter, demonstrating core Node.js features and backend fundamentals.

- 
👨‍💻 Author
Virendra D. Verma
<a href="https://www.linkedin.com/in/dharmendraverma95/" target="_blank">🧑‍💻 LinkedIn Profile </a> | <a href="https://www.behance.net/dhirukumar" target="_blank">🧑‍💻 Behance Profile </a>

- 


### Project Purpose

- The goal of this project is to understand:
- How Node.js works
- Core modules like fs and http
- Building servers
- Using Express.js
- Creating simple REST APIs
- All examples are written in a simple and easy-to-understand way for learning purposes.

### Project Structure
/chapter-0
├── index.js     # Main file with chapter-wise examples
├── data.txt     # File used in File System example
└── README.md

### Chapters Overview
#### Chapter 1 – Hello Node.js

Basic console output to verify Node.js setup.
console.log("Hello, Node.js!");

#### Chapter 2 – Simple Calculator (CLI)

##### A command-line calculator using process.argv.

- Example:
- node index.js 5 + 3
- Outputs:
- 8

#### Chapter 3 – File Read & Write

- Demonstrates usage of the File System (fs) module.
- Writes text to data.txt
- Reads and prints file content
- File used:
- data.txt

#### Chapter 4 – Simple HTTP Server

### Creates a basic HTTP server using Node’s built-in http module.
- Listens on port 3000
- Sends plain text response to the browser

#### Chapter 6 – Express Hello World

### Introduction to Express.js.
- Sets up a simple Express server
- Responds with text on / route

#### Chapter 7 – REST API (CRUD – In-Memory)

### Basic REST API using Express.
- Uses in-memory array to store users
- Supports:
- POST /users → Add user
- GET /users → Get all users
- Demonstrates JSON handling and middleware
- How to Run
- Install Node.js
- Make sure Node.js is installed:
- node -v

- Run any chapter
- Uncomment the relevant chapter code in index.js, then run:
- node index.js

- For server examples
- Open browser and visit:
- http://localhost:3000

## Notes
- Only one chapter should be active at a time
- Comment/uncomment sections as needed
- This project is for learning and practice, not production use

### Technologies Used

- Node.js
- Express.js
-JavaScript                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 