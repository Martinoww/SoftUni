import { start, theadTempl, root } from "./app.js";
import { deleteBook } from "./request.js";
import { html, render } from "./node_modules/lit-html/lit-html.js";


export async function onDelete(book){
    const confirm = window.confirm(`Are you sure, you want to delete ${book.title} by ${book.author}`);
    if(confirm){
    render(html`<table>${theadTempl()}${html`<tbody>${html`<tr colSpan="3">Loading...</tr>`}</tbody>`}</table>`,root)
        await deleteBook(book._id)
        start();
    }
}