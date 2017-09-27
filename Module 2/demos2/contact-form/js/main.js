/*
  collects required form field values and displays them to the screen
*/

document.getElementById('submitButton').onclick = getFormValues;

function getFormValues () {
	
	var formValues = [];
	
	formValues.push(document.getElementById('myName').value);
	
	displayFormValues(formValues);
}

function displayFormValues (formValues) {

	var display = document.getElementById('display');
	
	var data = '<ul>';
	
	for (var i=0;i<formValues.length;i++) {
		data += '<li>' + formValues[i] + '</li>';
	}
	
	data += '</ul>';
	
	display.innerHTML = data;
}