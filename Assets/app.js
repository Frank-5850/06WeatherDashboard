var inputCityEl = document.getElementById("cityForm");
var searchEl = document.getElementById("cityButton");
var cityNameEl = document.getElementById("cityName");
var currentTempEl = document.getElementById("temperature");
var currentHumidityEl = document.getElementById("humidity");
var currentWindEel = document.getElementById("wind-speed");
var currentUVEl = document.getElementById("UV-index");

const APIkey = "d91f911bcf2c0f925fb6535547a5ddc9";

function getWeather(cityName) {
    var URL = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${APIkey}`;

    fetch(URL)  
    .then(function (response) { 
      return response.json();
    }) 
    .then(function (data) {
      console.log(data);
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

// function showWeather(cityName) {
//   cityNameEl.innerHTML= data.city.name
// }

  getWeather("emeryville");