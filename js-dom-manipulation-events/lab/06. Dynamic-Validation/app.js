function validate() {
    let inputElement = document.getElementById('email');
    let reg = /^([\w\-.]+)@([a-z]+)(\.[a-z]+)+$/;

    inputElement.addEventListener('change', 
        function checkEmail(event) {
            if (reg.test(event.target.value)) {
                event.target.removeAttribute('class');
                return;
            }
            event.target.className = 'error';
        }
    );
}