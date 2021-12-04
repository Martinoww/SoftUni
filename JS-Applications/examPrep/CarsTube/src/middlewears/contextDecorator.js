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
    document.querySelector('div#profile').style.display = 'block';
    document.querySelector('div#profile a').textContent = `Welcome ${userData.username}`;
    document.querySelector('div#guest').style.display = 'none';
}else {
    document.querySelector('div#profile').style.display = 'none';
    document.querySelector('div#guest').style.display = 'block';
}

}


async function onLogout(){
await logout();
updateUserNav()
page.redirect('/')
}

