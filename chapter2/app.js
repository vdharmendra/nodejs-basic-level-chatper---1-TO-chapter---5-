const express = require("express");
const https = require('https');
const app = express();

// Serve the static HTML page
app.use(express.static("public"));  // "public" is where your HTML file will go

app.get("/weather", (req, res) => {
    const city = req.query.city;
    const APIID = 'd45de9b5a3b7ff3ba024886a596f77ff';
    
    // Generate the URL with the selected city
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIID}&units=metric`;

    https.get(url, function(response) {
        let data = '';

        response.on("data", function(chunk) {
            data += chunk;
        });

        response.on("end", function() {
            const weatherData = JSON.parse(data);

            if (weatherData.cod === 200) {
                // If the city was found, send the weather data as JSON
                const icon = weatherData.weather[0].icon;
                const imgUrl = `https://openweathermap.org/img/wn/${icon}.png`; // Icon URL
                const result = {
                    name: weatherData.name,
                    country: weatherData.sys.country,
                    temp: weatherData.main.temp,
                    weather: weatherData.weather[0],
                    iconUrl: imgUrl
                };
                res.json(result);
            } else {
                // Handle error if the city is not found
                res.json({ error: "City not found. Please try another one." });
            }
        });

        response.on("error", function(err) {
            console.log("Error fetching weather data:", err);
            res.status(500).send("Sorry, there was an error fetching the weather data.");
        });
    });
});

// Start the server
app.listen(3000, () => {
    console.log("App is running on port 3000!");
});
