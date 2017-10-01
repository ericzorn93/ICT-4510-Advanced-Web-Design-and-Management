(function () {

	//$('#submitButton').click(getFormValues);


	$('#contact').validate({
		submitHandler: function () {
			var values = getFormValues();
			var url = 'http://localhost/week5/demos/contact-form/process.php';
			$.post(url, values, function (json) {
				displayMessage(json);
			});
		}
	});
	

	function getFormValues () {
						
		var formValues = {};
			
		formValues.firstName = $('#firstName').val();
		formValues.lastName = $('#lastName').val();
		formValues.emailAddress = $('#emailAddress').val();
		formValues.phoneNumber = $('#phoneNumber').val();
		
		return formValues;
	}
	
	function displayMessage (json) {
		
		var display = $('#display');
		var data = '<p>' + json.message + '</p>';
		
		display.empty().append(data);
		$('form').fadeOut('slow');
	}
	   
})();

