window.addEventListener('load', solve);

function solve() {
let [genreInp, nameInp, authorInp, dateInp] = document.querySelectorAll('form input');
let divContainer = document.querySelector('.all-hits-container');
let addBtn = document.getElementById('add-btn');
let likesSection = document.querySelector('div .likes p');
let savedContainer = document.querySelector('.saved-container')
let currentLike = 1;
addBtn.addEventListener('click', addSong);


function addSong(ev){
    ev.preventDefault();
    if(genreInp.value == '' || nameInp.value == '' || authorInp.value == '' || dateInp.value == ''){
        document.querySelector('form').reset();
        return;
    }else {
        let myDiv = document.createElement('div');
        myDiv.classList.add('hits-info');
        myDiv.innerHTML = `<img src="./static/img/img.png"><h2>Genre: ${genreInp.value}</h2><h2>Name: ${nameInp.value}</h2><h2>Author: ${authorInp.value}</h2><h3>Date: ${dateInp.value}</h3>`;
        let saveBtn = document.createElement('button');
        saveBtn.classList.add('save-btn');
        saveBtn.textContent = `Save song`;
        saveBtn.addEventListener('click', saveSong);
        myDiv.appendChild(saveBtn);

        let likeBtn = document.createElement('button');
        likeBtn.classList.add('like-btn');
        likeBtn.textContent = `Like song`;
        likeBtn.addEventListener('click', likeSong);
        myDiv.appendChild(likeBtn);

        let deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete-btn');
        deleteBtn.textContent = `Delete`;
        deleteBtn.addEventListener('click', deleteSong);
        myDiv.appendChild(deleteBtn);

        divContainer.appendChild(myDiv);
        document.querySelector('form').reset();


        function saveSong(ev){
        let currParent = ev.target.parentElement;
        Array.from(currParent.querySelectorAll('button')).forEach(e => {
            if(e.textContent != 'Delete'){
            currParent.removeChild(e)}
        });
          savedContainer.appendChild(currParent);
     };

        function likeSong(ev){
            likesSection.textContent = `Total Likes: ${currentLike}`;
            currentLike++;
            ev.target.setAttribute('disabled', 'disabled');
        };

        function deleteSong(ev){
           let currSection = ev.target.parentElement.parentElement;
           let currDiv = ev.target.parentElement;
           currSection.removeChild(currDiv);
        }

    }
}
}