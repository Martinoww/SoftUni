import { logout } from "./api/data.js";
import { getUserData } from "./api/util.js";
import { render, page } from "./lib.js";
import { catalogPage } from "./views/catalog.js";
import { createPage } from "./views/create.js";
import { detailsPage } from "./views/details.js";
import { editPage } from "./views/edit.js";
import { homePage } from "./views/home.js";
import { loginPage } from "./views/login.js";
import { profilePage } from "./views/profile.js";
import { registerPage } from "./views/register.js";


document.getElementById('logoutBtn').addEventListener('click', onLogout);
const root = document.querySelector('main');

page(ctxDecorator);
page("/", isUser, homePage);
page("/catalog", catalogPage);
page("/profile", profilePage);
page("/create", createPage);
page("/edit/:id", editPage);
page("/details/:id", detailsPage);
page("/login", loginPage);
page("/register", registerPage);

updateNav()
page.start();

function ctxDecorator(ctx, next){
    ctx.render = (template) => render(template, root);
    ctx.updateNav = updateNav;
    next();
}

function updateNav(){
const userData = getUserData()

    if(userData){
    document.querySelector('div.user').style.display = 'block';
    document.querySelector('div.user div.profile span').textContent = `Welcome, ${userData.email}`;
    document.querySelector('div.guest').style.display = 'none';
}else {
    document.querySelector('div.user').style.display = 'none';
    document.querySelector('div.guest').style.display = 'block'; 
  }
}

function isUser(ctx, next){
    const userData = getUserData();
if(userData){
    ctx.page.redirect('/catalog');
}else {
    next();
}

}

async function onLogout(){
 await logout()
    updateNav();
    page.redirect('/')
}
