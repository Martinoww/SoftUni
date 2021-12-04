import { editBook } from "./request.js";
import { viewRender, start, theadTempl, root } from "./app.js";
import { html, render } from "./node_modules/lit-html/lit-html.js";

const editFormTempl = ()=>html`
<form @submit=${makeChange} id="edit-form">
<input type="hidden" name="id">
<h3>Edit book</h3>
<label>TITLE</label>
<input type="text" name="title" placeholder="Title...">
<label>AUTHOR</label>
<input type="text" name="author" placeholder="Author...">
<input type="submit" value="Save">
</form>`


export function onEdit(book){
    viewRender(editFormTempl)

    document.querySelector('[name="title"]').value = book.title;
    document.querySelector('[name="author"]').value = book.author;
    document.querySelector('[name="id"]').value = book._id;    
}


async function makeChange(ev){
    ev.preventDefault()
    const form = document.querySelector('#edit-form');
    const formData = new FormData(form);
   const title = formData.get('title');
   const author = formData.get('author');
   const id = formData.get('id');
    form.reset();
    render(html`<table>${theadTempl()}${html`<tbody>${html`<tr colSpan="3">Loading...</tr>`}</tbody>`}</table>`,root)

   await editBook(id, {title, author});

    start();

}