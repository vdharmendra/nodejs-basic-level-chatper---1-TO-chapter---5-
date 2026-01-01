# ✅ To-Do List App (Node.js + Express + EJS)

A simple To-Do List application built with Node.js, Express, and EJS, demonstrating how to pass data from the client (webpage) to the server using HTML forms and POST requests.

- 
👨‍💻 Author
Virendra D. Verma
<a href="https://www.linkedin.com/in/dharmendraverma95/" target="_blank">🧑‍💻 LinkedIn Profile </a> | <a href="https://www.behance.net/dhirukumar" target="_blank">🧑‍💻 Behance Profile </a>

- 


### 🚀 Project Overview

- This project helps you understand:
- How to handle GET and POST requests
- How to pass data from the client to the server
- How to render dynamic content using EJS templates
- How to use body-parser to read form data
- How to serve static files (CSS) in Express

### ✨ Features

- Displays today’s date dynamically
- Shows a list of to-do items
- Add new items using a form
- Items update instantly after submission
- Responsive and modern UI
- Line-through effect when items are checked

### 🛠️ Technologies Used

- Node.js
- Express.js
- EJS (Embedded JavaScript Templates)
- Body-Parser
- HTML & CSS

### 📂 Project Structure
todo-list-app/
│
├── app.js
├── package.json
├── public/
│   └── css/
│       └── style.css
├── views/
│   └── list.ejs
└── README.md


### 🌐 Usage
- Open your browser and visit:
- http://localhost:3000

- You can:
- View today’s date
- See existing to-do items
- Add new items using the input field
- Check items to mark them as completed

## 🔁 How It Works
- GET /
- Fetches the current date
- Sends the date and to-do items array to the EJS template
- Renders the list dynamically
- POST /
- Receives the new item from the form
- Pushes it into the items array
- Redirects back to / to update the UI

### 📄 File Explanation
- app.js
- Main server file
- Handles routing (GET & POST)
- Manages the to-do list array
- Passes data to EJS views
- views/list.ejs
- Displays the date and to-do items
- Uses EJS loops and conditionals
- Contains the form to add new items
- public/css/style.css
- Styles the application
- Adds checkbox animations and responsive layout

### 📚 Learning Concepts Covered
- Express routing
- Middleware usage
- Form handling
- Server-side rendering
- Passing data between client & server
- EJS templating
- Static file serving