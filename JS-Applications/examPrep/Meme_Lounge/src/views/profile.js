import { getAllUserMemes } from "../api/data.js";
import { getUserData } from "../api/util.js";
import { html, until } from "../lib.js";

const profileTemplate = (meme, userData) => html` <section
  id="user-profile-page"
  class="user-profile"
>
  <article class="user-info">
    <img id="user-avatar-url" alt="user-profile" src="/images/${userData.gender}.png" />
    <div class="user-content">
      <p>Username: ${userData.username}</p>
      <p>Email: ${userData.email}</p>
      <p>My memes count: ${meme.length}</p>
    </div>
  </article>
  <h1 id="user-listings-title">User Memes</h1>
  <div class="user-meme-listings">
  ${meme.length == 0 ? html`<p class="no-memes">No memes in database.</p>`
           : meme.map(memeCard)}     
  </div>
</section>`;

const memeCard = (meme) => html`  <div class="user-meme">
<p class="user-meme-title">${meme.title}</p>
<img class="userProfileImage" alt="meme-img" src=${meme.imageUrl} />
<a class="button" href="/details/${meme._id}">Details</a>
</div>`;

export async function profilePage(ctx) {
const userData = getUserData();
const memes = await getAllUserMemes(userData.id);
  ctx.render(profileTemplate(memes, userData));
}


