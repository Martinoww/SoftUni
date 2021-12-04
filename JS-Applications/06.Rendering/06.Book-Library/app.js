import { html, render } from "./node_modules/lit-html/lit-html.js";
import { onEdit } from "./edit.js";
import { onDelete } from "./delete.js";
import { getAllBooks } from "./request.js";
import { createFormTempl } from "./create.js";
export const root = document.body;
let globalData = null;

export const theadTempl = () => html`
  <thead>
    <tr>
      <th>Title</th>
      <th>Author</th>
      <th>Action</th>
    </tr>
  </thead>
`;

const trTemplate = (book) => html` 
<tr>
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>
      <button @click=${(ev)=> onEdit(book,ev)}>Edit</button>
      <button @click=${(ev)=> onDelete(book,ev)}>Delete</button>
    </td>
</tr>`;

export async function start() {
  let data = await getAllBooks();
  data = Object.entries(data).map((el) => Object.assign(el[1], { _id: el[0] }));
  globalData = data
  viewRender();
}
start();

export function viewRender(form = createFormTempl){
    render(html`<table>${theadTempl()}${html`<tbody>${globalData.map(el => trTemplate(el))}</tbody>`}</table> ${form()}`,root)
}






