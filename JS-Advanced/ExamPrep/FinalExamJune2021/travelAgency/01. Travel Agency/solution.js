window.addEventListener('load', solution);

function solution() {
let fullNameInp = document.getElementById('fname');
let emailInp = document.getElementById('email');
let phoneInp = document.getElementById('phone');
let addressInp = document.getElementById('address');
let postCodeInp = document.getElementById('code');
let submitBtn = document.getElementById('submitBTN');
let editBtn = document.getElementById('editBTN');
let continueBtn = document.getElementById('continueBTN');
let infoPreviewSection = document.getElementById('infoPreview');
let divBlock = document.getElementById('block');


submitBtn.addEventListener('click', ()=>{
if(fullNameInp.value != '' && emailInp.value != '') {
  const fullNameInpBlackBox = fullNameInp.value;
  const emailInpBlackBox = emailInp.value;
  const phoneInpBlackBox = phoneInp.value;
  const addressInpBlackBox = addressInp.value;
  const postCodeInpBlackBox = postCodeInp.value;
  let fNameLi = document.createElement('li');
  fNameLi.textContent = `Full Name: ${fullNameInp.value}`;
  infoPreviewSection.appendChild(fNameLi);
  
  let emailLi = document.createElement('li');
  emailLi.textContent = `Email: ${emailInp.value}`;
  infoPreviewSection.appendChild(emailLi);
  
  let phoneLi = document.createElement('li');
  phoneLi.textContent = `Phone Number: ${phoneInp.value}`;
  infoPreviewSection.appendChild(phoneLi);
  
  let addressLi = document.createElement('li');
  addressLi.textContent = `Address: ${addressInp.value}`;
  infoPreviewSection.appendChild(addressLi);
  
  let postCodeLi = document.createElement('li');
  postCodeLi.textContent = `Postal Code: ${postCodeInp.value}`;
  infoPreviewSection.appendChild(postCodeLi);
  
  submitBtn.setAttribute('disabled', 'disabled')
  editBtn.removeAttribute('disabled');
  continueBtn.removeAttribute('disabled')

  fullNameInp.value = '';
  emailInp.value = '';
  phoneInp.value = '';
  addressInp.value = '';
  postCodeInp.value = '';

  continueBtn.addEventListener('click', ()=>{
    divBlock.innerHTML = `<h3>Thank you for your reservation!</h3>`
  });

  editBtn.addEventListener('click', ()=>{
  fullNameInp.value = fullNameInpBlackBox; 
  emailInp.value = emailInpBlackBox;
  phoneInp.value = phoneInpBlackBox;
  addressInp.value = addressInpBlackBox;
  postCodeInp.value = postCodeInpBlackBox; 
  
  infoPreviewSection.innerHTML = '';
  submitBtn.removeAttribute('disabled')
  editBtn.setAttribute('disabled', 'disabled');
  continueBtn.setAttribute('disabled', 'disabled');
  });

}
  
})


}


