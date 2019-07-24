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

       // Transfer content to HTML
       $(".day-1").html("<h1>" + response.list.array[4] + " Weather Details</h1>");
       $("#wind").text("Wind Speed: " + response.wind.speed);
       $("#humidity").text("Humidity: " + response.main.humidity);
       $("#temp").text("Temperature (F) " + response.main.temp.math((temp-273.15)*1.8)+32);

       // Log the data in the console as well
       console.log("Wind Speed: " + response.wind.speed);
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