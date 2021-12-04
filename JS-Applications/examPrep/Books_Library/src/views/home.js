import { getAllBooks } from "../api/data.js";
import { html, until } from "../lib.js";

const homeTemplate = (bookPromise) => html` 
<section id="dashboard-page" class="dashboard">
  <h1>Dashboard</h1>
  ${until(bookPromise, html`<h3>Loading &hellip;</h3>`)}
</section>`;

const bookCard = (book)=>html`
<li class="otherBooks">
    <h3>${book.title}</h3>
    <p>Type: ${book.type}</p>
    <p class="img"><img src=${book.imageUrl} /></p>
    <a class="button" href="/details/${book._id}">Details</a>
</li>`;

export function homePage(ctx) {

ctx.render(homeTemplate(loadAllBooks()))

}

async function loadAllBooks(){
  const books = await getAllBooks()

   if(books.length > 0){
    return html`<ul class="other-books-list"> ${books.map(bookCard)} </ul>`;
   }else {
    return html`<p class="no-books">No books in database!</p>`;
   }

}
