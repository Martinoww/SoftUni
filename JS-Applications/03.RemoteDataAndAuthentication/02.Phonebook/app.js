function attachEvents() {
    window.addEventListener('load', loadContacts);
    document.getElementById('btnCreate').addEventListener('click', makeAContact)
    phoneBookUl.addEventListener('click', deleteContact);
    document.getElementById('btnLoad').addEventListener('click', ()=>{
        loadContacts();
    })
}
let url = `http://localhost:3030/jsonstore/phonebook`;
let phoneBookUl = document.getElementById('phonebook');
let personInp = document.getElementById('person');
let phoneNumInp = document.getElementById('phone');


attachEvents();

async function loadContacts(){
try{
    let response = await fetch(url);
    if(response.status != 200){
        let err = await response.json();
        throw new Error(err.message);
    }else {
        let data = await response.json();
        let dataValues = Object.values(data);
        dataValues = dataValues.map(createElement);
        phoneBookUl.replaceChildren();
        dataValues.forEach(e => phoneBookUl.appendChild(e));

    }
}catch (error){
    alert(error.message);
 }
}

async function makeAContact(){
let body = {person: personInp.value.trim(), phone:phoneNumInp.value.trim()};

try {
    let response = await fetch(url, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    });

    if(response.ok == false){
        let error = await response.json();
        throw new Error(error.message);
    }else {
        let data = await response.json();
        phoneNumInp.value = '';
        personInp.value = '';
        loadContacts();
    }

} catch (error) {
    alert(error.message);
}
    

}

async function deleteContact(event){
let id = event.target.dataset.id;
if(id != undefined){

    let response = await fetch(url + `/${id}`, {
        method: 'delete',
    });

        let data = await response.json();
         loadContacts()
    
}

}

function createElement(dataObj){
let liElement = document.createElement('li');
liElement.textContent = `${dataObj.person}:${dataObj.phone}`;
let deleteBtn = document.createElement('button');
deleteBtn.textContent = `Delete`;
deleteBtn.setAttribute('data-id', `${dataObj._id}`);
liElement.appendChild(deleteBtn);

return liElement;

}