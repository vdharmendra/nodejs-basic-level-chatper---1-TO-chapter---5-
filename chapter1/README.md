# Node.js & Express Learning Project

This repository is a hands-on learning project covering core Node.js, NPM packages, and Express.js concepts.
The project is organized chapter-wise inside a single index.js file, where each section demonstrates a different concept or mini-application.

This is ideal for beginners who want to understand backend fundamentals step by step.

- 
👨‍💻 Author
Virendra D. Verma
<a href="https://www.linkedin.com/in/dharmendraverma95/" target="_blank">🧑‍💻 LinkedIn Profile </a> | <a href="https://www.behance.net/dhirukumar" target="_blank">🧑‍💻 Behance Profile </a>

- 


### Project Objectives

- Learn how to use NPM packages
- Understand Express.js basics
- Work with routes
- Handle GET & POST requests
- Build simple web applications like:
- BMI Calculator
- Arithmetic Calculator
- Use HTML forms with Express


### Chapters Overview
#### Chapter 1 – Using NPM Packages (superheros)

- Demonstrates how to install and use an external NPM package.
- Generates a random superhero name
- Uses require() to import the package

#### Chapter 2 – Using NPM Packages (supervillains)

- Demonstrates usage of another NPM package.
- Generates random supervillain names
- Reinforces understanding of NPM ecosystem

#### Chapter 3 – Express Package (Hello World)

##### Introduces Express.js:
- Creating an Express server
- Listening on port 3000
- Sending a basic response
- Understanding & Working with Routes

##### Explains routing in Express:
- Root route (/)
- Multiple routes like:
- /about
- /contact
- /services
- /policy

- Shows how to send different responses for each route

Using Nodemon

##### Introduces nodemon for automatic server restarts:

- npm install -g nodemon
- Processing POST Requests (BMI Calculator)
- Demonstrates:
- Handling HTML form submissions
- Using body-parser / express.urlencoded
- Calculating BMI
- Sending calculated result as response

##### Uses:

- calc.html for BMI input form
- Arithmetic Calculator (HTML + Express)
- A complete mini web app that performs:
- Addition
- Subtraction
- Multiplication
- Division

##### Features:

- HTML form (calculator.html)
- Radio buttons to select operation
- POST request processing
- Dynamic calculation using Express
- How to Run the Project

1. Install Node.js

- Make sure Node.js is installed:
- node -v

2. Install Dependencies

##### If required:

- npm install express body-parser superheros supervillains

3. Run the Application

- Uncomment one chapter at a time in index.js, then run:
- node index.js


##### or using nodemon:

nodemon index.js

4. Open Browser

##### Visit:

- http://localhost:3000

- Important Notes
- Only one Express server block should be active at a time
- This project is meant for learning & experimentation
- Code is intentionally verbose and commented for clarity

### Technologies Used

- Node.js
- Express.js
- NPM
- HTML
- Bootstrap (UI styling)