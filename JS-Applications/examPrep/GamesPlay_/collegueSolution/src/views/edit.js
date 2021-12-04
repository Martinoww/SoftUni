import { editGame, getGameById } from "../api/data.js";
import { html } from "../lib.js";

let localCtx;
const editTemplate = (game) => html`
<section id="edit-page" class="auth">
    <form id="edit" @submit=${onSubmit}>
        <div class="container">

            <h1>Edit Game</h1>
            <label for="leg-title">Legendary title:</label>
            <input type="text" id="title" name="title" .value=${game.title}>

            <label for="category">Category:</label>
            <input type="text" id="category" name="category" .value=${game.category}>

            <label for="levels">MaxLevel:</label>
            <input type="number" id="maxLevel" name="maxLevel" min="1" .value=${game.maxLevel}>

            <label for="game-img">Image:</label>
            <input type="text" id="imageUrl" name="imageUrl" .value=${game.imageUrl}>

            <label for="summary">Summary:</label>
            <textarea name="summary" id="summary" .value=${game.summary}></textarea>
            <input class="btn submit" type="submit" value="Edit Game">

        </div>
    </form>
</section>`;


export async function editPage(ctx) {
    localCtx = ctx;
    const game = await getGameById(ctx.params.id)
    ctx.render(editTemplate(game));
}

async function onSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);

    const title = formData.get('title');
    const category = formData.get('category');
    const maxLevel = formData.get('maxLevel');
    const imageUrl = formData.get('imageUrl');
    const summary = formData.get('summary');

    if (!title || !category || !maxLevel || !imageUrl || !summary) {
        return alert('Fields must not be empty!');
    }

    await editGame(localCtx.params.id, { title, category, maxLevel, imageUrl, summary });
    localCtx.page.redirect('/');
}