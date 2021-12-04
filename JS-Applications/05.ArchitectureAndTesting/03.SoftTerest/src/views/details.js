import { deleteIdea, getIdeaById } from "../api/data.js";


const section = document.querySelector('#detailsView');
section.remove();
let ctx = null;
export async function showDetailsView(ctxTarget, id){
   ctx = ctxTarget;
    ctx.showCurrPage(section);
    loadIdea(id);
}

async function loadIdea(id){
    const p = document.createElement('p');
    p.textContent = 'Loading...';
    section.replaceChildren(p);
    const idea = await getIdeaById(id)
    section.replaceWith(createIdeaDiv(idea));
}


function createIdeaDiv(idea){
    const userData = JSON.parse(sessionStorage.getItem('userData'))
    const div = document.createElement('div');
    div.id = "detailsView";
    div.className = "container home some";
    div.innerHTML = `
<img class="det-img" src="${idea.img}" />
<div class="desc">
    <h2 class="display-5">${idea.title}</h2>
    <p class="infoType">Description:</p>
    <p class="idea-description">${idea.description}</p>
</div>`;

const deleteLink = document.createElement('div');
deleteLink.className = "text-center";
deleteLink.innerHTML = ` <a data-id="${idea._ownerId}" class="btn detb" href="">Delete</a>`
deleteLink.addEventListener('click', onDelete);
if(userData && idea._ownerId == userData.id){
    div.appendChild(deleteLink);
}


async function onDelete(ev){
    ev.preventDefault();
    await deleteIdea(idea._id)
    ctx.goTo('catalog');

}


return div;

}
