/* Eric Zorn: Module 2 (Forms) with JavaScript ICT 4510  9/12/17*/

/*
    This JavaScript assignment was part of our Module 2 in the ICT 4510 curriculum.
    In this project, we built upon our current knowledge of HTML, CSS and JavaScript.
    In the past module, I had written some of my own JavaScript in an IIFE statement with a few public methods that would then be rendered with one global call to the init function from the IIFEE statement.
    In this second assignment, we had to add more JavaScript to take the input values from each of the inputs on our web page that we had previously created and insert them into a JavaScript array literal.
    We then had to use a for loop and iterate through the array of input values to then export and append them to an Unordered List on the page. The document is the same form and extra Vanilla JavaScript on top of what I had written during Module 1 in this course.
    This assignment demoed our knowledge of how to use JavaScript to manipulate the DOM easier while using functions and loops with arrays.
    We also learned how to properly use parameters in a function to be able to continually call the function with different data anytime you would like.
 */

var module2 = (function() {
    var inputs = {
        firstName: document.getElementById('firstName'),
        lastName: document.getElementById('lastName'),
        email: document.getElementById('email'),
        phone: document.getElementById('phoneNumber'),
        button: document.getElementById('submitButton'),
        emailRadio: document.getElementById('emailRadio'),
        phoneRadio: document.getElementById('phoneRadio'),
        allInputs: document.getElementsByTagName('input'),
    };

    let inputsArray = [inputs.firstName, inputs.lastName, inputs.email, inputs.phone, inputs.emailRadio, inputs.phoneRadio];


    function inputCheck() {
        let errors = [];
        let inputs = document.getElementsByTagName('input');


        $("#submitButton").click(function () {
            if (inputs.firstName.value === "") {
                inputs.firstName.style.border = "1px solid red";
                errors.push('First Name is not filled');

            }
            if (inputs.lastName.value === "") {
                inputs.lastName.style.border = "1px solid red";
                errors.push('Last Name is not filled');
            }

            if (inputs.email.value === "") {
                inputs.email.style.border = "1px solid red";
                errors.push('Email is not filled')
            }

            if (inputs.phone.value === "") {
                inputs.phone.style.border = "1px solid red";
                errors.push('Phone number is not filled')
            }

            if (inputs.emailRadio.checked === false){
                errors.push("Email Radio is not checked");
                errors.pop("Phone Radio is not checked");
            }

            if (inputs.phoneRadio.checked === false) {
                errors.push("Phone Radio is not checked");
                errors.pop("Email Radio is not checked");
            }



            if (errors.length > 0) {
                alert(errors.join("\r\n"));
            } else {
                console.log('There were no errors!');
            }

        });
    }

    function resetBtn() {
        let btnReset = document.getElementById('resetButton');

        btnReset.addEventListener('click', function () {
            location.reload();
        });
    }

    function inputValues(arrayInputs) {
        inputs.button.addEventListener('click', function (event) {

            const breakLine = "\n";

            for (var i = 0; i < inputsArray.length; i+=1) {

                var listItem = document.createElement("LI");
                var inputValues = document.createTextNode(inputsArray[i].value);
                listItem.appendChild(inputValues);
                document.getElementById("formValues").appendChild(listItem);

            }

            event.preventDefault();

        });
    }


    /* This is where the Return is for the public part of the IIFEs*/
    return {
        init: function init() {
            inputCheck();
            inputValues(inputsArray);
            resetBtn();
            console.log('The Form and the Page Are Initialized!');
        }
    }

})();

document.onload = module2.init();