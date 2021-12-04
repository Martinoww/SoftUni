import { login } from "../api/data.js";
import { showHomeView } from "./home.js";


const section = document.querySelector('#loginView');
section.remove();
const form  = section.querySelector('form');
form.addEventListener('submit', onLogin);

let ctx = null;
export async function showLoginView(ctxTarget){
    ctx = ctxTarget;
    ctx.showCurrPage(section);

}

async function onLogin(ev){
ev.preventDefault();
    const formData = new FormData(form);
    const email = formData.get('email');
    const password = formData.get('password');

    await login(email, password);
    form.reset();
    showHomeView(ctx);

}