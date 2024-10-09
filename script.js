const apiKey = 'https://api.openweathermap.org/data/2.5/weather?q={city name},{country code}&appid={158df5161fe737f927373071c17d3763}';
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather';

document.getElementById('search-button').addEventListener('click', function() {
    const city = document.getElementById('city-input').value;
    getWeather(city);
});

function getWeather(city) {
    fetch(`${baseUrl}?q=${city}&appid=${apiKey}&units=metric&lang=nb`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('city-name').textContent = `${data.name}, ${data.sys.country}`;
            document.getElementById('temperature').textContent = `${Math.round(data.main.temp)}°C`;
            document.getElementById('description').textContent = data.weather[0].description;
            document.getElementById('min-max-temp').textContent = `${Math.round(data.main.temp_min)}°C / ${Math.round(data.main.temp_max)}°C`;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            alert('Kunne ikke hente værinformasjon.');
        });
}
