import { getAllMemes } from "../api/data.js";
import { html, until } from "../lib.js";

const catalogTemplate = (memes) => html` <section id="meme-feed">
  <h1>All Memes</h1>
  <div id="memes">
    ${until(memes, html`<p>Loading &hellip;</p>`)}    
  </div>
</section>`;

const memeCard = (meme) => html`
<div class="meme">
  <div class="card">
    <div class="info">
      <p class="meme-title">${meme.title}</p>
      <img class="meme-image" alt="meme-img" src=${meme.imageUrl} />
    </div>
    <div id="data-buttons">
      <a class="button" href="/details/${meme._id}">Details</a>
    </div>
  </div>
</div>`;

export async function catalogPage(ctx) {
  ctx.render(catalogTemplate(loadAllMemes()));
}

async function loadAllMemes(){
  const memes = await getAllMemes();
  if(memes.length > 0){
    return memes.map(memeCard);
  }else {
    return html`<p class="no-memes">No memes in database.</p>`;
  }


}


