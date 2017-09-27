/* ==========================================================================
    Eric Zorn - Module 4 Assignment (Geolocation API) 9.21.17

    In this script, I followed the instructions from Professor Shah. The bottom function calculates from degrees to radians,
    which is the measurement that the browser and API require. After the conversion from degrees to radians,
    the ComputeDistance function takes in parameters of the starting and the destination coordinates. It also takes in the type.
    After, the function calculates the starting and ending latitude and longitude. It takes the radius as well and performs the
    mathematical algorithm to return a 2 decimal distance.
   ========================================================================== */

    function computeDistance(startCoords, destCoords, type) {
        let startLatRads = degreesToRadians(startCoords.latitude);
        let startLongRads = degreesToRadians(startCoords.longitude);
        let destLatRads = degreesToRadians(destCoords.latitude);
        let destLongRads = degreesToRadians(destCoords.longitude);

        let Radius = 6371; //Radius of the the earth in km
        let distance = Math.acos(Math.sin(startLatRads) * Math.sin(destLatRads) +
            Math.cos(startLatRads) * Math.cos(destLatRads) * Math.cos(startLongRads - destLongRads)) * Radius;

        if (type === 'miles') {
            distance = distance * 0.0621371;
        }
        return distance.toFixed(2);
    }

    function degreesToRadians(degrees) {
        let radians = (degrees * Math.PI) / 180;
        return radians
    }