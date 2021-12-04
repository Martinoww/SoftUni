import { html, render } from "./node_modules/lit-html/lit-html.js";
import { cats } from "./catSeeder.js";
cats.map(c=> c.clicked = false);


const root = document.getElementById('allCats')
const catTemplate = (cat) => html` 
<li>
    <img src="./images/${cat.imageLocation}.jpg" width="250" height="250" alt="Card image cap"/>
    <div class="info">
        <button @click=${onClick.bind(null, cat)} class="showBtn">${cat.clicked ? 'Hide' : 'Show'} status code</button>
        <div class="status" style="display: ${cat.clicked ? 'block' : 'none'}" id="${cat.id}">
            <h4>${cat.statusCode}</h4>
            <p>${cat.statusMessage}</p>
        </div>
    </div>
</li>`;
update()

function update(){
    render(html`<ul>${cats.map(c=> catTemplate(c))}</ul>`, root)
}

function onClick(cat){
cat.clicked = !cat.clicked;
update();
}