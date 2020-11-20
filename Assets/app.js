// Elements
var inputCityEl = document.getElementById("citySearch");
var searchEl = document.getElementById("cityButton");
var cityNameEl = document.getElementById("cityName");
var currentTempEl = document.getElementById("temperature");
var currentHumidityEl = document.getElementById("humidity");
var currentWindEel = document.getElementById("wind-speed");
var currentUVEl = document.getElementById("UV-index");
var currentDay = document.getElementById("today");
var currentDescription = document.getElementById("description")
var form = document.getElementById("cityForm")
var oneDay = document.getElementById("oneDayAfter");
var twoDay = document.getElementById("twoDaysAfter");
var threeDay = document.getElementById("threeDaysAfter");
var fourDay = document.getElementById("fourDaysAfter");
var fiveDay = document.getElementById("fiveDaysAfter");


// API Key
const APIkey = "d91f911bcf2c0f925fb6535547a5ddc9";

// weather data
var weather = {};
var weatherOne = {};
var weatherTwo = {};
var weatherThree = {};
var weatherFour = {};
var weatherFive = {};

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
      weather.temperature = Math.floor((data.list[0].main.feels_like - 273)* 9/5 + 32);
      weather.humidity = data.list[0].main.humidity;
      weather.wind_speed = data.list[0].wind.speed;
      weatherOne.city = data.city.name;
      weatherOne.description = data.list[3].weather[0].description;
      weatherOne.temperature = Math.floor((data.list[3].main.feels_like - 273)* 9/5 + 32);
      weatherOne.humidity = data.list[3].main.humidity;
      weatherOne.wind_speed = data.list[3].wind.speed;
      console.log(data);
      console.log(weather);
      console.log(weatherOne); 
    })
    .then(function(){
      showWeather();
    });
  }

  form.addEventListener("submit", function(e){
  e.preventDefault();
  var text = inputCityEl.value;
  return getWeather(text);
});

searchEl.addEventListener("click", function (e) {
  e.preventDefault();
  var text = inputCityEl.value;
  return getWeather(text)
});

// This gets the current date
var today = new Date();
console.log(today.getMonth() + "/" + today.getDate() + "/" + today.getFullYear())

// Display to the HTML
function showWeather() {
  currentDay.innerHTML = (today.getMonth() + "/" + today.getDate() + "/" + today.getFullYear());
  cityNameEl.innerHTML = `${weather.city}`;
  currentDescription.innerHTML = `${weather.description}`;
  currentTempEl.innerHTML = `${weather.temperature}° F`;
  currentHumidityEl.innerHTML =`Humidity: ${weather.humidity}%`;
  currentWindEel.innerHTML =`${weather.wind_speed}` + " mph";
  oneDay.innerHTML = (today.getMonth() + "/" + today.getDate() + "/" + today.getFullYear())
  oneDay.append(` ${weatherOne.city}     ${weatherOne.description} ${weather.temperature}° F  Humidity: ${weather.humidity}% ${weather.wind_speed} mph`)
}
