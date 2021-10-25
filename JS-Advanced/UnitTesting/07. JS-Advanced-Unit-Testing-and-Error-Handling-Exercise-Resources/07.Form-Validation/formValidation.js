function validate() {
let submitBtn = document.getElementById('submit');
let userNameInpField = document.getElementById('username');
let emailInpField = document.getElementById('email');
let passwordInpField = document.getElementById('password');
let confPasswordInpField = document.getElementById('confirm-password');
let companyCheckBox = document.getElementById('company');
let companyInfoFields = document.getElementById('companyInfo');
let companyNumberInpField = document.getElementById('companyNumber');
let validDiv = document.getElementById('valid');
let isValid = true;
let isChecked = false;
let userNamePattern = /^[A-Za-z0-9]{3,20}$/m;
let passwordPattern = /^\w{5,15}$/m
let emailPattern = /^\w*@\w*\.+[\w*\.*]*$/;1

companyCheckBox.addEventListener('change', ()=>{
    if(companyCheckBox.checked){
        companyInfoFields.style.display = 'block';
        isChecked = true;
    }else {
        companyInfoFields.style.display = 'none';
        companyNumberInpField.value = '';
        isChecked = false;
    }
    
});

submitBtn.addEventListener('click', (ev)=>{
ev.preventDefault();

    if(userNamePattern.test(userNameInpField.value) === false){
        isValid = false;
        userNameInpField.style.borderColor = 'red';
    }else if (userNamePattern.test(userNameInpField.value)){
        isValid = true;
        userNameInpField.style.borderColor = '';
    };
    
    if(emailPattern.test(emailInpField.value) === false){
        isValid = false;
        emailInpField.style.borderColor = 'red';
    }else if (emailPattern.test(emailInpField.value)){
        isValid = true;
        emailInpField.style.borderColor = '';
    };

    if(passwordPattern.test(passwordInpField.value) === false){
        isValid = false;
        passwordInpField.style.borderColor = 'red';
    }else if (passwordPattern.test(passwordInpField.value)){
        isValid = true;
        passwordInpField.style.borderColor = '';
    };

    if(passwordPattern.test(confPasswordInpField.value) === false || confPasswordInpField.value !== passwordInpField.value){
        isValid = false;
        confPasswordInpField.style.borderColor = 'red';
    }else if (passwordPattern.test(confPasswordInpField.value) && confPasswordInpField.value === passwordInpField.value){
        isValid = true;
        confPasswordInpField.style.borderColor = '';
    };

    if(isChecked){
        if(Number(companyNumberInpField.value) < 1000 || Number(companyNumberInpField.value) > 9999 || companyNumberInpField.value == ''){
            isValid = false;
            companyNumberInpField.style.borderColor = 'red';
        }else if (Number(companyNumberInpField.value) >= 1000 && Number(companyNumberInpField.value) <= 9999){
            isValid = true;
            companyNumberInpField.style.borderColor = '';
        };
    }

    if(isValid){
        validDiv.style.display = 'block'
    }else if(isValid === false){
        validDiv.style.display = 'none'
    }
}); 

}
