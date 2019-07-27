/**WEATHER API
 * DEFAULT ON HOURLY
 
 *Search bar
 * MAKE SEARCH FORM CLICKABLE AND SEARCHABLE
 * https://openweathermap.org/current
 
 */
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function (position) {
    var pos = [
      position.coords.latitude,
      position.coords.longitude
    ];
    var WAPIKey = "dda695a70c57593ba9c2432172634826";
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?" +
      "lat=" + pos[0] + "&lon=" + pos[1] + "&appid=" + WAPIKey;

    $.ajax({
      url: queryURL,
      method: "GET"
    })
      // We store all of the retrieved data inside of an object called "response"
      .then(function (response) {
       // Log the resulting object
       console.log(response);
       var tempF = parseInt((response.main.temp - 273.15) * 1.80 + 32);
       // Transfer content to HTML
       $("#logo").append("<h3>Today's Weather   " + tempF + "(F)</h3>");
       $("#logo").append("Wind Speed: " + response.wind.speed + "<br>");
       $("#logo").append("Humidity: " + response.main.humidity + "%");
       $("#homepageText").append("Today's Weather Forecast is " + tempF + "(F) with " + response.weather[0].main + " Skies with " + response.wind.speed + " MPH Winds")
//NEED TO CONVERT KELVIN TO F
       // Log the data in the console as well
     });

        // Log the resulting object
        console.log(response);
        var tempF = parseInt((response.main.temp - 273.15) * 1.80 + 32);
        // Transfer content to HTML
        $("#today").html("<h3>Today's Weather   " + tempF + "(F)</h3>");
        $("#today").append("Wind Speed: " + response.wind.speed + "<br>");
        $("#today").append("Humidity: " + response.main.humidity);
        $("#homepageText").html("<h1>Today's Weather Forecast is " + tempF + "(F) with " + response.weather[0].main + " Skies with " + response.wind.speed + " MPH Winds")
        //NEED TO CONVERT KELVIN TO F
        // Log the data in the console as well
      });

  }, function () {
    handleLocationError(true, infoWindow, map.getCenter());
  });
} else {
  // Browser doesn't support Geolocation
  handleLocationError(false, infoWindow, map.getCenter());
}