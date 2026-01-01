# 🌤️ Weather App (Node.js + Express)

A simple weather application built using Node.js, Express, and the OpenWeatherMap API.
Users can enter a city name and instantly get the current weather details.

- 
👨‍💻 Author
Virendra D. Verma
<a href="https://www.linkedin.com/in/dharmendraverma95/" target="_blank">🧑‍💻 LinkedIn Profile </a> | <a href="https://www.behance.net/dhirukumar" target="_blank">🧑‍💻 Behance Profile </a>

- 


#### 🚀 Features

- Search weather by city name
- Displays:
- City & country
- Temperature (°C)
- Weather condition & description
- Weather icon
- Uses OpenWeatherMap API
- Simple frontend with HTML, CSS, and JavaScript
- Backend built with Express.js

### 🛠️ Technologies Used

- Node.js
- Express.js
- HTTPS module
- OpenWeatherMap API
- HTML, CSS, JavaScript

#### 📂 Project Structure
    weather-app/
    │
    ├── app.js
    ├── package.json
    ├── public/
    │   └── index.html
    └── README.md

### 🌍 How to Use

- Open your browser
- Go to:
- http://localhost:3000

- Enter a city name (e.g., London, Mumbai)
- Click Get Weather
- View the current weather details 🎉

### 🔑 API Key Setup

- This app uses the OpenWeatherMap API.
- Get your free API key from:
-https://openweathermap.org/api
- Replace the API key in app.js:
- const APIID = 'YOUR_API_KEY_HERE';

### ⚠️ Tip: For real projects, store API keys in environment variables instead of hard-coding them.

### ❗ Error Handling

- If the city name is invalid, the app shows:
- City not found. Please try another one.


- Server errors return a friendly message.

### 📸 Preview

- The app shows:
- City & country
- Temperature in °C
- Weather condition
- Description
- Weather icon