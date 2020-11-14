// Elements
var inputCityEl = document.getElementById("cityForm");
var searchEl = document.getElementById("cityButton");
var cityNameEl = document.getElementById("cityName");
var currentTempEl = document.getElementById("temperature");
var currentHumidityEl = document.getElementById("humidity");
var currentWindEel = document.getElementById("wind-speed");
var currentUVEl = document.getElementById("UV-index");
var currentDay = document.getElementById("today");
var currentDescription = document.getElementById("description")
// API Key
const APIkey = "d91f911bcf2c0f925fb6535547a5ddc9";

// weather data
var weather = {};

// function that gathers data from API and adds to weather object
function getWeather(cityName) {
    var URL = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${APIkey}`;

    fetch(URL)  
    .then(function (response) { 
      return response.json();
    }) 
    .then(function (data) {
      weather.city = data.city.name;
      weather.description = data.list[0].weather[0].description;
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
  return getWeather(text)
  console.log(text);
});

// This gets the current date
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth()).padStart(2,'0');
var yyyy = today.getFullYear();
today = mm + "/" + dd + "/" + yyyy;
console.log(today);

// Display to the HTML
function showWeather() {
  // currentDay.innerHTML = write(today);
  cityNameEl.innerHTML = `${weather.city}`;
  currentDescription.innerHTML = `${weather.description}`;
  currentTempEl.innerHTML = `${weather.temperature}`;
  currentHumidityEl.innerHTML =`${weather.humidity}`;
  currentWindEel.innerHTML =`${weather.wind_speed}`;
};

getWeather("Oakland");