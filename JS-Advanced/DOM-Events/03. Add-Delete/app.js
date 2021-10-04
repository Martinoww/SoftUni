function addItem() {
    let input = document.getElementById('newItemText');
    let liElement = document.createElement('li');
    liElement.textContent = input.value;
    
    let aElement = document.createElement('a');
    aElement.href = '#';
    aElement.textContent = '[Delete]';
    aElement.addEventListener('click', deleteRow);
    
    liElement.appendChild(aElement);
    
    document.getElementById('items').appendChild(liElement);
    
    input.value = '';
   
    function deleteRow(ev){
        ev.target.parentNode.remove()
    }
}