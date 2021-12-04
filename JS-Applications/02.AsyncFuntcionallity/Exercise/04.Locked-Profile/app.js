async function lockedProfile() {
    let main = document.getElementById('main');
    let user1ForRemove = document.querySelector('#main div');
    main.removeChild(user1ForRemove);
    let url = `http://localhost:3030/jsonstore/advanced/profiles`;
    let response = await fetch(url);
    try {
        if(response.status != 200){
            throw new Error(`Error`);
        }else {
            let data = await response.json();
            let dataValues = Object.values(data);
            for(let element of dataValues){
                let divElement = document.createElement('div');
                divElement.className = "profile";

                let imgElement = document.createElement('img');
                imgElement.className = "userIcon";
                imgElement.setAttribute('src', "./iconProfile2.png");
                divElement.appendChild(imgElement);

                let labelElement = document.createElement('label');
                labelElement.textContent = `Lock`;
                divElement.appendChild(labelElement);

                let checkInp = document.createElement('input');
                checkInp.setAttribute('type', 'radio');
                checkInp.setAttribute('name', `${element._id}`);
                checkInp.value = "lock";
                checkInp.checked = true;
                divElement.appendChild(checkInp);

                let labelElement2 = document.createElement('label');
                labelElement2.textContent = `Unlock`;
                divElement.appendChild(labelElement2);

                let checkInp2 = document.createElement('input');
                checkInp2.setAttribute('type', 'radio');
                checkInp2.setAttribute('name', `${element._id}`);
                checkInp2.value = "unlock";
                checkInp2.checked = false;
                divElement.appendChild(checkInp2);

                let brElement = document.createElement('br');
                divElement.appendChild(brElement);

                let hrElement = document.createElement('hr');
                divElement.appendChild(hrElement);

                let labelElement3 = document.createElement('label');
                labelElement3.textContent = `Username`;
                divElement.appendChild(labelElement3);

                let inpElement = document.createElement('input');
                inpElement.setAttribute('type', 'text');
                inpElement.setAttribute('name', `${element._id}`);
                inpElement.setAttribute('value', `${element.username}`);
                inpElement.disabled = true;
                inpElement.readOnly = true;
                divElement.appendChild(inpElement);

                let divChild = document.createElement('div');
                divChild.setAttribute('id', `${element._id}HiddenFields`);
                let hrElement2 = document.createElement('hr');
                divChild.appendChild(hrElement2);

                let labelElement4 = document.createElement('label');
                labelElement4.textContent = `Email:`;
                divChild.appendChild(labelElement4);

                let inpElement2 = document.createElement('input');
                inpElement2.setAttribute('type', 'email');
                inpElement2.setAttribute('name', `${element._id}Email`);
                inpElement2.setAttribute('value', `${element.email}`);
                inpElement2.disabled = true;
                inpElement2.readOnly = true;
                divChild.appendChild(inpElement2);

                let labelElement5 = document.createElement('label');
                labelElement5.textContent = `Age:`;
                divChild.appendChild(labelElement5);

                let inpElement3 = document.createElement('input');
                inpElement3.setAttribute('type', 'email');
                inpElement3.setAttribute('name', `${element._id}Age`);
                inpElement3.setAttribute('value', `${element.age}`);
                inpElement3.disabled = true;
                inpElement3.readOnly = true;
                divChild.appendChild(inpElement3);
                divChild.style.display = 'none';

                divElement.appendChild(divChild);

                let showMoreBtn = document.createElement('button');
                showMoreBtn.textContent = `Show more`;
                showMoreBtn.addEventListener('click', showMore.bind(null, divChild, showMoreBtn, checkInp, checkInp2));
                divElement.appendChild(showMoreBtn);

                main.appendChild(divElement);
            }
        }
    } catch (error) {
        alert(error.message);
    }

function showMore(divChild, showMoreBtn, lockInp, unlockInp){
    if(lockInp.checked == true){
        return
    }else if(unlockInp.checked == true){
       showMoreBtn.textContent = showMoreBtn.textContent == 'Show more' ? 'Hide it' : 'Show more';
       divChild.style.display =  divChild.style.display === 'none' ? 'block' : 'none';
    }
    

}


}