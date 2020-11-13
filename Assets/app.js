// Elements
var inputCityEl = document.getElementById("cityForm");
var searchEl = document.getElementById("cityButton");
var cityNameEl = document.getElementById("cityName");
var currentTempEl = document.getElementById("temperature");
var currentHumidityEl = document.getElementById("humidity");
var currentWindEel = document.getElementById("wind-speed");
var currentUVEl = document.getElementById("UV-index");
// API Key
const APIkey = "d91f911bcf2c0f925fb6535547a5ddc9";

// weather data
var weather = {};

function getWeather(cityName) {
    var URL = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${APIkey}`;

    fetch(URL)  
    .then(function (response) { 
      return response.json();
    }) 
    .then(function (data) {
      weather.city = data.city.name;
      weather.temperature = data.list[0].main.feels_like;
      weather.humidity = data.list[0].main.humidity;
      weather.wind_speed = data.list[0].wind.speed;
      console.log(data);
      console.log(weather);
    })
    .then(function(){
      showWeather();
    });
  }

inputCityEl.addEventListener("submit", function(e){
  e.preventDefault();
  var text = inputCityEl.value;
  console.log(text);
});

searchEl.addEventListener("click", function (e) {
  e.preventDefault();
  var text = inputCityEl.value;
  console.log(text);
});

function showWeather() {
  // cityNameEl.innerHTML = 
  // currentTempEl.innerHTML =
  // currentHumidityEl.innerHTML =
  // currentWindEel.innerHTML =
  // currentUVEl.innerHTML =
};

  getWeather("Oakland");