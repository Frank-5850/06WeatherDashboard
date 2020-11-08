var inputCityEl = document.getElementById("city-form");
var searchEl = document.getElementById("city-button");
var cityNameEl = document.getElementById("city-name");
var currentTempEl = document.getElementById("temperature");
var currentHumidityEl = document.getElementById("humidity");
var currentWindEel = document.getElementById("wind-speed");
var currentUVEl = document.getElementById("UV-index");

const APIkey = "af827e466de01437ddc96d9009bdc6d0";

function getWeather(cityName) {
    let URL = 'https://api.openweathermap.org/data/2.5/weather?id=' + cityName + '&appid=' + APIkey;
    fetch(URL)  
    .then(function(resp) { 
        console.log(resp) })
        // Convert data to json
//         console.log(resp)
        return resp.json() } 
    // .then(function(data) {
//         console.log(data);
//         console.log(data.name) })
//         // catch any errors
//     .catch(function(err) {
//         console.log(err);
//     });

// //   console.log(getWeather)
  getWeather()
// //   console.log(getWeather())
    