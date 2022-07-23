function deleteByEmail() {
    let customerElements = document.querySelectorAll('tbody tr td:nth-of-type(2)');
    let inputElement = document.querySelector('input[name="email"]');
    let resultElement = document.getElementById('result');

    for (const customer of customerElements) {
        if (inputElement.value == customer.textContent) {
            customer.parentElement.remove();
            resultElement.textContent = 'Deleted.';
        } else {
            resultElement.textContent = 'Not found.';
        }
    }
}