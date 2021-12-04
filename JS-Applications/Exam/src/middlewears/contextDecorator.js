import { render,page } from "../lib.js";
import { getUserData } from "../api/util.js";
import { logout } from "../api/data.js";

const root = document.getElementById('main-content');
document.getElementById('logoutBtn').addEventListener('click', onLogout);
export function contextDecorator(ctx, next){
ctx.render = (template) => render(template, root);
ctx.updateUserNav = updateUserNav;
next();
}


export function updateUserNav(){
const userData = getUserData();

if(userData){
    [...document.querySelectorAll('li#user')].forEach(e=> e.style.display = 'inline-block');
    [...document.querySelectorAll('li#guest')].forEach(e=> e.style.display = 'none');

}else {
    [...document.querySelectorAll('li#user')].forEach(e=> e.style.display = 'none');
    [...document.querySelectorAll('li#guest')].forEach(e=> e.style.display = 'inline-block');
}

}


async function onLogout(){
await logout();
updateUserNav()
page.redirect('/')
}

