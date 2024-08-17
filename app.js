const base_URL = "http://api.weatherapi.com/v1/current.json?key=97b3135bfa2c4e3faad181503241508&q=";

let input = document.querySelector("input");
let search = document.querySelector(".search-icon");

async function checkweather(city) {
    const response = await fetch(base_URL + city + "&aqi=no");
    var data = await response.json();
    
    document.querySelector(".city-temp").innerText = Math.round(data.current.temp_c) + "°C";
    document.querySelector("#humidity-here").innerText = data.current.humidity + "%"
    document.querySelector("#speed-here").innerText = data.current.wind_kph + " Km/h";
    document.querySelector(".city-name").innerText = city + ", " + data.current.condition.text;
    document.querySelector("#wethr-icon").src = data.current.condition.icon;
}

search.addEventListener("click", () => {
    checkweather(input.value);
    input.value = "";
})