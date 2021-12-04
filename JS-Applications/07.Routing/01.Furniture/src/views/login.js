import { login } from "../api/data.js";
import { html } from "../lib.js";

const loginTemplate = (onLogin, errMsg) => html` <div class="row space-top">
<div class="col-md-12">
    <h1>Login User</h1>
    <p>Please fill all fields.</p>
</div>
</div>
<form @submit=${onLogin}>
<div class="row space-top">
    <div class="col-md-4">
    ${errMsg ? html`<div class="error">${errMsg}</div>` : null}
    <div class="form-group">
        <label class="form-control-label" for="email">Email</label>
        <input class=${"form-control"+ (errMsg ? ' is-invalid' : '')} id="email" type="text" name="email" />
    </div>
    <div class="form-group">
        <label class="form-control-label" for="password">Password</label>
        <input  class=${"form-control"+ (errMsg ? ' is-invalid' : '')} id="password"type="password" name="password"/>
    </div>
    <input type="submit" class="btn btn-primary" value="Login" />
    </div>
</div>
</form>`;

export function showLoginPage(ctx) {
update()   
   
 function update(errMsg){
    ctx.render(loginTemplate(onLogin,errMsg))
 }   

async function onLogin(event){
event.preventDefault();

const formData = new FormData(event.target);
const email = formData.get('email');
const password = formData.get('password');
try {
await login(email, password);
ctx.updateNav();
event.target.reset();
ctx.page.redirect('/');
} catch (error) {
    update(error.message)
  }
 }
} 
