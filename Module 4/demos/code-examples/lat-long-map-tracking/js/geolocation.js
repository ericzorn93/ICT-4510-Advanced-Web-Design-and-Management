var duCoordinates = {
	latitude: 39.678121,
	longitude: -104.961753
};

function getMyLocation () {
	
	if (navigator.geolocation) {
		var watchButton = document.getElementById("watch");
		watchButton.onclick = watchLocation;
		var clearWatchButton = document.getElementById("clearWatch");
		clearWatchButton.onclick = clearWatch;
	} else {
		alert('Geolocation is not supported.');
	}
}

function displayLocation (position) {
	
	var latitude = position.coords.latitude;
	var longitude = position.coords.longitude;
	
	var div = document.getElementById('location');
	div.innerHTML = 'You are at Latitude: ' + latitude + ', Longitude: ' + longitude;
	div.innerHTML += " (with " + position.coords.accuracy + " meters accuracy)";
	
	var miles = computeDistance(position.coords, duCoordinates, 'miles');
	var distance = document.getElementById("distance");
	distance.innerHTML = "You are " + miles + " miles from the University of Denver";
	
	var mapInfo = showMap(position.coords);
	var title = 'Your location';
	var content = 'You are here: ' + latitude + ', ' + longitude;
	addMarker(mapInfo.map, mapInfo.googleLatAndLong, title, content);
}

function watchLocation() {
	watchId = navigator.geolocation.watchPosition(
					displayLocation, 
					displayError);
}

function clearWatch() {
	if (watchId != null) {
		navigator.geolocation.clearWatch(watchId);
		watchId = null;
	}
}

function displayError(error) {
	var errorTypes = {
		0: "Unknown error",
		1: "Permission denied",
		2: "Position is not available",
		3: "Request timeout"
	};
	var errorMessage = errorTypes[error.code];
	if (error.code == 0 || error.code == 2) {
		errorMessage = errorMessage + " " + error.message;
	}
	var div = document.getElementById("location");
	div.innerHTML = errorMessage;
}

getMyLocation();