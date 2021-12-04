window.addEventListener('load', loadBooks);
window.addEventListener('load', ()=>{
editForm.style.display = 'none'
})
let url = `http://localhost:3030/jsonstore/collections/books`;
let tbody = document.querySelector('tbody');
let createForm = document.querySelector('.create');
createForm.addEventListener('submit', makeBook);
let editForm = document.querySelector('.edit');
editForm.addEventListener('submit', onEdit);

async function onEdit(event){
event.preventDefault();
let id = event.target.dataset.id
let formData = new FormData(editForm);
let author = formData.get('edit-author')
let title = formData.get('edit-title')
try {
let response = await fetch(url + `/${id}`, {
    method:'put',
    headers: {
        'Content-Type': 'application/json'
    },
    body:JSON.stringify({author, title})
});

if(response.ok == false){
    let err = await response.json();
    throw new Error(err.message);
}else {
    let data  = await response.json();
    loadBooks();
    editForm.reset()
    createForm.style.display = 'block';
    editForm.style.display = 'none';
}

}catch (err){
    alert(err.message);
}
}

async function makeBook(event){
event.preventDefault();
let formData = new FormData(createForm);
let title = formData.get(`title`);
let author = formData.get(`author`);

try {
    if(title == '' || author == ''){
        throw new Error(`All inputs are required`);
    }else {
        let response = await fetch(url, {
            method:'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                author,
                title
            })
        });

        if(response.ok == false){
            let err = await response.json();
            throw new Error(err.message);
        }else{
            let data = await response.json();
            createForm.reset();
            loadBooks();
         }
    }
} catch (error) {
    alert(error.message);
}

}

async function editBook(ev){
createForm.style.display = 'none';
editForm.style.display = 'block';
let id = ev.target.dataset.id;
let currTr = ev.target.parentElement.parentElement;
let [currTitle, currAuthor] = currTr.children;

document.querySelector('[name="edit-title"]').value = currTitle.textContent;
document.querySelector('[name="edit-author"]').value = currAuthor.textContent;
editForm.setAttribute('data-id', id)
}

async function deleteBook(ev){
    try {
        let id = ev.target.dataset.id;
        if(id){
            let response = await fetch(url + `/${id}`, {method:'delete'});
            if(response.ok == false){
                let err = await response.json();
                throw new Error(err.message);
            }else {
                let data = await response.json();
                loadBooks();
            }
        }
    } catch (error) {
        alert(error.message);
    }
}

async function loadBooks(){

    try {
        let response = await fetch(url);
        if(response.status != 200){
            let err = await response.json();
            throw new Error(err.message);
        }else{
            let data = await response.json();
            let dataEntries = Object.entries(data);
            dataEntries = dataEntries.map(createBookTr);
            tbody.replaceChildren();
            dataEntries.forEach(tr => tbody.appendChild(tr));
        }
    } catch (error) {
        alert(error.message)
    }

}

function createBookTr([id, dataObj]){
    let myTr = document.createElement('tr');
    let nameTd = document.createElement('td');
    nameTd.textContent = dataObj.title;
    myTr.appendChild(nameTd);

    let authorTd = document.createElement('td');
    authorTd.textContent = dataObj.author;
    myTr.appendChild(authorTd);

    let buttonsTd = document.createElement('td');
    let editBtn = document.createElement('button');
    editBtn.setAttribute('data-id', id);
    editBtn.textContent = `Edit`;
    editBtn.addEventListener('click', editBook);
    buttonsTd.appendChild(editBtn);

    let deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('data-id', id);
    deleteBtn.textContent = `Delete`;
    deleteBtn.addEventListener('click', deleteBook);
    buttonsTd.appendChild(deleteBtn);

    myTr.appendChild(buttonsTd);

    return myTr;
}


