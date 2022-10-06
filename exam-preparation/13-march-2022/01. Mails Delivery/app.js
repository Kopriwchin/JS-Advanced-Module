function solve() {
    let addListButtonElement = document.getElementById('add');
    let resetButtonElement = document.getElementById('reset');

    let recipentNameElement = document.getElementById('recipientName');
    let titleElement = document.getElementById('title');
    let textArea = document.getElementById('message');
    let deleteListEl = document.querySelector('ul.delete-list');

    let listMailsElement = document.getElementById('list');

    resetButtonElement.addEventListener('click', (e) => {
        e.preventDefault();
        clearInputs();
    })

    addListButtonElement.addEventListener('click', function (e) {
        e.preventDefault();

        if (recipentNameElement.value.length == 0 || titleElement.value.length == 0 || textArea.value.length == 0) {
            return;
        }

        let liElement = generateElement('li', '', listMailsElement);
        let h4Element = generateElement('h4', `Title: ${titleElement.value}`, liElement);
        let anotherH4Element = generateElement('h4', `Recipient Name: ${recipentNameElement.value}`, liElement);
        let spanElement = generateElement('span', textArea.value, liElement);

        let divElement = generateElement('div', '', liElement);
        divElement.id = 'list-action';

        let sendButtonElement = generateElement('button', 'Send', divElement);
        sendButtonElement.type = 'submit';
        sendButtonElement.id = 'send';
        let deleteButtonElement = generateElement('button', 'Delete', divElement);
        deleteButtonElement.type = 'submit';
        deleteButtonElement.id = 'delete';

        deleteButtonElement.addEventListener('click', function (e) {
            let values = e.currentTarget.parentNode.parentNode.querySelectorAll('h4');;
            let title = values[0].textContent.split(' ')[1];
            let receiver = values[1].textContent.split(' ')[2];
            
            let liDeleteEl = generateElement('li');
            let receiverSpanEl = generateElement('span', `To: ${receiver}`, liDeleteEl);
            let titleSpanEl = generateElement('span', `Title: ${title}`, liDeleteEl);

            e.currentTarget.parentNode.parentNode.remove();
            deleteListEl.appendChild(liDeleteEl);
        });

        sendButtonElement.addEventListener('click', function (e) {
            let ulSentEmailsElement = document.getElementsByClassName('sent-list')[0];

            let liEl = generateElement('li', '', ulSentEmailsElement);
            let data = e.currentTarget.parentNode.parentNode.querySelectorAll('h4');
            let title = data[0].textContent.split(' ')[1];
            let receiver = data[1].textContent.split(' ')[2];

            let spanEl = generateElement('span', `To: ${receiver}`, liEl);
            let secondSpanEl = generateElement('span', `Title: ${title}`, liEl);

            let divEl = generateElement('div', '', liEl);
            divEl.classList.add('btn');

            let buttonEl = generateElement('button', 'Delete', divEl);
            buttonEl.type = 'submit';
            buttonEl.classList.add('delete');

            buttonEl.addEventListener('click', function(e) {
                let currentLiEl = e.currentTarget.parentNode.parentNode;

                let receiverInfo = currentLiEl.querySelectorAll('span')[0].textContent;
                let titleInfo = currentLiEl.querySelectorAll('span')[1].textContent;

                let liDeleteEl = generateElement('li');
                let receiverSpanEl = generateElement('span', `To: ${receiverInfo}`, liDeleteEl);
                let titleSpanEl = generateElement('span', `Title: ${titleInfo}`, liDeleteEl);
    
                e.currentTarget.parentNode.parentNode.remove();
                deleteListEl.appendChild(liDeleteEl);
            })

            e.currentTarget.parentNode.parentNode.remove();

        });

        clearInputs(recipentNameElement, titleElement, textArea);
    });

    function generateElement(type, content, parent) {
        let el = document.createElement(type);
        el.textContent = content;

        if (parent) {
            parent.appendChild(el);
        }

        return el;
    }

    function clearInputs() {
        textArea.value = '';
        titleElement.value = '';
        recipentNameElement.value = '';
    }
}
solve();
