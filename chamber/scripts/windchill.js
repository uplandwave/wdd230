// Function to fetch weather data for a specific city
async function getWeather(city) {
    const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=43.826&longitude=-111.7897&current=temperature_2m,wind_speed_10m&temperature_unit=fahrenheit&wind_speed_unit=mph&precipitation_unit=inch&timezone=America%2FDenver`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        return data.current; // Return the current weather data
    } catch (error) {
        console.error('Error fetching weather data:', error);
        return null; // Return null if an error occurs
    }
}

// Function to calculate wind chill factor
function calculateWindChill(temperature, windSpeed) {
    // Check if temperature and wind speed meet the specification limits
    if (temperature <= 50 && windSpeed > 3.0) {
        // Calculate wind chill factor
        var windChill = 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16);
        return windChill.toFixed(2); // Round to 2 decimal places
    } else {
        return "N/A"; // Not applicable
    }
}

// Specify the city for which you want to fetch weather data
var city = "Rexburg"; // Change this to the desired city

// Fetch weather data for the specified city
getWeather(city)
    .then(currentWeather => {
        // Extract temperature and wind speed from the current weather data
        const temperature = currentWeather.temperature_2m;
        const windSpeed = currentWeather.wind_speed_10m;

        // Get temperature and wind speed from HTML elements
        var temperatureElement = document.getElementById("temperature");
        var windSpeedElement = document.getElementById("windSpeed");

        // Update temperature and wind speed in HTML
        temperatureElement.textContent = temperature.toFixed(1); // Round to 1 decimal place
        windSpeedElement.textContent = windSpeed.toFixed(1); // Round to 1 decimal place

        // Calculate wind chill and update HTML
        var windChillElement = document.getElementById("windChill");
        windChillElement.textContent = calculateWindChill(temperature, windSpeed);
    })
    .catch(error => {
        console.error('Error fetching weather data:', error);
    });