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
       
       var weatherD1 = response.list[4].weather[0].main
       var weatherD2 = response.list[12].weather[0].main
       var weatherD3 = response.list[20].weather[0].main
       var weatherD4 = response.list[28].weather[0].main
       var weatherD5 = response.list[36].weather[0].main
       // Transfer content to HTML
       $("#day-1").html("<p>Temperature (F) " + tempF1 + "<br>" + weatherD1 + "</p>");
       $("#day-2").html("<p>Temperature (F) "+ tempF2 + "<br>" + weatherD2 + "</p>");
       $("#day-3").html("<p>Temperature (F) " + tempF3 + "<br>" + weatherD3 + "</p>");
       $("#day-4").html("<p>Temperature (F) " + tempF4 + "<br>" + weatherD4 + "</p>");
       $("#day-5").html("<p>Temperature (F) " + tempF5 + "<br>" + weatherD5 + "</p>")
 
  iconThing(weatherD1, 1);
  iconThing(weatherD2, 2);
  iconThing(weatherD3, 3);
  iconThing(weatherD4, 4);
  iconThing(weatherD5, 5);
  
  

    //Do something
//};
      
    
      

     });

    }, function () {
        handleLocationError(true, infoWindow, map.getCenter());
    });
} else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
}

function iconThing(weather, day) {
  if (weather === "Clouds") {
    $("#day-"+day).append('<img src= "assets/images/kinda-cloudy-icon.png">');
  }
  else if (weather === "Clear") {
    $("#day-"+day).append('<img src= "assets/images/sunny-icon.png">');
  }
  else if (weather === "Rain") {
    $("#day-"+day).append('<img src= "assets/images/rain-icon.png">');
  }
  else if (weather === "Thunderstorm") {
    $("#day-"+day).append('<img src= "assets/images/storm-icon.png">');
  }
  else if (weather === "Snow") {
    $("#day-"+day).append('<img src= "assets/images/snow-icon.png">');
  }
  else if (weather === "Mist") {
    $("#day-"+day).append('<img src= "assets/images/mist-icon.png">');
  }
  ;
}
