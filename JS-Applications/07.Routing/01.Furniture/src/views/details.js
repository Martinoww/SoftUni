import { deleteFurniture, getFurnitureDetails } from "../api/data.js";
import { getUserData } from "../api/util.js";
import { html, until } from "../lib.js";

const detailsTemplate = (dataPromise) => html`
 <div class="row space-top">
    <div class="col-md-12">
      <h1>Furniture Details</h1>
    </div>
  </div>
  <div class="row space-top">
  ${until(dataPromise, html`<p>Loading &hellip;</p>`)}
    </div>
  </div>`;

const itemTemplate = (item,isOwner,onDelete)=>html`
<div class="col-md-4">
    <div class="card text-white bg-primary">
    <div class="card-body">
        <img src="${item.img}" />
    </div>
    </div>
</div>
<div class="col-md-4">
    <p>Make: <span>${item.make}</span></p>
    <p>Model: <span>${item.model}</span></p>
    <p>Year: <span>${item.year}</span></p>
    <p>Description: <span>${item.description}</span></p>
    <p>Price: <span>${item.price}</span></p>
    <p>Material: <span>${item.material}</span></p>
    <div>
        ${isOwner ? html`<a href="/edit/${item._id}" class="btn btn-info">Edit</a>
                   <a @click=${onDelete} href="javascript:void(0)" class="btn btn-red">Delete</a>` 
            : null}
    </div>`;

export function showDetailsPage(ctx) {
const id = ctx.params.id;
ctx.render(detailsTemplate(loadItemDetails(id,onDelete)))

async function onDelete(){
await deleteFurniture(id);
ctx.page.redirect('/');
}

}

async function loadItemDetails(id,onDelete){
    const item = await getFurnitureDetails(id)
    const userData = getUserData();
    let isOwner = false;
    if(userData && userData.id == item._ownerId){
        isOwner = true;
    }else {
        isOwner = false;
    }
    return itemTemplate(item,isOwner,onDelete);
}


