import { page } from "./lib.js";
import { contextDecorator, updateUserNav } from "./middlewears/contextDecorator.js";
import { catalogPage } from "./views/catalog.js";
import { createPage } from "./views/create.js";
import { detailsPage } from "./views/details.js";
import { editPage } from "./views/edit.js";
import { homePage } from "./views/home.js";
import { loginPage } from "./views/login.js";
import { myListings } from "./views/myListings.js";
import { registerPage } from "./views/register.js";
import { searchPage } from "./views/search.js";

page(contextDecorator);
page('/', homePage);
page('/my-listings', myListings);
page('/catalog', catalogPage);
page('/create', createPage);
page('/edit/:id', editPage);
page('/details/:id', detailsPage);
page('/login', loginPage);
page('/register', registerPage);
page('/by-year', searchPage);

updateUserNav();
page.start();