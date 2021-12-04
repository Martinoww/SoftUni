import { deleteGame, getAllCommnetsByGame, getGameById, postComment } from "../api/data.js";
import { html } from "../lib.js";
import { getUserData } from "../util.js";


let localCtx;
const detailsTemplate = (game, isOwner, comments) => html`
<section id="game-details">
    <h1>Game Details</h1>
    <div class="info-section">

        <div class="game-header">
            <img class="game-img" src=${game.imageUrl} />
            <h1>${game.title}</h1>
            <span class="levels">MaxLevel: ${game.maxLevel}</span>
            <p class="type">${game.category}</p>
        </div>

        <p class="text">${game.summary}</p>

        <!-- Bonus ( for Guests and Users ) -->
        <div class="details-comments">
            <h2>Comments:</h2>
            ${comments.length !== 0 ? 
            html`<ul>
                ${comments.map(commentTemplate)}
            </ul>`
             : 
            html`<p class="no-comment">No comments.</p>`}
        </div>
        ${isOwner ? html`
        <div class="buttons">
            <a href="/edit/${game._id}" class="button">Edit</a>
            <a href="javascript:void(0)" class="button" @click=${onDelete}>Delete</a>
        </div>`
        :
            null}

    </div>
    ${!isOwner? commentSection(isOwner, getUserData()) : null}
</section>`;

const commentTemplate = (comment) => html`
<li class="comment">
    <p>Content: ${comment.comment}</p>
</li>`

const commentSection = (isOwner, isUser) => html`
${!isOwner && isUser ? 
    html`
    <article class="create-comment">
        <label>Add new comment:</label>
        <form class="form" @submit=${onComment}>
            <textarea name="comment" placeholder="Comment......"></textarea>
            <input class="btn submit" type="submit" value="Add Comment">
        </form>
    </article>` 
    :
    null}
`;

export async function detailsPage(ctx) {
    localCtx = ctx;
    const [game, comments] = await Promise.all([
        getGameById(ctx.params.id),
        getAllCommnetsByGame(ctx.params.id)
    ]);
    const userData = getUserData();
    const isOwner = userData && userData.id === game._ownerId;
    ctx.render(detailsTemplate(game, isOwner, comments));
}

async function onDelete(){
    const confirmation = confirm('Are you sure you want to delete this game?')
    if(confirmation){
        await deleteGame(localCtx.params.id);
        localCtx.page.redirect('/');
    }
}

async function onComment(event){
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const comment = formData.get('comment').trim();
    if(!comment){
        return alert('Comment can not be empty!')
    }
    const body = {
        gameId: localCtx.params.id,
        comment: comment
    }
    try{
        await postComment(body)
    }
    catch(err){
        alert(err.message);
    }
    form.reset();
    localCtx.page.redirect('/details/'+localCtx.params.id)
}