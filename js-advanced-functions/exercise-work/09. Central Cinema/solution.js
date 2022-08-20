function solve() {
    let nameInputElement = document.querySelector('input[placeholder="Name"]');
    let hallInputElement = document.querySelector('input[placeholder="Hall"]');
    let ticketPriceInputElement = document.querySelector('input[placeholder="Ticket Price"]');
    let moviesUlElement = document.querySelector('#movies > ul');
    let archieveUlElement = document.querySelector('#archive > ul');
    let clearButtonElement = document.querySelector('#archive > button');
    let onScreenButtonElement = document.querySelector('#container button');

    onScreenButtonElement.addEventListener('click', addMovie);
    clearButtonElement.addEventListener('click', clearArchive)

    function addMovie(e) {
        e.preventDefault();

        if (nameInputElement.value.trim() &&
            hallInputElement.value.trim() &&
            (!isNaN(ticketPriceInputElement.value.trim()) && ticketPriceInputElement.value.trim() != '')) {
            moviesUlElement.innerHTML +=
                `<li>
                    <span>${nameInputElement.value}</span>
                    <strong>Hall: ${hallInputElement.value}</strong>
                    <div>
                      <strong>${Number(ticketPriceInputElement.value).toFixed(2)}</strong>
                      <input placeholder="Tickets Sold">
                      <button>Archive</button>
                    </div>
                </li>`

            clearInputs();
        }

        clearInputs();
        let archiveButtons = document.querySelectorAll('ul button');

        archiveButtons.forEach(x => {
            x.addEventListener('click', archieveMovie)
        })
    }

    function archieveMovie(e) {
        let liElement = e.currentTarget.parentNode.parentNode;
        let ticketsSoldValue = e.currentTarget.parentNode.querySelector('input').value.trim();
        let overallPrice = Number(ticketsSoldValue) * Number(liElement.querySelector('div > strong').textContent);

        if (!isNaN(ticketsSoldValue) && ticketsSoldValue != '') {
            archieveUlElement.innerHTML +=
                `<li>
                <span>${liElement.querySelector('span').textContent}</span>
                <strong>Total amount: ${overallPrice.toFixed(2)}</strong>
                <button>Delete</button>
                </li>`

            liElement.remove();
        }


        let deleteButtons = document.querySelectorAll('#archive > ul button');
        deleteButtons.forEach(x => {
            x.addEventListener('click', deleteMovie);
        })
    }

    function deleteMovie(e) {
        e.currentTarget.parentNode.remove();
    }

    function clearArchive(e) {
        e.currentTarget.parentNode.querySelectorAll('ul > li').forEach(x => {
            x.remove();
        })
    }

    function clearInputs() {
        nameInputElement.value = '';
        hallInputElement.value = '';
        ticketPriceInputElement.value = '';
    }
}