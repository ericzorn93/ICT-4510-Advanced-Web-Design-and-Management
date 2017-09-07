/* Eric Zorn: Module 1 (Forms) ICT 4510 */

var inputs = {
  firstName: document.getElementById('firstName'),
  lastName: document.getElementById('lastName'),
  email: document.getElementById('email'),
  phone: document.getElementById('phoneNumber'),
  button: document.getElementById('submitButton'),
  allInputs: document.getElementsByTagName('input'),
};


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

        if (errors.length > 0) {
            alert(errors.join("\r\n"));
        } else {
            console.log('There were no errors!');
        }



    });
}

function resetBtn() {
    let btnReset = document.getElementById('resetButton');

    btnReset.addEventListener('click', () => {
        location.reload();
    });
}


function init() {
    inputCheck();
    resetBtn();
}

document.onload = init();

