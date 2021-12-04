window.addEventListener('load', solution);

async function solution() {
    let main = document.getElementById('main');
    let url = `http://localhost:3030/jsonstore/advanced/articles/list `;

    let response = await fetch(url);
    try {
        if(response.status != 200){
            throw new Error(`Error!`);
        }else {
            let data = await response.json();
            for(let element of data){
                let divElement = document.createElement('div');
                divElement.className = "accordion";

                let divChild = document.createElement('div');
                divChild.className = "head";

                let spanElement = document.createElement('span');
                spanElement.textContent = `${element.title}`;
                divChild.appendChild(spanElement);

                let showMoreBtn = document.createElement('button');
                showMoreBtn.setAttribute('id', `${element._id}`);
                showMoreBtn.className = "button"
                showMoreBtn.textContent = `More`;
                divChild.appendChild(showMoreBtn);
                
                divElement.appendChild(divChild);
                
                let hiddenDivEl = document.createElement('div');
                hiddenDivEl.className = "extra";
                hiddenDivEl.style.display = 'none';
                
                let pElement = document.createElement('p');
                hiddenDivEl.appendChild(pElement);
                
                divElement.appendChild(hiddenDivEl);
                main.appendChild(divElement);
                showMoreBtn.addEventListener('click', moreInformation.bind(null, hiddenDivEl, pElement, showMoreBtn))
            }
        }
    } catch (error) {
        alert(error.message)
    }

    async function moreInformation(hiddenDivEl, pElement, showMoreBtn){
        let neededIdForReq = showMoreBtn.id;
        let url = `http://localhost:3030/jsonstore/advanced/articles/details/${neededIdForReq}`;
        let response = await fetch(url);
        try {
            if(response.status != 200){
                throw new Error(`Error`);
            }else {
                let data = await response.json();
                pElement.textContent = data.content;
                showMoreBtn.textContent = showMoreBtn.textContent === 'More' ? 'Less' : 'More';
                hiddenDivEl.style.display = hiddenDivEl.style.display === 'none' ? 'block' : 'none'
            }
        } catch (error) {
            alert(error.message);
        }

    }
}