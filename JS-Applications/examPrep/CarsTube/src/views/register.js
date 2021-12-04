import { register } from "../api/data.js";
import { html } from "../lib.js";

const registerTemplate = (onRegister) => html` 
<section id="register">
  <div class="container">
    <form @submit=${onRegister} id="register-form">
      <h1>Register</h1>
      <p>Please fill in this form to create an account.</p>
      <hr />

      <p>Username</p>
      <input
        type="text"
        placeholder="Enter Username"
        name="username"
        required
      />

      <p>Password</p>
      <input
        type="password"
        placeholder="Enter Password"
        name="password"
        required
      />

      <p>Repeat Password</p>
      <input
        type="password"
        placeholder="Repeat Password"
        name="repeatPass"
        required
      />
      <hr />

      <input type="submit" class="registerbtn" value="Register" />
    </form>
    <div class="signin">
      <p>Already have an account? <a href="/login">Sign in</a>.</p>
    </div>
  </div>
</section>`;

export function registerPage(ctx) {
ctx.render(registerTemplate(onRegister));

async function onRegister(event) {
event.preventDefault();

const formData = new FormData(event.target);
const username = formData.get("username");
const password = formData.get("password");
const repeatPass = formData.get("repeatPass");

if (username == "" || password == "" || repeatPass == '') {
    alert("All fields are required!");
}else if(password != repeatPass){
    alert('Passwords don\'t match!')
} else {
    await register(username, password);
    ctx.updateUserNav();
    ctx.page.redirect("/catalog");
}
  }
}
