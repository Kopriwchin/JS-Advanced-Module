function addItem() {
    let inputElement = document.getElementById('newItemText');
    let itemsElement = document.getElementById('items');

    let newLiItem = document.createElement('li');
    newLiItem.textContent = inputElement.value;

    itemsElement.appendChild(newLiItem);
}