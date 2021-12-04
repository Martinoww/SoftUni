import { html, render } from "./node_modules/lit-html/lit-html.js"; 

const root = document.getElementById('root');

document.querySelector('form').addEventListener('submit', (ev)=>{
ev.preventDefault()
    const townsArr = document.getElementById('towns').value.split(',').map(t=> t.trim());
    render(townsTemplate(townsArr), root)
    ev.target.reset();
})


const townsTemplate = (towns)=> html`
<ul>
   ${towns.map(t => html`<li>${t}</li>`)} 
</ul>`;