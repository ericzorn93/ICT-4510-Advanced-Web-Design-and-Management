/* Eric Zorn: Module 3 (Forms) with JavaScript and jQuery ICT 4510  9/29/17*/

/*
    This JavaScript assignment was part of our Module 5 in the ICT 4510 curriculum.
    We took the past code from Module 3 regarding some of the HTML & CSS, as well as the JavaScript.
    In this Module 5, I am adding the addition of the jQuery extension library/plugin called jQuery Validation for Form Validation.
    This will be added to the current validation I have attempted to add on my own for the most part in
    Vanilla JavaScript. I have added the NEW code to the BOTTOM after the Module 5 IIFE.
    */

    var module5 = (function() {
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

document.onload = module5.init();

//jQuery Edition
$(document).ready(module5.jQuery);
$(document).ready(function () {
    $("#myJumbotron").hide();
});




/*---------------------------------------------------------------------------------------------------------------*/
//Module 5 Assignment
function loadAJAX() {
        var xmlHTTP = new XMLHttpRequest();
        xmlHTTP.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {

               var dataJSON = xmlHTTP.responseText;
               var tableInfoParse = JSON.parse(dataJSON);
               var presidents = tableInfoParse.presidents.president;
               var dataOutput =  document.getElementById("jsonData");
               console.log(tableInfoParse); //Console Logging the JSON File

                for (var key in presidents) {
                    if (presidents.hasOwnProperty(key)) {
                        console.log(key + " -> " + presidents[key].name);
                        //dataOutput.innerHTML = presidents[key].name + "<br/>";
                    }
                }

                //Originally Hiding the JSON Data from ICT 4570 Presidents JSON File (Kept in a jumbotron from Bootstrap)
                $(".jsonJumbotron").hide();

                $("#submitButton").click(function () {
                    $(".jsonJumbotron").show(3000);
                    presidents.forEach(function (item, i) {
                        dataOutput.innerHTML += (i + 1) + ": " + item.name + "<br/>";
                    });
                });

         }
     };
     xmlHTTP.open("GET", "http://schwartzcomputer.com/ICT4570/Resources/USPresidents.json", true);
     xmlHTTP.send();
 }


$(document).ready(loadAJAX); //AJAX Call and Response with jquery 

$(document).ready(function () {
    //Validate the form when submitted
    $("#secondaryForm").validate({
        rules: {
            myName: "required"
        }
    });
});

