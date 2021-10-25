function solve() {
  let inputFields = Array.from(document.querySelectorAll('#container input'));
  let addBtn = document.querySelector('#container button');
  let adoptionSection = document.querySelector('#adoption ul');
  let adoptedSection = document.querySelector('#adopted ul');
  addBtn.addEventListener('click', addPet);
  
function addPet(event){
event.preventDefault();
let isValid = true;
    inputFields.forEach((e) => {
        if(e.value === ''){
            isValid = false;
            return;
        }
    });
    if(isValid === false){
        return;
    }
    let [name, age, kind, owner] = inputFields;
    age = Number(age.value);
    name = name.value;
    kind = kind.value;
    owner = owner.value;
    if(Number.isNaN(age)){
        return;
    }
    let myLi = document.createElement('li');
myLi.innerHTML = 
`<p><strong>${name.trim()}</strong> is a <strong>${age}</strong> year old <strong>${kind.trim()}</strong></p>
<span>Owner: ${owner.trim()}</span>
<button>Contact with owner</button>`;
let contactBtn = myLi.querySelector('button');
contactBtn.addEventListener('click', swapButtons);
adoptionSection.appendChild(myLi);
document.querySelector('form').reset();

function swapButtons(ev){
let myDiv = document.createElement('div');
myDiv.innerHTML = 
`<input placeholder="Enter your names">
<button>Yes! I take it!</button>`;
    
myLi.removeChild(contactBtn);
myLi.appendChild(myDiv);
myDiv.querySelector('button').addEventListener('click', moveToAdopted.bind(null, myLi, myDiv));
}

    }

function moveToAdopted(myLi, myDiv){
let divInpField = myDiv.querySelector('input');
if(divInpField.value === ''){
    return;
}else {
    myLi.querySelector('span').textContent = `New Owner: ${divInpField.value.trim()}`;
    let btn = document.createElement('button');
    btn.textContent = 'Checked';
    myLi.removeChild(myDiv);
    myLi.appendChild(btn);
    btn.addEventListener('click', removeFromSection);
adoptedSection.appendChild(myLi);

function removeFromSection(){
    adoptedSection.removeChild(myLi);
}
}
}

}

