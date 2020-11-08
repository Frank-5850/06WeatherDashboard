var inputCityEl = docutment.getElementById("city-form");
var searchEl = document.getElementById("city-button");





function getWeather() {
    var key ='af827e466de01437ddc96d9009bdc6d0';
    fetch('https://api.openweathermap.org/data/2.5/weather?id=' + '5378538' + '&appid=' + key)  
    .then(function(resp) { 
        // Convert data to json
        console.log(resp)
        return resp.json() }) 
    .then(function(data) {
        console.log(data);
        console.log(data.name) })
        // catch any errors
    .catch(function(err) {
        console.log(err);
    });
  }
//   console.log(getWeather)
  getWeather()
//   console.log(getWeather())
