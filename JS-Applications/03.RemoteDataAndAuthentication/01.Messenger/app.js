function attachEvents() {
    window.addEventListener('load', loadMessages);
    document.getElementById('submit').addEventListener('click', sendMessage);
    document.getElementById('refresh').addEventListener('click', ()=>{
        loadMessages()
    })
}
let textArea = document.getElementById('messages');
let url = 'http://localhost:3030/jsonstore/messenger';
let author = document.querySelector('[name="author"]');
let content = document.querySelector('[name="content"]');

attachEvents();

async function loadMessages(){
try{
    let response = await fetch(url);
    if(response.status != 200){
        let error = await response.json();
        throw new Error(error.message);
    }else {
        let data = await response.json();
        let dataValues = Object.values(data)
        dataValues = dataValues.map(createElement);
        textArea.textContent = dataValues.join('\n')
    }
}catch (err){
    alert(err.message);
 }
};

async function sendMessage(){
    
let body = {author: author.value.trim(), content: content.value.trim()};
try{
let response = await fetch(url, {
    method: 'post',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
});
if(response.ok === false){
    let error = await response.json();
    throw new Error(error.message);
}else {
let data = await response.json();
content.value = '';
}

}catch (err){
    alert(err.message);
}

}

function createElement(dataObj){
    let element = `${dataObj.author}: ${dataObj.content}`;
    return element;
}