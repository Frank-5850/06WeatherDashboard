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
var forecast = document.getElementById("forecast")
var oneDay= document.getElementById("oneDayAfter");
var twoDay= document.getElementById("twoDaysAfter");
var threeDay= document.getElementById("threeDaysAfter");
var fourDay= document.getElementById("fourDaysAfter");
var fiveDay= document.getElementById("fiveDaysAfter");

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
      console.log(data);
      weather.name = data.city.name;
      weather.data = data.list;
      console.log(weather)
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
  cityNameEl.innerHTML = `${weather.name}`;
  currentDescription.innerHTML = `${weather.data[0].weather[0].description}`;
  currentTempEl.innerHTML = `${Math.floor((weather.data[0].main.feels_like - 273)* 9/5 + 32)}° F`;
  currentHumidityEl.innerHTML =`Humidity: ${weather.data[0].main.humidity}%`;
  currentWindEel.innerHTML =`${weather.data[0].wind.speed}` + " mph"; 

  for (let i = 0; i < weather.data.length; i++) {
    // console.log(weather.data[i])
    var date = new Date(weather.data[i].dt * 1000)
    var days = ['Sun','Mon','Tues','Wed','Thurs','Fri','Sat']
    var newDate = days[date.getDay()]
    weather.data[i].dt = newDate
    console.log(weather.data[i].dt)
  }
  var dayOne = document.createElement("div");
  dayOne.innerHTML = `<div class="forecast-item__heading">${weather.data[6].dt}</div>
    <div class="forecast-item__info"><span class="degrees">${Math.floor((weather.data[6].main.feels_like - 273)* 9/5 + 32)}° F</span></div>`;
  oneDay.appendChild(dayOne);

  var dayTwo = document.createElement("div");
  dayTwo.innerHTML = `<div class="forecast-item__heading">${weather.data[14].dt}</div>
    <div class="forecast-item__info"><span class="degrees">${Math.floor((weather.data[14].main.feels_like - 273)* 9/5 + 32)}° F</span></div>`;
  twoDay.appendChild(dayTwo);

  var dayThree = document.createElement("div");
  dayThree.innerHTML = `<div class="forecast-item__heading">${weather.data[22].dt}</div>
    <div class="forecast-item__info"><span class="degrees">${Math.floor((weather.data[22].main.feels_like - 273)* 9/5 + 32)}° F</span></div>`;
  threeDay.appendChild(dayThree);

  var dayFour = document.createElement("div");
  dayFour.innerHTML = `<div class="forecast-item__heading">${weather.data[30].dt}</div>
    <div class="forecast-item__info"><span class="degrees">${Math.floor((weather.data[30].main.feels_like - 273)* 9/5 + 32)}° F</span></div>`;
  fourDay.appendChild(dayFour);

  var dayFive = document.createElement("div");
  dayFive.innerHTML = `<div class="forecast-item__heading">${weather.data[38].dt}</div>
    <div class="forecast-item__info"><span class="degrees">${Math.floor((weather.data[38].main.feels_like - 273)* 9/5 + 32)}° F</span></div>`;
  fiveDay.appendChild(dayFive);
};
