function loadRepos() {
let inputFieldValue = document.querySelector('#username').value;
let url = `https://api.github.com/users/${inputFieldValue}/repos`;
let ul = document.querySelector('#repos');

	fetch(url)
	.then(res => {
		if(res.ok === false){
			throw new Error(`${res.status} ${res.statusText}`);
		}
		return res.json();
	})
	.then(getData)
	.catch(showError);

function getData(data){
	ul.innerHTML = '';

for(let repo of data){
	let li = document.createElement('li');
	li.innerHTML = `<a href="${repo.html_url}">${repo.full_name}</a>`;
	ul.appendChild(li);
}
}

function showError(error){
	ul.innerHTML = '';
	ul.textContent = `${error.message}`
}
	
}