import { logout } from './api/data.js';
import { getUserData } from './api/util.js';
import {render, page} from './lib.js';
import { showCatalogPage } from './views/catalog.js';
import { showCreatePage } from './views/create.js';
import { showDetailsPage } from './views/details.js';
import { showEditPage } from './views/edit.js';
import { showLoginPage } from './views/login.js';
import { showRegisterPage } from './views/register.js';

const root = document.querySelector('div.container');
document.getElementById('logoutBtn').addEventListener('click', onLogout)

page(contextDecorator);
page('/', showCatalogPage);
page('/my-furniture', showCatalogPage);
page('/login', showLoginPage);
page('/register', showRegisterPage);
page('/edit/:id', showEditPage);
page('/details/:id', showDetailsPage);
page('/create', showCreatePage);
updateNav();
page.start();

function contextDecorator(ctx, next){
    ctx.render = (template)=> render(template, root)
    ctx.updateNav = updateNav;

    next();
}

function updateNav(){
const userData = getUserData();
if(userData){
    [...document.querySelectorAll('#user')].forEach(e=> e.style.display = 'inline-block');
    [...document.querySelectorAll('#guest')].forEach(e=> e.style.display = 'none');
}else {
    [...document.querySelectorAll('#user')].forEach(e=> e.style.display = 'none');
    [...document.querySelectorAll('#guest')].forEach(e=> e.style.display = 'inline-block'); 
}

}

async function onLogout(){
await logout();
updateNav();
page.redirect('/');
}