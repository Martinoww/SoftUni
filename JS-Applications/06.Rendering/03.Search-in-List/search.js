import { html,render } from "./node_modules/lit-html/lit-html.js";
import { towns } from "./towns.js";
let townsArr = [];
towns.map(t=> townsArr.push({town:t, match:false}));


const root = document.getElementById('towns');
const inputField = document.getElementById('searchText');
const resultField = document.getElementById('result');
document.querySelector('button').addEventListener('click', onSearch);

const townTemplate = (t) =>html`
<li class="${t.match ? 'active' : ''}">${t.town}</li>`;
update();
function update(){
   render(html`<ul>${townsArr.map(t => townTemplate(t))}</ul>`, root);
}


function onSearch(){
   const searchingVal = inputField.value.toLocaleLowerCase().trim();
   const matches = townsArr.filter(t =>{
      if(searchingVal && t.town.toLocaleLowerCase().includes(searchingVal)){
         t.match = true;
         return t;
      }else {
         t.match = false;
         return;
      }}).length;
  
   resultField.textContent = `${matches} matches found`;
update();
}