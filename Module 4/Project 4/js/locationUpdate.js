/* =========================================================================
    Eric Zorn - Module 4 Assignment (Geolocation API) 9.21.17

    In this assignment, we learned how to leverage the Google Maps API and the standard HTML 5 Geolocation API. What was
    really unique was using two different APIs at the same time to be able to render a map and design it how I would like.
    I added an animated marker and changed the standard marker to an image that I found of a different pin with the
    pushPinImage. We were asked to create the map and utilize the location according to the geolocation and navigator API.
    We were then asked to determine the distance of our current location from the University of Denver. I was able to set the postition
    and animation of the infoWindow as well. I learned how to convert the distance from kilometers and then get the value from that function
    to be stored into a variable. I then appended that value with a toFixed of 2 decimal places to the empty div of Distance Calc in my HTML.
    This project has taught me a lot about the API of Google Maps and the Geolocation API. After watching some further tutorials,
    I was able to also implement the driving directions overlay on the map.
    ========================================================================== */

    var firstClass = function () {

        return {
            init: function initMap() {
                var div = document.getElementById("map");
                var rvLatLng = {lat: 41.014768, lng: -74.011974};
                var duLatLng = {lat: 39.678345, lng: -104.961448};

                var mapProp = {
                    center: new google.maps.LatLng(41.014768, -74.011974),
                    zoom: 12,
            // mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        var map = new google.maps.Map(div, mapProp);

        var marker = new google.maps.Marker({
            position: rvLatLng,
            map: map,
            title: "River Vale New Jersey",
            icon: "img/pushPinSecond.png",
            animation: google.maps.Animation.BOUNCE,
            draggable: true,
        });


        var infoWindow = new google.maps.InfoWindow;

        var directionsDisplay = new google.maps.DirectionsRenderer();
        var directionsService = new google.maps.DirectionsService();

        var riverVale = new google.maps.LatLng(41.014768, -74.011974);
        var universityDenver = new google.maps.LatLng(39.678345, -104.961448);


        if (navigator.geolocation) {
            //Beginning of Implementing the Map with Google Maps and Geolocation API
            navigator.geolocation.getCurrentPosition(function (position) {
                var positions = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };

                //Setting Info Window Information and Location
                infoWindow.setPosition(rvLatLng);
                infoWindow.setContent("Eric Zorn's Home Town");
                infoWindow.open(map);

                //Center the Map Position to the Coordinates of Current Location with Geolocation API
                map.setCenter(positions);


                //Set Marker
                marker.setMap(map);

                //Directions Display
                directionsDisplay.setMap(map);


            }, function () {
                handleLocationError(true, infoWindow, map.getCenter());
            })
        }



            //Calculate Distance
            function getDistanceKm(lat1,lon1,lat2,lon2) {
                var R = 6371; // Radius of the earth in km
                var dLat = deg2rad(lat2-lat1);  // deg2rad below
                var dLon = deg2rad(lon2-lon1);
                var a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * Math.sin(dLon/2) * Math.sin(dLon/2);
                var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
                var d = R * c; // Distance in km
                return d;
            }

            function deg2rad(deg) {
                return deg * (Math.PI/180)
            }

            var distanceCalcKm = getDistanceKm(duLatLng.lat, duLatLng.lng, rvLatLng.lat, rvLatLng.lng);

            // var distanceCalcMi = distanceCalcKm * 0.62137;

        function lengthConverter(valNum) {
            var miles = valNum * 0.62137;
            return document.getElementById("distanceCalc").innerHTML = miles.toFixed(2) + " miles from the University of Denver";
        }

        lengthConverter(distanceCalcKm);


        function calculateRoute() {
            var request = {
                origin: riverVale,
                destination: universityDenver,
                travelMode: 'DRIVING'
            };
            
            directionsService.route(request, function (result, status) {
                if (status === "OK") {
                    //Render the directions here
                    directionsDisplay.setDirections(result);
                }
            });
        }

        calculateRoute();

    }
}
}();


document.onload = firstClass.init();