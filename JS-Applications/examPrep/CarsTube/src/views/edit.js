import { editCar, getCarById } from "../api/data.js";
import { html } from "../lib.js";

const editTemplate = (car, onEdit) => html` 
<section id="edit-listing">
  <div class="container">
    <form @submit=${onEdit} id="edit-form">
      <h1>Edit Car Listing</h1>
      <p>Please fill in this form to edit an listing.</p>
      <hr />

      <p>Car Brand</p>
      <input type="text" placeholder="Enter Car Brand" name="brand" .value="${car.brand}" >

      <p>Car Model</p>
      <input type="text" placeholder="Enter Car Model" name="model" .value="${car.model}" >

      <p>Description</p>
      <input
        type="text"
        placeholder="Enter Description"
        name="description"
        .value="${car.description}"
      >

      <p>Car Year</p>
      <input type="number" placeholder="Enter Car Year" name="year" .value="${car.year}" >

      <p>Car Image</p>
      <input
        type="text"
        placeholder="Enter Car Image"
        name="imageUrl"
        .value="${car.imageUrl}"
      >

      <p>Car Price</p>
      <input
        type="number"
        placeholder="Enter Car Price"
        name="price"
        .value="${car.price}"
      >

      <hr />
      <input type="submit" class="registerbtn" value="Edit Listing" />
    </form>
  </div>
</section>`;

export async function editPage(ctx) {
const car = await getCarById(ctx.params.id);
  ctx.render(editTemplate(car, onEdit));

async function onEdit(event){
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
      await editCar(ctx.params.id ,data);
      ctx.page.redirect('/details/'+ ctx.params.id)
      }
      }

}
}
