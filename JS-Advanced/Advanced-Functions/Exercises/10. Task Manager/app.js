function solve() {
let [inputSection, openSection, inProgressSection, completeSection] = document.querySelectorAll(".wrapper section");
let [taskInput, dateInput] = inputSection.querySelectorAll('input');
let descriptionInput = inputSection.querySelector('#description');
let inputBtn = inputSection.querySelector('#add');
inputBtn.addEventListener('click', onAdd);

function onAdd(ev){
    ev.preventDefault();
    if(taskInput.value != '' && descriptionInput.value != '' && dateInput.value != ''){
        let newArticle = document.createElement('article');
        newArticle.innerHTML = `<h3>${taskInput.value}</h3>
                                <p>Description: ${descriptionInput.value}</p>
                                <p>Due Date: ${dateInput.value}</p>
                                <div class="flex">
                                <button class="green">Start</button>
                                <button class="red">Delete</button>
                                </div>`;
    
        Array.from(newArticle.querySelectorAll('button')).forEach(b => b.addEventListener('click', onClick));
        openSection.querySelectorAll('div')[1].appendChild(newArticle);
    }
    taskInput.value = '';
    descriptionInput.value = '';
    dateInput.value = '';
};

function onClick(ev){
let targetSection = ev.target.parentElement.parentElement.parentElement;
let targetArticle = ev.target.parentElement.parentElement; 
let targetDiv = targetArticle.querySelector('div');

if(ev.target.textContent === 'Start'){
    targetDiv.innerHTML = `<button class="red">Delete</button><button class="orange">Finish</button>`;
    Array.from(targetArticle.querySelectorAll('button')).forEach(b => b.addEventListener('click', onClick))
    inProgressSection.querySelectorAll('div')[1].appendChild(targetArticle);
}else if(ev.target.textContent === 'Delete'){
    targetSection.removeChild(targetArticle);
}else if(ev.target.textContent === 'Finish'){
    targetArticle.removeChild(targetDiv);
    completeSection.querySelectorAll('div')[1].appendChild(targetArticle);
}
};


}