(function () {

	$('#contact').validate({
		submitHandler: function() {
			getFormValues();
		}
	});		

	function getFormValues (event) {
						
		var formValues = [];
			
		formValues.push($('#firstName').val());
		formValues.push($('#lastName').val());
		formValues.push($('#emailAddress').val());
		formValues.push($('#phoneNumber').val());
		
		displayFormValues(formValues);
	}
	
	function displayFormValues (formValues) {
		
		var display = $('#display');
		var data = '<ul>';
		
		for (var i=0;i<formValues.length;i++) {
			data += '<li>' + formValues[i] + '</li>';
		}
		
		data += '</ul>';
		
		display.empty().append(data);
		$('form').fadeOut('slow');
	}
	   
})();

