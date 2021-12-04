import { getUserData } from "../api/util.js";
import { html, until } from "../lib.js";
import { getAllMyBooks } from "../api/data.js";

const myBooksTemplate = (bookPromise) => html` 
<section id="my-books-page" class="my-books">
  <h1>My Books</h1>
  ${until(bookPromise, html`<h3>Loading &hellip;</h3>`)}
</section>`;

const bookCard = (book)=>html`
<li class="otherBooks">
    <h3>${book.title}</h3>
    <p>Type: ${book.type}</p>
    <p class="img"><img src=${book.imageUrl} /></p>
    <a class="button" href="/details/${book._id}">Details</a>
</li>`;

export function myBooksPage(ctx) {

ctx.render(myBooksTemplate(loadAllMyBooks()))

}

async function loadAllMyBooks(){
    const userData = getUserData()
  const books = await getAllMyBooks(userData.id)

   if(books.length > 0){
    return html`<ul class="my-books-list"> ${books.map(bookCard)} </ul>`;
   }else {
    return html`<p class="no-books">No books in database!</p>`;
   }

}

