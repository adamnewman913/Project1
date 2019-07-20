/* NEARBY WILL USE THE GOOGLE MAPS API
 * NEEDS TO BE SEARCHABLE
 * SEE IF CAN GET AN AUTOCOMPLETE FUNCTION ROCKING
 * SEE IF WE CAN GET "PRIORITIES" TO BE INCORPORATED
 * GET THE MAP TO CENTER ON KC METRO AREA
 * SEARCH BAR FUNCTIONALITY
 * Google maps api: AIzaSyDThdi8ae1kNWbWPRaDJx52t4Vv-fOo9d0
 */


var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8
    });
}
