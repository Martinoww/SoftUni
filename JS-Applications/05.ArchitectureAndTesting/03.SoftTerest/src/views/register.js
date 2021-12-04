import { register } from "../api/data.js";
import { showHomeView } from "./home.js";


const section = document.querySelector('#registerView');
section.remove();
const form  = section.querySelector('form');
form.addEventListener('submit', onRegister);
let ctx = null;
export async function showRegisterView(ctxTarget){
    ctx = ctxTarget;
    ctx.showCurrPage(section);
}


async function onRegister(ev){
ev.preventDefault();
    const formData = new FormData(form);
    const email = formData.get('email');
    const password = formData.get('password');
    const repass = formData.get('repeatPassword');

    if(password != repass){
        alert('Passwords dont\'t match');
        return;
    }

    await register(email, password);
    form.reset();
    showHomeView(ctx);

}