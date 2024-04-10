fetch(`https://api.openweathermap.org/data/2.5/weather?lat=43.826&lon=-111.7897&appid=97ce948849db0b090867d857dcdb694c&units=imperial`)

    .then((response) => response.json())
    .then((data) => {
        const temperature = Math.round(data.main.temp);

        // const roundedTemp = Math.round(data.main.temp); 
        // currentTemp.innerHTML = `${roundedTemp}&deg;F`;

        const weatherConditionData = data.weather[0].description;
        const weatherIcon = data.weather[0].icon;
        const humidity = data.main.humidity;

        // console.log(temperature)

        document.getElementById('current-temp').textContent = temperature + ' °F';
        document.getElementById('weather-description').textContent = weatherConditionData;
        document.getElementById('current-weather-icon').setAttribute('src', `https://openweathermap.org/img/wn/${weatherIcon}@2x.png`);
        // document.getElementById('humidity').textContent = humidity + '%';
    })
    .catch((error) => {
        console.log('An error occurred while fetching current weather data:', error);
        document.getElementById('current-weather').textContent = 'Failed to fetch current weather data';
    });