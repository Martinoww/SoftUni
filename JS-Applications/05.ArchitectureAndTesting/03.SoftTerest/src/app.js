import { logout } from "./api/data.js"
import { showCatalogView } from "./views/catalog.js"
import { showCreateView } from "./views/create.js"
import { showDetailsView } from "./views/details.js"
import { showHomeView } from "./views/home.js"
import { showLoginView } from "./views/login.js"
import { showRegisterView } from "./views/register.js"

updateNav();
document.querySelector('body').addEventListener('click', (ev)=>{
        let name = links[ev.target.id];
        if(name){
            ev.preventDefault();
            goTo(name);
        }
})



const links = {
    'homeLink': 'home',
    'getStartedLink':'home',
    'catalogLink':'catalog',
    'createLink': 'create',
    'loginLink': 'login',
    'registerLink': 'register',
    'logoutLink': 'logout',
}

const views = {
    'home': showHomeView,
    'catalog': showCatalogView,
    'create': showCreateView,
    'login': showLoginView,
    'register': showRegisterView,
    'logout': onLogout,
    'details': showDetailsView
}

const ctx = {
    showCurrPage,
    updateNav,
    goTo
}
showHomeView(ctx)

function updateNav(){
    const userData = JSON.parse(sessionStorage.getItem('userData'));

    if(userData != null){
        [...document.querySelectorAll('.user')].forEach(el => el.style.display = 'block');
        [...document.querySelectorAll('.guest')].forEach(el => el.style.display = 'none');
    }else {
        [...document.querySelectorAll('.user')].forEach(el => el.style.display = 'none');
        [...document.querySelectorAll('.guest')].forEach(el => el.style.display = 'block');
    }

}

function goTo(name, ...params){
let view  = views[name];
if(typeof view == 'function'){
    view(ctx, ...params);
}
}

function showCurrPage(section){
    document.querySelector('main').replaceChildren(section);
}

async function onLogout(){
    await logout();
    showHomeView(ctx);
}

