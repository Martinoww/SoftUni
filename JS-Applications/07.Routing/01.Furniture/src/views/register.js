import { register } from "../api/data.js";
import { html } from "../lib.js";

const registerTemplate = (onRegister,errMsg)=>html`
<div class="row space-top">
    <div class="col-md-12">
        <h1>Register New User</h1>
        <p>Please fill all fields.</p>
    </div>
</div>
<form @submit=${onRegister}>
    <div class="row space-top">
        <div class="col-md-4">
    ${errMsg ? html`<div class="error">${errMsg}</div>` : null}
            <div class="form-group">
                <label class="form-control-label" for="email">Email</label>
                <input class=${"form-control"+ (errMsg ? ' is-invalid' : '')} id="email" type="text" name="email">
            </div>
            <div class="form-group">
                <label class="form-control-label" for="password">Password</label>
                <input class=${"form-control"+ (errMsg ? ' is-invalid' : '')} id="password" type="password" name="password">
            </div>
            <div class="form-group">
                <label class="form-control-label" for="rePass">Repeat</label>
                <input class=${"form-control"+ (errMsg ? ' is-invalid' : '')} id="rePass" type="password" name="rePass">
            </div>
            <input type="submit" class="btn btn-primary" value="Register" />
        </div>
    </div>
</form>`;

export function showRegisterPage(ctx){
update();

function update(errMsg){
    ctx.render(registerTemplate(onRegister,errMsg))
}   


async function onRegister(ev){

ev.preventDefault();

const formData = new FormData(ev.target);
const email = formData.get('email');
const password = formData.get('password');
const rePass = formData.get('rePass');

try {
    if(email == ""){
    throw new Error(`All fields are required!`);
    }else if(password != rePass){
    throw new Error(`Passwords don't match!`);
    }
await register(email, password);
ctx.updateNav();
ev.target.reset();
ctx.page.redirect('/');
} catch (error) {
    update(error.message)
    }
}

}

