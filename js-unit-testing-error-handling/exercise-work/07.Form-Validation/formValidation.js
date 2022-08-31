function validate() {
    let button = document.getElementById('submit');
    button.addEventListener('click', function(e) {
        e.preventDefault();

        let usernameElement = document.getElementById('username');
        let emailElement = document.getElementById('email');
        let passwordElement = document.getElementById('password');
        let confirmPasswordElement = document.getElementById('confirm-password');
        let isCompanyCheckboxElement = document.getElementById('company');
        let companyInfoElement = document.getElementById('companyInfo');
    
        let userTest = /^[A-Za-z0-9]{3,20}$/;
        let emailTest = /^[^@.]+@[^@]*\.[^@]*$/;
        let passTest = /^[\w]{5,15}$/; 

        if (usernameElement.value.match(userTest)) {
            console.log('aaaa');
        }
    });



    document.querySelector("#company").addEventListener('change', function () {
        if (this.checked) {
            companyInfoElement.style.display = 'block';
        } else {
            companyInfoElement.style.display = 'none';
        }
    })
}
