(function () {
	
	var url = 'http://localhost/week5/demos/jquery-ajax/data/sales.json';
	
	
	$.ajax({
		url: url,
		method: 'GET',
		dataType: 'json',
		success: function (json) {

			var data = '<ul>';
		
			for (var i=0;i<json.length;i++) {
				console.log(json[i])
				data += '<li>' + json[i].name + ' made ' + json[i].sales + ' sales.</li>';	
			}
		
			data += '</ul>';
		
			$('#sales').html(data);	
		}
	});
})();