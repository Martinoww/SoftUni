import { searchAlbum } from "../api/data.js";
import { getUserData } from "../api/util.js";
import { html } from "../lib.js";

const searchTemplate = (templ, onSearch, params) => html` 
<section id="searchPage">
  <h1>Search by Name</h1>

  <div class="search">
    <input
      id="search-input"
      type="text"
      name="search"
      placeholder="Enter desired albums's name"
    .value="${params}">
    <button @click=${onSearch} class="button-list">Search</button>
  </div>

  <h2>Results:</h2>
${templ}
  
</section>`;

const albumTemplate = (album, isUser) => html`
<div class="card-box">
  <img src="${album.imgUrl}" />
  <div>
    <div class="text-center">
      <p class="name">Name: ${album.name}</p>
      <p class="artist">Artist: ${album.artist}</p>
      <p class="genre">Genre: ${album.genre}</p>
      <p class="price">Price: $${album.price}</p>
      <p class="date">Release Date: ${album.releaseDate}</p>
    </div>
    ${isUser ? html`<div class="btn-group">
                <a href="details/${album._id}" id="details">Details</a>
                </div>` 
             : null}
  </div>
</div>`;

const divTemplate = (result, isUser) => html`
     <div class="search-result">
    ${result.length == 0 ? html`<p class="no-result">No result.</p>`
                         : html`${result.map(e => albumTemplate(e, isUser))}`}  
  </div> `;

export async function searchPage(ctx){
  let result = [];
  const params = decodeURIComponent(ctx.querystring).split('=')[1] || '';
  if(params){
    result = await searchAlbum(params);
  }
    ctx.render(searchTemplate(divTemplate(result, getUserData()),onSearch, params));

async function onSearch (){
  const inputValue = document.getElementById('search-input').value.trim();
  if(inputValue !== ''){
    ctx.page.redirect(`/search?query=${encodeURIComponent(inputValue)}`);
  }else {
    ctx.page.redirect('/search')
  }
}
}


 