# 📝 Multi-List To-Do App (Node.js + Express + EJS)

A simple yet powerful To-Do List application built using Node.js, Express, and EJS.
This app supports multiple task lists (Home & Work) and demonstrates dynamic routing, form handling, and server-side rendering.


- 
👨‍💻 Author
Virendra D. Verma
<a href="https://www.linkedin.com/in/dharmendraverma95/" target="_blank">🧑‍💻 LinkedIn Profile </a> | <a href="https://www.behance.net/dhirukumar" target="_blank">🧑‍💻 Behance Profile </a>

- 

### 🚀 Project Overview

- This project demonstrates:
- Creating a dynamic to-do list using EJS templates
- Handling GET and POST requests
- Managing multiple lists (default & Work)
- Passing data from client to server
- Conditional logic based on form submission
- Serving static files with Express
- Styling using Bootstrap 5

### ✨ Features

- 📅 Displays current date for the main list
- 🏠 Default (Home) task list
- 💼 Separate Work task list
- ➕ Add new tasks dynamically
- ✔️ Mark tasks as completed (line-through effect)
- 🎨 Clean and responsive UI using Bootstrap

### 🛠️ Technologies Used

- Node.js
- Express.js
- EJS (Embedded JavaScript Templates)
- Body-Parser
- Bootstrap 5
- HTML, CSS, JavaScript

### 📂 Project Structure
multi-list-todo/
│
├── app.js
├── package.json
├── public/
│   └── styles.css
├── views/
│   └── list.ejs
└── README.md


🌐 Usage

Open your browser and go to:

http://localhost:3000

Available Routes

/ → Default (Home) to-do list with date

/work → Work task list

You can add tasks to either list using the same form.

### 🔁 How It Works
- GET /
- Retrieves the current date
- Displays the Home to-do list
- POST /
- Reads the submitted task
- Determines the list using the submit button value
- Adds the task to:
- Home list OR
- Work list
- GET /work

- Displays the Work to-do list

### 📄 File Explanation
-a- pp.js
- Main application file
- Handles routes and list logic
- Controls multiple task arrays
- views/list.ejs
- Reusable EJS template
- Dynamically displays tasks and list title
- Includes checkbox functionality for completed tasks
- public/styles.css
- Custom styling for task completion effects

### 📚 Concepts Covered

- Express routing
- Middleware (body-parser)
- EJS templating
- Dynamic views
- Conditional rendering
- Client-server data flow
- Bootstrap UI integration

### ⚠️ Important Notes
- Tasks are stored in memory
- Data will reset when the server restarts
- This app is intended for learning purposes

### ✨ Possible Improvements

- Add delete/edit functionality
- Store tasks in a database (MongoDB)
- Create custom lists dynamically
- Add user authentication
- Deploy to cloud (Render / Railway)