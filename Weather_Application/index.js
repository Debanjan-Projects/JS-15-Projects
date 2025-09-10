const apiKey = "a5d0410147eeb6af47f287da75bb0f60";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

const checkWeather = async (city) => {
    const response = await fetch(`${apiUrl}${city}&appid=${apiKey}`);

    if (response.status === 404) {
        alert("City not found!");
    } else {
        const data = await response.json();
        console.log(data);

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
        document.querySelector(".weather").style.display = "block";

        // Optional: change icon based on weather
        const weatherMain = data.weather[0].main.toLowerCase();
        if (weatherMain.includes("cloud")) {
            weatherIcon.src = "images/clouds.png";
        } else if (weatherMain.includes("rain")) {
            weatherIcon.src = "images/rain.png";
        } else if (weatherMain.includes("clear")) {
            weatherIcon.src = "images/clear.png";
        } else {
            weatherIcon.src = "images/rain.png";
        }
    }
};

searchBtn.addEventListener("click", () => {
    const city = searchBox.value.trim();
    if (city) {
        checkWeather(city);
    }
});

