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
 //Tried to fit the weather variables into an array, but I guess I suck and life is meaningless
 //var weatherArray = [weatherD1, weatherD2, weatherD3, weatherD4, weatherD5]
 //var arrayLength = weatherArray.length;
//for (var i = 0; i < arrayLength; i++) {
  if(weatherD1 === "Clouds"){
    $("#day-1").append('<img src= "assets/images/kinda-cloudy-icon.png">')
  }
  else if(weatherD1 === "Clear"){
    $("#day-1").append('<img src= "assets/images/sunny-icon.png">')
  }
  else if(weatherD1 === "Rain"){
    $("#day-1").append('<img src= "assets/images/rain-icon.png">')
  }
  else if(weatherD1 === "Thunderstorm"){
    $("#day-1").append('<img src= "assets/images/storm-icon.png">')
  }
  else if(weatherD1 === "Snow"){
    $("#day-1").append('<img src= "assets/images/snow-icon.png">')
  }
  else if(weatherD1 === "Mist"){
    $("#day-1").append('<img src= "assets/images/mist-icon.png">')
  };
  
  if(weatherD2 === "Clouds"){
    $("#day-2").append('<img src= "assets/images/kinda-cloudy-icon.png">')
  }
  else if(weatherD2 === "Clear"){
    $("#day-2").append('<img src= "assets/images/sunny-icon.png">')
  }
  else if(weatherD2 === "Rain"){
    $("#day-2").append('<img src= "assets/images/rain-icon.png">')
  }
  else if(weatherD2 === "Thunderstorm"){
    $("#day-2").append('<img src= "assets/images/storm-icon.png">')
  }
  else if(weatherD2 === "Snow"){
    $("#day-2").append('<img src= "assets/images/snow-icon.png">')
  }
  else if(weatherD2 === "Mist"){
    $("#day-2").append('<img src= "assets/images/mist-icon.png">')
  };
  
  
  if(weatherD3 === "Clouds"){
    $("#day-3").append('<img src= "assets/images/kinda-cloudy-icon.png">')
  }
  else if(weatherD3 === "Clear"){
    $("#day-3").append('<img src= "assets/images/sunny-icon.png">')
  }
  else if(weatherD3 === "Rain"){
    $("#day-3").append('<img src= "assets/images/rain-icon.png">')
  }
  else if(weatherD3 === "Thunderstorm"){
    $("#day-3").append('<img src= "assets/images/storm-icon.png">')
  }
  else if(weatherD3 === "Snow"){
    $("#day-3").append('<img src= "assets/images/snow-icon.png">')
  }
  else if(weatherD3 === "Mist"){
    $("#day-3").append('<img src= "assets/images/mist-icon.png">')
  };
  
  
  if(weatherD4 === "Clouds"){
    $("#day-4").append('<img src= "assets/images/kinda-cloudy-icon.png">')
  }
  else if(weatherD4 === "Clear"){
    $("#day-4").append('<img src= "assets/images/sunny-icon.png">')
  }
  else if(weatherD4 === "Rain"){
    $("#day-4").append('<img src= "assets/images/rain-icon.png">')
  }
  else if(weatherD4 === "Thunderstorm"){
    $("#day-4").append('<img src= "assets/images/storm-icon.png">')
  }
  else if(weatherD4 === "Snow"){
    $("#day-4").append('<img src= "assets/images/snow-icon.png">')
  }
  else if(weatherD4 === "Mist"){
    $("#day-4").append('<img src= "assets/images/mist-icon.png">')
  };


  if(weatherD5 === "Clouds"){
    $("#day-5").append('<img src= "assets/images/kinda-cloudy-icon.png">')
  }
  else if(weatherD5 === "Clear"){
    $("#day-5").append('<img src= "assets/images/sunny-icon.png">')
  }
  else if(weatherD5 === "Rain"){
    $("#day-5").append('<img src= "assets/images/rain-icon.png">')
  }
  else if(weatherD5 === "Thunderstorm"){
    $("#day-5").append('<img src= "assets/images/storm-icon.png">')
  }
  else if(weatherD5 === "Snow"){
    $("#day-5").append('<img src= "assets/images/snow-icon.png">')
  }
  else if(weatherD5 === "Mist"){
    $("#day-5").append('<img src= "assets/images/mist-icon.png">')
  };

    //Do something
//};
      
    
       // Log the data in the console as well
      
       thunderstorm
       snow
       mist

     });

    }, function () {
        handleLocationError(true, infoWindow, map.getCenter());
    });
} else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
}