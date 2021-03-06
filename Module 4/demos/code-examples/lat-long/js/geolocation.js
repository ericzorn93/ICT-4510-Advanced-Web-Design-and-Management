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
}

getMyLocation();