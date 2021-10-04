function addItem() {
    let input = document.getElementById('newItemText');
    let ulList = document.getElementById('items');
    let liElement = document.createElement('li');
    liElement.textContent = input.value;
    ulList.appendChild(liElement);
    input.value = '';
}