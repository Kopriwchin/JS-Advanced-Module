function validate() {
   let input = document.getElementById('email');
   const regex = /^([\w\-.]+)@([a-z]+)(\.[a-z]+)+$/;

   input.addEventListener('change', () => {
    if (!input.value.match(regex)) {
        input.classList.add('error');
    } else {
        input.classList.remove('error');
    }
   });
}