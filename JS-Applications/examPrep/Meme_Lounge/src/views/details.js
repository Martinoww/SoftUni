import { deleteMeme, getMemeById } from "../api/data.js";
import { getUserData } from "../api/util.js";
import { html, until } from "../lib.js";

const detailsTemplate = (memePromise) => html` 
<section id="meme-details">
    ${until(memePromise, html`<p>Loading &hellip;</p>`)}
</section>`;

const memeCard = (meme, isOwner, onDel) => html` 
<h1>Meme Title: ${meme.title}</h1>
<div class="meme-details">
    <div class="meme-img">
      <img alt="meme-alt" src=${meme.imageUrl} />
    </div>
    <div class="meme-description">
      <h2>Meme Description</h2>
      <p>${meme.description}</p>
      ${isOwner
        ? html`<a class="button warning" href="/edit/${meme._id}">Edit</a>
            <button @click=${onDel} class="button danger">Delete</button>`
        : null}
    </div>
</div>`;

export  function detailsPage(ctx) {
  ctx.render(detailsTemplate(loadMeme(onDel)));
  
  async function loadMeme(onDel){
    const meme = await getMemeById(ctx.params.id);
    const userData = getUserData();
    const isOwner = userData && meme._ownerId == userData.id;
    return memeCard(meme, isOwner, onDel)
  }
  
  async function onDel(event){
    event.target.disabled = true;
    await deleteMeme(ctx.params.id);
    ctx.page.redirect('/catalog')
  }

}
