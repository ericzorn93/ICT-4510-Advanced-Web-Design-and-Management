/* ==========================================================================
    Eric Zorn - Module 4 Assignment (Geolocation API) 9.21.17
   
    In this function, it simply intializes the map and grabs the ID of map in the HTML elements. It tells the map to center at a specific latitude and longitude of my home in NJ and zooms in at a distance of 14. Lastly, it then places the marker in the correct position on the map so that you can see where your location is rendered. 
   ========================================================================== */

function initMap() {
    var uluru = {lat: 41.0360885, lng: -74.0086377};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}

initMap();