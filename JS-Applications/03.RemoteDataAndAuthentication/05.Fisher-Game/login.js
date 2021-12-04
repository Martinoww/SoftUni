window.addEventListener('load', ()=>{
let form = document.querySelector('form');
form.addEventListener('submit', onLogin);

let userData = sessionStorage.getItem('userData');

if (userData == null) {
    document.getElementById("user").style.display = "none";
    document.getElementById("guest").style.display = "inline-block";
    document.querySelector(".email span").textContent = `guest`;
    document.querySelector("#addForm button").disabled = true;
  } else {
    document.getElementById("user").style.display = "inline-block";
    document.getElementById("guest").style.display = "none";
    document.querySelector(".email span").textContent = userData.email;
    document.querySelector("#addForm button").disabled = false;
    document.querySelector("#addForm").addEventListener("submit", listACatch);
    document.querySelector(".load").addEventListener("click", loadCatches);
    document
      .querySelector("#catches")
      .addEventListener("click", deleteOrUpdateACatch);
  }


})

async function onLogin(event){
    event.preventDefault();
    console.log(`heere`);
    let formData = new FormData(event.target);
    let email = formData.get('email').trim();
    let password = formData.get('password').trim();

    let url = 'http://localhost:3030/users/login';

    try {
        let response = await fetch(url, {
            method:'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({email, password})
        });

        if(response.ok == false){
            let err = await response.json();
            throw new Error(err.message);
        }else{
            let data = await response.json();
            const userData = {
                email: data.email,
                username: data.username,
                password: data.password,
                accessToken: data.accessToken,
                id: data._id,
            };

            sessionStorage.setItem('userData', JSON.stringify(userData));
            event.target.reset();
            window.location = '/index.html';

        }
    } catch (error) {
        alert(error.message);
    }


}