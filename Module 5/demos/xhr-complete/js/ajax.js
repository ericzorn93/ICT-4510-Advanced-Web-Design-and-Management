(function () {
	
	var url = 'http://localhost/week5/demos/xhr-complete/data/sales.json';
	var request = new XMLHttpRequest();
	request.open('GET', url);
	request.onload = function () {
    	if (request.status == 200) {
			
			var json = JSON.parse(request.responseText);
			var data = '<ul>';
			
			for (var i=0;i<json.length;i++) {
				console.log(json[i])
				data += '<li>' + json[i].name + ' made ' + json[i].sales + ' sales.</li>';	
			}
			
			data += '</ul>';
			
			$('#sales').html(data);
			
		} else {
			alert('An error has occurred.');
		}
	};
	
	request.send(null);

})();