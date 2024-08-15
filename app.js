const base_URL = "http://api.weatherapi.com/v1/current.json?key=97b3135bfa2c4e3faad181503241508&q=London&aqi=no";

let input = document.querySelector("input");
let search = document.querySelector(".search-icon");


search.addEventListener("click", () => {
    var city = input.value;

})
