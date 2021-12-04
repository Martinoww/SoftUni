import { deleteBook, getAllLikesForASpecificBook, getAllUserLikesForASpecificBook, getBookById, makeLike } from "../api/data.js";
import { getUserData } from "../api/util.js";
import { html } from "../lib.js";

const detailsTemplate = (isOwner, book, onDelete, bookLikes, isUser, onLike) => html` 
<section id="details-page" class="details">
    <div class="book-information">
        <h3>${book.title}</h3>
        <p class="type">Type: ${book.type}</p>
        <p class="img"><img src=${book.imageUrl}></p>
        <div class="actions">
          ${isOwner 
            ? html`<a class="button" href="/edit/${book._id}">Edit</a>
                   <a @click=${onDelete.bind(null, book)} class="button" href="javascript:void(0)">Delete</a>`
            : null}
            ${isUser ? html`<a @click=${onLike} class="button" href="javascript:void(0)">Like</a>` : null}
            <div class="likes">
                <img class="hearts" src="/images/heart.png">
                <span id="total-likes">Likes: ${bookLikes}</span>
            </div>
        </div>
    </div>
    <div class="book-description">
        <h3>Description:</h3>
        <p>${book.description}</p>
    </div>
</section>`;



export async function detailsPage(ctx){
  const userData = getUserData();
  const book = await getBookById(ctx.params.id);
  const bookLikes = await getAllLikesForASpecificBook(book._id);
  let hasCurrUserLiked;
  if(userData){
     hasCurrUserLiked = await getAllUserLikesForASpecificBook(book._id, userData.id);
  }
  
  const isOwner = userData && book._ownerId == userData.id;
  const isUser = userData && book._ownerId != userData.id && hasCurrUserLiked == 0;

    ctx.render(detailsTemplate(isOwner, book, onDelete, bookLikes, isUser, onLike));
  

async function onLike(){
  await makeLike(ctx.params.id);
  ctx.page.redirect(`/details/${ctx.params.id}`)
}

async function onDelete(book, event){
   const confirmation = confirm(`Are you sure you want to delete ${book.title}?`)
   if(confirmation){
       await deleteBook(ctx.params.id);
       ctx.page.redirect('/');
   }
}


}




//  <!-- Bonus -->
//       <!-- Like button ( Only for logged-in users, which is not creators of the current book ) -->
//       <a class="button" href="javascript:void(0)">Like</a>

//       <!-- ( for Guests and Users )  -->
//       <div class="likes">
//         <img class="hearts" src="/images/heart.png" />
//         <span id="total-likes">Likes: 0</span>
//       </div>
//       <!-- Bonus --> 

// 
// 