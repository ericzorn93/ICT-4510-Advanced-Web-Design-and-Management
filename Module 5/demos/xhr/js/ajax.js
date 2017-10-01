(function () {
	
	var url = 'http://localhost/week5/demos/xhr/data/sales.json';
	var request = new XMLHttpRequest();
	request.open('GET', url);
	request.onload = function () {
    	if (request.status == 200) {
			alert('Data recieved!');
			console.log(request.responseText);
		} else {
			alert('An error has occurred.');
		}
	};
	
	request.send(null);

})();