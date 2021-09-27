function toggle() {
  let button = document.querySelector('.button');
  button.textContent = button.textContent == 'More' ? 'Less' : 'More';
  document.getElementById('extra').style.display =   document.getElementById('extra').style.display == 'block' ? 'none' : 'block'
}