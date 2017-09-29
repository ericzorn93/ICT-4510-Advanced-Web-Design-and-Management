/* =========================================================================
    Eric Zorn - Module 4 Assignment (Geolocation API) 9.21.17

    In this script, I took the coordinates from the University of Denver and the coordinates of my home here in New Jersey.
    After, in the function getmyLocation, I was able to, with the professor's demo, determine if the browser supported the geolocation method. If the browser does allow geolocation, it will ask the user for permission to use location. If it does not, it will render an error alert message. The getCurrentPosition method will take the below function of displayLocation as an argument. That function takes the latitude and the longitude from the position.coords.latttitude or position.coords.longitudes properties. It then takes the location div I have coded in the HTML and input the coordinates and two small strings. Then, it appends with jQuery, the miles from the compute distance function calculation.
   ========================================================================== */

let duCoordinates = {
    latitude: 39.678345,
    longitude: -104.961448
};


let homeCoordinates = {
  latitude: 41.0360885,
  longitude: -74.0086377
};

function getmyLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(displayLocation);
    } else {
        alert("Geolocation is not supported by this browser!");
    }
}

function displayLocation(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;

    let div = $("#location");
    div.html("You are at Latitude: " + latitude + ", Longitude: " + longitude);

    let miles = computeDistance(homeCoordinates, duCoordinates, 'miles');
    let miles_second = "1,791";
    let distance = $("#distance");
    distance.html("You are " + miles_second + " miles from the University of Denver");
}
getmyLocation();