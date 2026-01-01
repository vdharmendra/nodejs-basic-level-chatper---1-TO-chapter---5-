# 📅 Day Checker App (Node.js + Express + EJS)

A simple Node.js application that determines the current day of the week and displays it using EJS templates.
This project demonstrates the use of Express, EJS, and basic server-side logic.

- 
👨‍💻 Author
Virendra D. Verma
<a href="https://www.linkedin.com/in/dharmendraverma95/" target="_blank">🧑‍💻 LinkedIn Profile </a> | <a href="https://www.behance.net/dhirukumar" target="_blank">🧑‍💻 Behance Profile </a>

- 


### 🚀 Project Overview

- Detects the current day using JavaScript Date
- Renders dynamic content with EJS
- Demonstrates progression through:
- Basic Express routing
- Conditional logic
- Template rendering
- Clean and responsive UI using inline CSS

### 🛠️ Technologies Used

- Node.js
- Express.js
- EJS (Embedded JavaScript Templates)
- Body-parser (included for learning purposes)
- HTML & CSS

### 📂 Project Structure
day-checker-app/
│
├── app.js
├── package.json
├── index.html
├── views/
│   └── list.ejs
└── README.md


### 🌐 How It Works

- The server listens on port 3000
- When the user visits /:
- The current day is fetched using new Date().getDay()
- A switch statement converts the number into a day name
- The result is passed to an EJS template
- The day is displayed dynamically on the page

### 🖥️ Usage

- Open your browser and visit:

- http://localhost:3000


- You will see something like:

- Today is
- Monday
- Have a great day!

### 📄 File Explanation
- app.js
- Main server file
- Handles routing
- Determines the current day
- Renders the EJS template
- views/list.ejs
- EJS template
- Displays the current day dynamically
- Styled with modern CSS
- index.html
- Used in earlier learning chapters
- Demonstrates basic static HTML serving

### 📚 Learning Chapters

- Chapter 1: Basic Express server & conditional logic
- Chapter 2: Introduction to EJS templates
- Chapter 3: Switch-case logic with dynamic rendering

### ✨ Possible Improvements

- Capitalize day names dynamically
- Add weekend/weekday messages
- Separate CSS into a public folder
- Use environment variables
- Add routing for multiple pages