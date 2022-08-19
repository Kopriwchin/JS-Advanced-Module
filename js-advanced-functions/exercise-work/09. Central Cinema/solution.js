function solve() {
    let nameInputElement = document.querySelector('input[placeholder="Name"]');
    let hallInputElement = document.querySelector('input[placeholder="Hall"]');
    let ticketPriceInputElement = document.querySelector('input[placeholder="Ticket Price"]');
    let ulElement = document.querySelector('#movies > ul');

    let onScreenButtonElement = document.querySelector('button');
    onScreenButtonElement.addEventListener('click', addMovie);

    function addMovie(e) {
        e.preventDefault();

        if (nameInputElement.value &&
            hallInputElement.value &&
            (!isNaN(ticketPriceInputElement.value) && ticketPriceInputElement.value != '')) { 
                ulElement.innerHTML +=
                `<li>
                    <span>${nameInputElement.value}</span>
                    <strong>Hall: ${hallInputElement.value}</strong>
                    <div>
                      <strong>${ticketPriceInputElement.value}</strong>
                      <input placeholder="Tickets Sold">
                      <button>Archive</button>
                    </div>
                </li>`
 
            nameInputElement.value = null;
            hallInputElement.value = null;
            ticketPriceInputElement.value = null;
        }
    }

    
    function archieveMovie() {

    }

    function clearInputs() {
        nameInputElement.value = '';
        hallInputElement.value = '';
        ticketPriceInputElement.value = '';
    }
}