import { editFurniture, getFurnitureDetails } from "../api/data.js";
import { html } from "../lib.js";

const editTemplate = (onEdit, item, nonFilledFields) => html`
<div class="row space-top">
    <div class="col-md-12">
        <h1>Edit Furniture</h1>
        <p>Please fill all fields.</p>
    </div>
</div>
<form @submit=${onEdit}>
${nonFilledFields && nonFilledFields.errMsg ? html`<div class="error">${nonFilledFields.errMsg}</div>` : null}
    <div class="row space-top">
        <div class="col-md-4">
            <div class="form-group">
                <label class="form-control-label" for="new-make">Make</label>
                <input class=${"form-control" + (nonFilledFields.make ? ' is-invalid' : '')} id="new-make" type="text" name="make" .value="${item.make}">
            </div>
            <div class="form-group has-success">
                <label class="form-control-label" for="new-model">Model</label>
                <input class=${"form-control" + (nonFilledFields.model ? ' is-invalid' : '')} id="new-model" type="text" name="model" .value="${item.model}">
            </div>
            <div class="form-group has-danger">
                <label class="form-control-label" for="new-year">Year</label>
                <input class=${"form-control" + (nonFilledFields.year ? ' is-invalid' : '')} id="new-year" type="number" name="year" .value="${item.year}">
            </div>
            <div class="form-group">
                <label class="form-control-label" for="new-description">Description</label>
                <input class=${"form-control" + (nonFilledFields.description ? ' is-invalid' : '')} id="new-description" type="text" name="description" .value="${item.description}">
            </div>
        </div>
        <div class="col-md-4">
            <div class="form-group">
                <label class="form-control-label" for="new-price">Price</label>
                <input class=${"form-control" + (nonFilledFields.price ? ' is-invalid' : '')} id="new-price" type="number" name="price" .value="${item.price}">
            </div>
            <div class="form-group">
                <label class="form-control-label" for="new-image">Image</label>
                <input class=${"form-control" + (nonFilledFields.img ? ' is-invalid' : '')} id="new-image" type="text" name="img" .value="${item.img}">
            </div>
            <div class="form-group">
                <label class="form-control-label" for="new-material">Material (optional)</label>
                <input class="form-control" id="new-material" type="text" name="material" .value="${item.material}">
            </div>
            <input type="submit" class="btn btn-info" value="Edit" />
        </div>
    </div>
</form>`;

export async function showEditPage(ctx) {
const item = await getFurnitureDetails(ctx.params.id);   
console.log(item); 
update()
function update(nonFilledFields){
    ctx.render(editTemplate(onEdit, item, nonFilledFields || {}));
}
    
        
async function onEdit(ev){
ev.preventDefault();
const formData = [...(new FormData(ev.target)).entries()];
const fields = formData.reduce((acc, [k,v])=> Object.assign(acc, {[k]:v.trim()}), {});
let nonFilledFields = formData.filter(([k,v]) => k != 'material' && v.trim() == '');
nonFilledFields = nonFilledFields.reduce((acc, [k,v])=> Object.assign(acc, {[k]:true}), {});
if(Object.keys(nonFilledFields).length > 0){
    nonFilledFields.errMsg = `All mandatory fields are required!`;
    return update(nonFilledFields);
}
update();
fields.year = Number(fields.year);
fields.price = Number(fields.price);
if(fields.make.length < 4 || fields.model.length < 4){
    nonFilledFields = {
        make: true,
        model:true
    }
    nonFilledFields.errMsg = `Make and Model must be at least 4 symbols long`;
    return update(nonFilledFields);
}else if(fields.year < 1950 || fields.year > 2050){
    nonFilledFields = {
        year:true
    }
    if(typeof fields.year != 'number'){
    nonFilledFields.errMsg = `Year must be a number`;
    }else {
        nonFilledFields.errMsg = `Year must be between 1950 and 2050`;
    }
    return update(nonFilledFields);
}else if(fields.description.length <= 10){
    nonFilledFields = {
        description:true
    }
    nonFilledFields.errMsg = `Description must be more than 10 symbols`;
    return update(nonFilledFields);
}else if(fields.price < 0){
    nonFilledFields = {
        price:true
    }
    if(typeof fields.price != 'number'){
    nonFilledFields.errMsg = `Price must be a number`;
    }else {
        nonFilledFields.errMsg = `Price must be positive number`;
    }
    return update(nonFilledFields);
}

const data = await editFurniture(ctx.params.id, fields)
ev.target.reset();
ctx.page.redirect(`/details/${data._id}`);

}

}