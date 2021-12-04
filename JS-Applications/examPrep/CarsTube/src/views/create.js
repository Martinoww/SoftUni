import { createCarPost } from "../api/data.js";
import { html } from "../lib.js";

const createTemplate = (onCreate) => html` 
<section id="create-listing">
  <div class="container">
    <form @submit=${onCreate} id="create-form">
      <h1>Create Car Listing</h1>
      <p>Please fill in this form to create an listing.</p>
      <hr />

      <p>Car Brand</p>
      <input type="text" placeholder="Enter Car Brand" name="brand" />

      <p>Car Model</p>
      <input type="text" placeholder="Enter Car Model" name="model" />

      <p>Description</p>
      <input type="text" placeholder="Enter Description" name="description" />

      <p>Car Year</p>
      <input type="number" placeholder="Enter Car Year" name="year" />

      <p>Car Image</p>
      <input type="text" placeholder="Enter Car Image" name="imageUrl" />

      <p>Car Price</p>
      <input type="number" placeholder="Enter Car Price" name="price" />

      <hr />
      <input type="submit" class="registerbtn" value="Create Listing" />
    </form>
  </div>
</section>`;

export function createPage(ctx) {
  ctx.render(createTemplate(onCreate));


async function onCreate(event){
event.preventDefault();
const formData = new FormData(event.target);
const data = [...formData.entries()].reduce((acc, [k, v])=> Object.assign(acc, {[k]:v.trim()}), {});
const missingFields = [...formData.entries()].some(item => item[1].trim() == '');

if(missingFields){
    alert('All fields are required!');
}else {
  data.price = Number(data.price);
  data.year = Number(data.year);
if(data.year < 0 || data.price < 0){
  alert('Year and Price must be positive numbers!');
}else {
  await createCarPost(data);
  ctx.page.redirect('/catalog')

  }
  }
 }
}
