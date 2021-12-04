import { createIdea } from "../api/data.js";


const section = document.querySelector('#createView');
section.remove();
const form = section.querySelector('form');
form.addEventListener('submit', onCreate);

let ctx = null;
export async function showCreateView(ctxTarget){
    ctx = ctxTarget;
    ctx.showCurrPage(section);
    
}


async function onCreate(ev){
    ev.preventDefault();
    const userData = JSON.parse(sessionStorage.getItem('userData'));
    const formData = new FormData(form);
    const title = formData.get('title');
    const description = formData.get('description');
    const img = formData.get('imageURL');

    if(title.length < 6){
        return alert(`Title must be at least 6 characters long!`)
    }
    if(description.length < 10){
        return alert(`Description must be at least 10 characters long!`)
    }
    if(img.length < 5){
        return alert(`Image URL must be at least 5 characters long!`)
    }

    const resp = await createIdea({title,img,description, _ownerId: userData.id});
    console.log(resp);
    form.reset();
    ctx.goTo('catalog');
}