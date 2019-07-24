/* NEARBY WILL USE THE GOOGLE MAPS API
 * NEEDS TO BE SEARCHABLE
 * SEE IF CAN GET AN AUTOCOMPLETE FUNCTION ROCKING
 * SEE IF WE CAN GET "PRIORITIES" TO BE INCORPORATED
 * GET THE MAP TO CENTER ON KC METRO AREA
 * SEARCH BAR FUNCTIONALITY
 * Google maps api: AIzaSyDThdi8ae1kNWbWPRaDJx52t4Vv-fOo9d0
 */


var map, infoWindow;
var chicago = { lat: 41.85, lng: -87.65 };



function CenterControl(controlDiv, map) {

    // Set CSS for the control border.
    var controlUI = document.createElement('div');
    controlUI.style.backgroundColor = '#fff';
    controlUI.style.border = '2px solid #fff';
    controlUI.style.borderRadius = '3px';
    controlUI.style.boxShadow = '0 2px 6px rgba(0,0,0,.3)';
    controlUI.style.cursor = 'pointer';
    controlUI.style.marginBottom = '22px';
    controlUI.style.textAlign = 'center';
    controlUI.title = 'Click to recenter the map';
    controlDiv.appendChild(controlUI);

    // Set CSS for the control interior.
    var controlText = document.createElement('div');
    controlText.style.color = 'rgb(25,25,25)';
    controlText.style.fontFamily = 'Roboto,Arial,sans-serif';
    controlText.style.fontSize = '16px';
    controlText.style.lineHeight = '38px';
    controlText.style.paddingLeft = '5px';
    controlText.style.paddingRight = '5px';
    controlText.innerHTML = 'Center Map';
    controlUI.appendChild(controlText);

    // Setup the click event listeners: simply set the map to Chicago.
    controlUI.addEventListener('click', function () {
        navigator.geolocation.getCurrentPosition(function (position) {
            initialLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            map.setCenter(initialLocation);
        });
    });

}




function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: chicago
    });



    infoWindow = new google.maps.InfoWindow;

    // Try HTML5 geolocation.
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };

            infoWindow.setPosition(pos);
            infoWindow.setContent('Location found.');
            infoWindow.open(map);
            map.setCenter(pos);
        }, function () {
            handleLocationError(true, infoWindow, map.getCenter());
        });
    } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, infoWindow, map.getCenter());
    }


    var centerControlDiv = document.createElement('div');
    var centerControl = new CenterControl(centerControlDiv, map);

    centerControlDiv.index = 1;
    map.controls[google.maps.ControlPosition.TOP_CENTER].push(centerControlDiv);
}





// Create the DIV to hold the control and call the CenterControl()
// constructor passing in this DIV.


function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
        'Error: The Geolocation service failed.' :
        'Error: Your browser doesn\'t support geolocation.');
    infoWindow.open(map);
}




//Submit form code start here -------------------------------------------------


$("#submit-form").on("click", function (event) {


    navigator.geolocation.getCurrentPosition(function (position) {
        initialLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

    });
    var latitudeResult = position.coords.latitude;
    var longitudeResult = position.coords.longitude;

    event.preventDefault();

    var placeInput = $("#inputPlace").val().trim();

    var requestURL = 'https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input='
        + placeInput + '&inputtype=textquery&fields=photos,formatted_address,name,opening_hours,rating&locationbias=circle:2000@' + latitudeResult + ',' + longitudeResult + '&key=AIzaSyDThdi8ae1kNWbWPRaDJx52t4Vv-fOo9d0';
    console.log(requestURL);

    //push user input into an array , to use later to  show  markers
    //put all array input into query url calls


});
