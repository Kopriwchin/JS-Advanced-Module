function solve() {
    let addListButtonElement = document.getElementById('add');
    let resetButtonElement = document.getElementById('reset');
    
    let recipentNameElement = document.getElementById('recipientName');
    let titleElement = document.getElementById('title');
    let textArea = document.getElementById('message');

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
        
        let liElement = generateElement('li');
        let h4Element = generateElement('h4', `Title: ${titleElement.value}`, liElement);
        let anotherH4Element = generateElement('h4', `Recipient Name: ${recipentNameElement.value}`, liElement);
        let spanElement = generateElement('span', textArea.value, liElement);

        let divElement = generateElement('div');
        divElement.id = 'list-action';

        let sendButtonElement = generateElement('button', 'Send', divElement);
        sendButtonElement.type = 'submit';
        sendButtonElement.id = 'send';
        let deleteButtonElement = generateElement('button', 'Delete', divElement);
        deleteButtonElement.type = 'submit';
        deleteButtonElement.id = 'delete';

        liElement.appendChild(divElement);
        listMailsElement.appendChild(liElement);
        
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

solve()