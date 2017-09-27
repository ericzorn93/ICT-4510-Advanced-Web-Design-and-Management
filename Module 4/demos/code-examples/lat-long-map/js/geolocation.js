var duCoordinates = {
	latitude: 39.678121,
	longitude: -104.961753
};

function getMyLocation () {
	
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(displayLocation);
	} else {
		alert('Geolocation is not supported.');
	}
}

function displayLocation (position) {
	
	var latitude = position.coords.latitude;
	var longitude = position.coords.longitude;
	
	var div = document.getElementById('location');
	div.innerHTML = 'You are at Latitude: ' + latitude + ', Longitude: ' + longitude;
	
	var miles = computeDistance(position.coords, duCoordinates, 'miles');
	var distance = document.getElementById("distance");
	distance.innerHTML = "You are " + miles + " miles from the University of Denver";
	
	showMap(position.coords);
}

getMyLocation();