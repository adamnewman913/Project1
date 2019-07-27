var API_KEY = 'AIzaSyDThdi8ae1kNWbWPRaDJx52t4Vv-fOo9d0';
var map;
var service;
var infowindow;
var chicago = { lat: 41.85, lng: -87.65 };
var latitudeResult = 0;
var longitudeResult = 0;
placeInput = $("#inputPlace").val().trim();


//delete everything except basic variables again and put in the place search code again, then put in then setCenter
// onto global map variable through some


function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: chicago,
        zoom: 13,
        mapTypeId: 'roadmap'
    });

    navigator.geolocation.getCurrentPosition(function (position) {
        var pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
        };
        map.setCenter(pos);
        new google.maps.Marker({
            position: pos,
            map: map,
            title: 'You are here!'
        });
    });

    // Create the search box and link it to the UI element.
    var input = document.getElementById('pac-input');
    var searchBox = new google.maps.places.SearchBox(input);
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

    // Bias the SearchBox results towards current map's viewport.
    map.addListener('bounds_changed', function () {
        searchBox.setBounds(map.getBounds());
    });

    var markers = [];
    // Listen for the event fired when the user selects a prediction and retrieve
    // more details for that place.
    searchBox.addListener('places_changed', function () {
        var places = searchBox.getPlaces();

        if (places.length == 0) {
            return;
        }

        // Clear out the old markers.
        markers.forEach(function (marker) {
            marker.setMap(null);
        });
        markers = [];

        // For each place, get the icon, name and location.
        var bounds = new google.maps.LatLngBounds();
        places.forEach(function (place) {
            if (!place.geometry) {
                console.log("Returned place contains no geometry");
                return;
            }
            var icon = {
                url: place.icon,
                size: new google.maps.Size(71, 71),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(17, 34),
                scaledSize: new google.maps.Size(25, 25)
            };

            // Create a marker for each place.
            markers.push(new google.maps.Marker({
                map: map,
                icon: icon,
                title: place.name,
                position: place.geometry.location
            }));

            if (place.geometry.viewport) {
                // Only geocodes have viewport.
                bounds.union(place.geometry.viewport);
            } else {
                bounds.extend(place.geometry.location);
            }
        });
        map.fitBounds(bounds);
    });
}

function searchPlace() {
    var location = $('#inputPlace').val();
    location.replace(' ', '+');
    console.log(location)

    $.ajax('https://maps.googleapis.com/maps/api/geocode/json?address=' + location + '&key=' + API_KEY)
        .then(function (response) {
            var position = response.results[0].geometry.location;
            centerMap(position);
            getPlaces(position);
            console.log(response)
        })
}

function centerMap(position) {
    map.setCenter(position);
    createMarker(position, 'You are here!')
    getPlaces(position);
}

function createMarker(position, title, isPark = false) {
    var icon = isPark ? 'http://maps.google.com/mapfiles/ms/icons/green-dot.png' : 'http://maps.google.com/mapfiles/ms/icons/red-dot.png';
    new google.maps.Marker({
        position: position,
        map: map,
        title: title,
        icon: icon
    });
}

function getPlaces(position) {
    var request = {
        location: position,
        radius: '700',
        type: 'park'
    }

    var service = new google.maps.places.PlacesService(map);

    service.nearbySearch(request, function (results, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            for (var i = 0; i < results.length; i++) {
                createMarker(results[i].geometry.location, results[i].name, true);
            }
        }
        console.log(results)
    });
}