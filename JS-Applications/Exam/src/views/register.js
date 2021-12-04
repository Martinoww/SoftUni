import { register } from "../api/data.js";
import { html } from "../lib.js";

const registerTemplate = (onRegister) => html` 
 <section id="registerPage">
    <form @submit=${onRegister}>
        <fieldset>
            <legend>Register</legend>

            <label for="email" class="vhide">Email</label>
            <input id="email" class="email" name="email" type="text" placeholder="Email">

            <label for="password" class="vhide">Password</label>
            <input id="password" class="password" name="password" type="password" placeholder="Password">

            <label for="conf-pass" class="vhide">Confirm Password:</label>
            <input id="conf-pass" class="conf-pass" name="conf-pass" type="password" placeholder="Confirm Password">

            <button type="submit" class="register">Register</button>

            <p class="field">
                <span>If you already have profile click <a href="/login">here</a></span>
            </p>
        </fieldset>
    </form>
</section>`;

export function registerPage(ctx) {
ctx.render(registerTemplate(onRegister));

async function onRegister(event){
    event.preventDefault();
const formData = new FormData(event.target);
const email = formData.get('email').trim();
const password = formData.get('password').trim();
const repass = formData.get('conf-pass').trim();

if(email == '' || password == '' || repass == ''){
    alert('All fields are required!');
}else if(password != repass){
    alert('Passwords don\'t match!');
}else {
    await register(email, password);
    ctx.updateUserNav();
    ctx.page.redirect('/');
}

}
}
