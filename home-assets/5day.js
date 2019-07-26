if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
        var pos = [
         position.coords.latitude,
         position.coords.longitude
    ];
    var WAPIKey = "dda695a70c57593ba9c2432172634826";
var queryURL = "https://api.openweathermap.org/data/2.5/forecast?" +
   "lat="+ pos[0] +"&lon="+ pos[1] +"&appid=" + WAPIKey;

   
   $.ajax({
     url: queryURL,
     method: "GET"
   })
     // We store all of the retrieved data inside of an object called "response"
     .then(function(response) {

       // Log the queryURL
       console.log(queryURL);

       // Log the resulting object
       console.log(response);
       var tempF1 = parseInt((response.list[4].main.temp - 273.15) * 1.80 + 32);
       var tempF2 = parseInt((response.list[12].main.temp - 273.15) * 1.80 + 32);
       var tempF3 = parseInt((response.list[20].main.temp - 273.15) * 1.80 + 32);
       var tempF4 = parseInt((response.list[28].main.temp - 273.15) * 1.80 + 32);
       var tempF5 = parseInt((response.list[36].main.temp - 273.15) * 1.80 + 32);

       Math.floor(tempF1)



       // Transfer content to HTML
       $("#day-1").html("<p>Temperature (F)" + tempF1 + "</p>");
       $("#day-2").html("<p>Temperature (F) "+ tempF2 + "</p>");
       $("#day-3").html("<p>Temperature (F) " + tempF3 + "</p>");
       $("#day-4").html("<p>Temperature (F) " + tempF4 + "</p>");
       $("#day-5").html("<p>Temperature (F) " + tempF5 + "</p>")

       // Log the data in the console as well
       console.log("Wind Speed: " + response.list[4].main.temp );
       console.log("Humidity: " + response.main.humidity);
       console.log("Temperature (F): " + response.main.temp);
     });

    }, function () {
        handleLocationError(true, infoWindow, map.getCenter());
    });
} else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
}