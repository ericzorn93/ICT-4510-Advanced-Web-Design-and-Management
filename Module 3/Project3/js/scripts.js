/* Eric Zorn: Module 3 (Forms) with JavaScript and jQuery ICT 4510  9/15/17*/

/*
    This JavaScript assignment was part of our Module 3 in the ICT 4510 curriculum.
    We took the past code from Module 2 that we had written and then we had expanded upon it with jQuery.
    In this assignment, Module 3, I have commented out the Module 2 code with the loop and array, while also adding the proper code of the Module 3 jQuery assignment.

    Below in the return statement of the module 3 IIFE, I incorporated jQuery with a fading affect to the jumbotron directly below the form.
 */

var module3 = (function() {
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

    var inputsJquery = {
      firstName: $("#firstName"),
      lastName: $("#lastName"),
      email: $("#email"),
      phone: $("#phoneNumber"),
      button: $("#submitButton"),
      emailRadio: $("#emailRadio"),
      phoneRadio: $("#phoneRadio"),
      allInputs: $("input")
    };

    let inputsArray = [inputs.firstName, inputs.lastName, inputs.email, inputs.phone, inputs.emailRadio, inputs.phoneRadio];

    let inputsjArray = [inputsJquery.firstName, inputsJquery.lastName, inputsJquery.email, inputsJquery.phone, inputsJquery.emailRadio, inputsJquery.phoneRadio];

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

        btnReset.click(function () {
            location.reload();
        });
    }
    /*
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
    */


    //jQuery assignment with Module 3
    function myjQuery() {

        // Variable for inputsJArray and object are at the beginning of the document


        $("#submitButton").click(function () {
            if ($("#myJumbotron").is(':hidden')) {
                for (var i = 0; i < inputsjArray.length; i++) {
                    const content = $("#formValues").textContent = '<li>' + inputsjArray[i].val() + '</li>';
                    $("#myJumbotron").append(content).show(3000);
                }
            }

            $("#keyJumbotron").empty().fadeOut(2000);
        });
    }

    /* This is where the Return is for the public part of the IIFEs*/
    return {
        init: function init() {
            inputCheck();
            //inputValues(inputsArray);
            resetBtn();
            console.log('The Form and the Page Are Initialized!');
        },

        jQuery: myjQuery()
    };

})();

document.onload = module3.init();

//jQuery Edition
$(document).ready(module3.jQuery);
$(document).ready(function () {
    $("#myJumbotron").hide();
});