/* NEARBY WILL USE THE GOOGLE MAPS API
 * NEEDS TO BE SEARCHABLE
 * SEE IF CAN GET AN AUTOCOMPLETE FUNCTION ROCKING
 * SEE IF WE CAN GET "PRIORITIES" TO BE INCORPORATED
 * GET THE MAP TO CENTER ON KC METRO AREA
 * SEARCH BAR FUNCTIONALITY
 * Google maps api: AIzaSyDThdi8ae1kNWbWPRaDJx52t4Vv-fOo9d0
 */


var map, infoWindow;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 13
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
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
        'Error: The Geolocation service failed.' :
        'Error: Your browser doesn\'t support geolocation.');
    infoWindow.open(map);
}
