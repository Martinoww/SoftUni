import { start, theadTempl, root } from "./app.js";
import { createBook } from "./request.js";
import { html, render } from "./node_modules/lit-html/lit-html.js";

export const createFormTempl = ()=>html`
<form @submit=${onCreate} id="add-form">
<h3>Add book</h3>
<label>TITLE</label>
<input type="text" name="title" placeholder="Title...">
<label>AUTHOR</label>
<input type="text" name="author" placeholder="Author...">
<input type="submit" value="Submit">
</form>`


export async function onCreate(ev){
    ev.preventDefault();
    const form = document.querySelector('#add-form');
    const formData = new FormData(form);
   const title = formData.get('title');
   const author = formData.get('author');
   if(title != '' && author != ''){
       form.reset();
    render(html`<table>${theadTempl()}${html`<tbody>${html`<tr colSpan="3">Loading...</tr>`}</tbody>`}</table>`,root)

      await createBook({title, author});
      start();
   }else {
       alert(`All fields are required!`)
   }

}