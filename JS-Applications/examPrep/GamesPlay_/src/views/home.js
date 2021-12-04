import { loadGames } from "../api/data.js";
import { html,until } from "../lib.js";

const homeTemplate = (games) => html`
<section id="welcome-world">
<div class="welcome-message">
    <h2>ALL new games are</h2>
    <h3>Only in GamesPlay</h3>
</div>
<img src="./images/four_slider_img01.png" alt="hero">

<div id="home-page">
    <h1>Latest Games</h1>
    ${until(games, html`<p>Loading &hellip;</p>`)}
</div>
</section>
`;

const gameCard = (game) => html`
<div class="game">
    <div class="image-wrap">
        <img src="${game.imageUrl}">
    </div>
    <h3>${game.title}</h3>
    <div class="rating">
        <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
    </div>
    <div class="data-buttons">
        <a href="/details/${game._id}" class="btn details-btn">Details</a>
    </div>
</div>`; 

export function homePage(ctx){
ctx.render(homeTemplate(loadAllGames()));
}

async function loadAllGames(){
const games = await loadGames();

if(games.length == 0){
    return html`<p class="no-articles">No games yet</p>`
}else {
    return [...games.map(gameCard)]
}

}