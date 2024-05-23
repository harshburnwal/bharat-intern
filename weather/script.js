document.getElementById('search-button').addEventListener('click', function() {
    const apiKey = '4eb3703790b356562054106543b748b2';
    const city = document.getElementById('city-input').value;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const location = `${data.name}, ${data.sys.country}`;
            const date = new Date().toLocaleDateString('en-US', {
                weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
            });
            const temperature = `${Math.round(data.main.temp)}°C`;
            const weather = data.weather[0].main;
            const tempRange = `${Math.round(data.main.temp_min)}°C / ${Math.round(data.main.temp_max)}°C`;

            document.getElementById('location').textContent = location;
            document.getElementById('date').textContent = date;
            document.getElementById('temperature').textContent = temperature;
            document.getElementById('weather').textContent = weather;
            document.getElementById('temp-range').textContent = tempRange;
        })
        .catch(error => {
            alert('City not found. Please try again.');
            console.error('Error fetching the weather data:', error);
        });
});
