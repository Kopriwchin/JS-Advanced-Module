function validate() {
    let button = document.getElementById('submit');
    button.addEventListener('click', function (e) {
        e.preventDefault();

        let usernameElement = document.getElementById('username');
        let emailElement = document.getElementById('email');
        let passwordElement = document.getElementById('password');
        let confirmPasswordElement = document.getElementById('confirm-password');
        let checkBox = document.getElementById("company");
        let validDiv = document.getElementById('valid');

        let userTest = /^[A-Za-z0-9]{3,20}$/;
        let emailTest = /^[^@.]+@[^@]*\.[^@]*$/;
        let passTest = /^[\w]{5,15}$/;

        let inputChecker = [];

        if (!usernameElement.value.match(userTest)) {
            usernameElement.style.borderColor = 'red';
            inputChecker.push(false);
        } else {
            usernameElement.style.borderColor = '';
            inputChecker.push(true);
        }
        if (!emailElement.value.match(emailTest)) {
            emailElement.style.borderColor = 'red';
            inputChecker.push(false);
        } else {
            emailElement.style.borderColor = '';
            inputChecker.push(true);
        }
        if (!passwordElement.value.match(passTest)) {
            passwordElement.style.borderColor = 'red';
            inputChecker.push(false);
            confirmPasswordElement.style.borderColor = 'red';
        } else {
            passwordElement.style.borderColor = '';
            inputChecker.push(true);
            if (confirmPasswordElement.value !== passwordElement.value) {
                confirmPasswordElement.style.borderColor = 'red';
                inputChecker.push(false);
            } else {
                confirmPasswordElement.style.borderColor = '';
                inputChecker.push(true);
            }
        };

        if (checkBox.checked) {
            let company = document.querySelector("#companyNumber");
            if (company.value < 1000 || company.value > 9999) {
                company.style.borderColor = "red";
                inputChecker.push(false);
            } else {
                company.style.borderColor = "";
                inputChecker.push(true);
            }
        };

        if (!inputChecker.includes(false)) {
            validDiv.style.display = 'block';
        } else {
            validDiv.style.display = 'none';
        }
    });
    document.querySelector("#company").addEventListener('change', function () {
        if (this.checked) {
            document.getElementById('companyInfo').style.display = 'block';
        } else {
            document.getElementById('companyInfo').style.display = 'none';
        }
    });
}
