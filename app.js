const base_URL = "http://api.weatherapi.com/v1/current.json?key=97b3135bfa2c4e3faad181503241508&q=London&aqi=no";

let input = document.querySelector("input");
let search = document.querySelector(".search-icon");

async function checkweather() {
    const response = await fetch(base_URL)   ;
    var data = await response.json();
    console.log(data.current);
    
    document.querySelector(".city-temp").innerText = Math.round(data.current.temp_c) + "°C";
    document.querySelector("#humidity-here").innerText = data.current.humidity + "%"
    document.querySelector("#speed-here").innerText = data.current.wind_kph + " Km/h";
}