import { login } from '../api/data.js';
import { html } from '../lib.js';

let localCtx;
const loginTemplate = () => html`
<section id="login-page" class="auth">
    <form id="login" @submit=${onSubmit}>
        <div class="container">
            <div class="brand-logo"></div>
            <h1>Login</h1>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Sokka@gmail.com">

            <label for="login-pass">Password:</label>
            <input type="password" id="login-password" name="password">
            <input type="submit" class="btn submit" value="Login">
            <p class="field">
                <span>If you don't have profile click <a href="/register">here</a></span>
            </p>
        </div>
    </form>
</section>`

export function loginPage(ctx){
    localCtx = ctx;
    ctx.render(loginTemplate());
}

async function onSubmit(event){
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);

    const email = formData.get('email').trim();
    const password = formData.get('password').trim();
    if(!email || !password){
        return alert('Fields must not be empty!');
    }
    await login(email, password);
    localCtx.updateUserNav();
    localCtx.page.redirect('/')
}