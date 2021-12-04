

const section = document.querySelector('#homeView');
section.remove();
let ctx = null;
export async function showHomeView(ctxTarget){
    ctx = ctxTarget;
    ctx.showCurrPage(section);
    ctx.updateNav();
}