function loadCommits() {
let usernameInp = document.querySelector('#username').value;
let repoInp = document.querySelector('#repo').value;
let url = `https://api.github.com/repos/${usernameInp}/${repoInp}/commits`;
let ul = document.querySelector('#commits');

fetch(url)
.then(handleResponse)
.then(handleData)
.catch(handleError);

function handleResponse(resp){
if(resp.ok === false){
    throw new Error(`${resp.status} (${resp.statusText})`);
}else {
    return resp.json();
}
}

function handleData(data){
ul.innerHTML = '';

for(let el of data){
    let li = document.createElement('li');
    li.setAttribute('id', 'commits');
    li.textContent = `${el.commit.author.name}: ${el.commit.message}`;
    ul.appendChild(li);
}

}

function handleError(error){
    ul.innerHTML = `<li>Error: ${error.message}</li>`;
}

}