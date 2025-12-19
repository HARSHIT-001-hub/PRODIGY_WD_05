const apikey="d72a6e9307861b19d5727694c5792ff0";

function getWeather(){
    const city = document.getElementById('city').value;
    if(city === ""){
        alert("Please Enter a City name");
        return;
    }
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`

    fetch(url)
    .then(response => response.json())
    .then(data => {
                    const weatherResult = document.getElementById("weatherResult");

            weatherResult.innerHTML = `
                <h3>${data.name}, ${data.sys.country}</h3>
                <p>🌡 Temperature: ${data.main.temp} °C</p>
                <p>☁ Weather: ${data.weather[0].description}</p>
                <p>💨 Wind Speed: ${data.wind.speed} m/s</p>
            `;
    })

            .catch(error => {
            alert("City not found!");
        });
}