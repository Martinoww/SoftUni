import { render,page } from "../lib.js";
import { getUserData } from "../api/util.js";
import { logout } from "../api/data.js";

const root = document.getElementById('site-content');
document.getElementById('logoutBtn').addEventListener('click', onLogout);
export function contextDecorator(ctx, next){
ctx.render = (template) => render(template, root);
ctx.updateUserNav = updateUserNav;
next();
}


export function updateUserNav(){
const userData = getUserData();

if(userData){
    document.querySelector('div#user').style.display = 'inline-block';
    document.querySelector('div#user span').textContent = `Welcome, ${userData.email}`;
    document.querySelector('div#guest').style.display = 'none';
}else {
    document.querySelector('div#user').style.display = 'none';
    document.querySelector('div#guest').style.display = 'inline-block';
}

}


async function onLogout(){
await logout();
updateUserNav()
page.redirect('/')
}

