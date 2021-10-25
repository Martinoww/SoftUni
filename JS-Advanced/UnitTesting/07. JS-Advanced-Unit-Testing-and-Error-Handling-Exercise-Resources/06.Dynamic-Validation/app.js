function validate() {
    let emailPattern = /^[a-z]+@[a-z]+\.[a-z]+$/m
    let inputField = document.getElementById('email');
    inputField.addEventListener('change',()=>{
        if(emailPattern.test(inputField.value) === false){
            inputField.classList.add(`error`);
        } 
        if(emailPattern.test(inputField.value) === true){
            inputField.classList.remove(`error`);
        }
    })
}