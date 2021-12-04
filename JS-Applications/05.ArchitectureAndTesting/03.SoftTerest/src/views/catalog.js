import { getAllIdeas } from "../api/data.js";


const section = document.querySelector('#dashboard-holder');
section.remove();
section.addEventListener('click', onDetails);
let ctx = null;
export async function showCatalogView(ctxTarget){
    ctx = ctxTarget;
    ctx.showCurrPage(section);
    loadAllIdeas();
}


async function loadAllIdeas(){
    const p = document.createElement('p');
    p.textContent = 'Loading...';
    section.replaceChildren(p);
   const ideas = await getAllIdeas();
   if(ideas.length == 0){
       const h1 = document.createElement('h1');
        h1.innerHTML = `No ideas yet! Be the first one :)`
        section.replaceChildren(h1);
        return;
   }
   const fragment = document.createDocumentFragment();
   ideas.map(createIdeaCard).forEach(el => fragment.appendChild(el));
   section.replaceChildren(fragment);
}

function createIdeaCard(idea){
const userData = JSON.parse(sessionStorage.getItem('userData'));
const div = document.createElement('div');
div.className = "card overflow-hidden current-card details";
div.style.width = '20rem';
div.style.height = '18rem';

div.innerHTML = `
<div class="card-body">
<p class="card-text">${idea.title}</p>
</div>
<img class="card-image" src="${idea.img}" alt="Card image cap">
<a data-id="${idea._id}" class="btn" href="">Details</a>`;

return div;
}

function onDetails(ev){
    ev.preventDefault();
    const id = ev.target.dataset.id;
    if(id){
        ctx.goTo('details', id);
    }
}