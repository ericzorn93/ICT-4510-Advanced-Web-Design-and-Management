function showMap (coords) {
	
	var mapObjs = {};

	mapObjs.googleLatAndLong = new google.maps.LatLng(coords.latitude, coords.longitude);
	
	var mapOptions = {
		zoom: 10,
		center: mapObjs.googleLatAndLong,
		mapTypeId: google.maps.MapTypeId.ROADMAP	
	};
	
	var mapDiv = document.getElementById('map');
	mapObjs.map = new google.maps.Map(mapDiv, mapOptions);	
	
	return mapObjs
}
