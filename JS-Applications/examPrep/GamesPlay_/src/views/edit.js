import { editGame, getGameById } from "../api/data.js";
import { html } from "../lib.js";

const editTemplate = (game, onSubmit) => html`
  <section id="edit-page" class="auth">
    <form @submit=${onSubmit} id="edit">
      <div class="container">
        <h1>Edit Game</h1>
        <label for="leg-title">Legendary title:</label>
        <input type="text" id="title" name="title" .value="${game.title}">

        <label for="category">Category:</label>
        <input type="text" id="category" name="category" .value="${game.category}">

        <label for="levels">MaxLevel:</label>
        <input type="number" id="maxLevel" name="maxLevel" min="1" .value="${game.maxLevel}">

        <label for="game-img">Image:</label>
        <input type="text" id="imageUrl" name="imageUrl" .value="${game.imageUrl}">

        <label for="summary">Summary:</label>
        <textarea name="summary" id="summary" .value="${game.summary}"></textarea>
        <input class="btn submit" type="submit" value="Edit Game" />
      </div>
    </form>
  </section>
`;

export async function editPage(ctx) {
const game = await getGameById(ctx.params.id);
ctx.render(editTemplate(game, onSubmit));

async function onSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = [...formData.entries()].reduce(
      (acc, [k, v]) => Object.assign(acc, { [k]: v.trim() }),
      {}
    );
    const missingFields = [...formData.entries()].some(
      (item) => item[1].trim() == ""
    );

    if (missingFields) {
      alert("All fields are required!");
    } else {
      await editGame(ctx.params.id, data);
      ctx.page.redirect(`/details/${ctx.params.id}`);
    }
  }
}
