import { createAlbum } from "../api/data.js";
import { html } from "../lib.js";

const createTemplate = (onCreate) => html` 
  <section class="createPage">
    <form @submit=${onCreate}>
        <fieldset>
            <legend>Add Album</legend>

            <div class="container">
                <label for="name" class="vhide">Album name</label>
                <input id="name" name="name" class="name" type="text" placeholder="Album name">

                <label for="imgUrl" class="vhide">Image Url</label>
                <input id="imgUrl" name="imgUrl" class="imgUrl" type="text" placeholder="Image Url">

                <label for="price" class="vhide">Price</label>
                <input id="price" name="price" class="price" type="text" placeholder="Price">

                <label for="releaseDate" class="vhide">Release date</label>
                <input id="releaseDate" name="releaseDate" class="releaseDate" type="text" placeholder="Release date">

                <label for="artist" class="vhide">Artist</label>
                <input id="artist" name="artist" class="artist" type="text" placeholder="Artist">

                <label for="genre" class="vhide">Genre</label>
                <input id="genre" name="genre" class="genre" type="text" placeholder="Genre">

                <label for="description" class="vhide">Description</label>
                <textarea name="description" class="description" placeholder="Description"></textarea>

                <button class="add-album" type="submit">Add New Album</button>
            </div>
        </fieldset>
    </form>
</section>`;

export function createPage(ctx) {
  ctx.render(createTemplate(onCreate));


async function onCreate(event){
  event.preventDefault();
const formData = new FormData(event.target);
const data = [...formData.entries()].reduce((acc, [k, v]) => Object.assign(acc, {[k]:v.trim()}), {});
const missingFields = [...formData.entries()].some(el => el[1].trim() == '');

if(missingFields){
  alert('All fields are required!');
}else {
  await createAlbum(data);
  ctx.page.redirect('/catalog');
}

}
}
