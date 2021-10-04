function solve() {
let [movieNameInput, hallInput, priceInput] = document.querySelectorAll('#container input');
let onScreenBtn = document.querySelector('#container button');
onScreenBtn.addEventListener('click', addMovie);
let screenSection = document.querySelector('#movies ul');
let archiveSection = document.querySelector('#archive ul');
let archiveField = document.querySelector('#archive');

function addMovie(ev) {
    ev.preventDefault();
    if(movieNameInput.value != "" && hallInput.value != "" && priceInput.value != "" && !isNaN(Number(priceInput.value))){
        let liElement = document.createElement('li');
        liElement.innerHTML = `<span>${movieNameInput.value}</span>
                               <strong>Hall: ${hallInput.value}</strong>
                               <div>
                                <strong>${Number(priceInput.value).toFixed(2)}</strong>
                                <input placeholder="Tickets sold">
                                <button>Archive</button>
                               </div>`;
        screenSection.appendChild(liElement);
        liElement.querySelector('button').addEventListener('click', onArchive)
    }
    movieNameInput.value = "";
    hallInput.value = "";
    priceInput.value = '';
}


function onArchive(ev){
let archiveBtnParent = ev.target.parentElement;
let liLine = ev.target.parentElement.parentElement;
let inputField = archiveBtnParent.querySelector('input');
let name = liLine.querySelector('span');
let price = archiveBtnParent.querySelector('strong');
let qtity = archiveBtnParent.querySelector('input');
let total = Number(price.textContent) * Number(qtity.value);
if(inputField.value != "" && !isNaN(Number(inputField.value))){
    let archiveLi = document.createElement('li');
    archiveLi.innerHTML = `<span>${name.textContent}</span>
                           <strong>Total amount: ${total.toFixed(2)}</strong>
                           <button>Delete</button>`;

    archiveSection.appendChild(archiveLi);
    Array.from(archiveField.querySelectorAll('button')).forEach(b => b.addEventListener('click', onDelete));
    screenSection.removeChild(liLine);
  }
}


function onDelete(ev){
    if(ev.target.textContent === 'Clear'){
    archiveSection.innerHTML = "";
    }else if (ev.target.textContent === 'Delete'){
    let liEL = ev.target.parentElement;
    archiveSection.removeChild(liEL);
    }
    
    }

}