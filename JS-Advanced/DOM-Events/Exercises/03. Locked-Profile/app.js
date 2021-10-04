function lockedProfile() {
   Array.from(document.getElementsByTagName('button')).forEach(b => b.addEventListener('click', onClick));

   function onClick(e){
    let parent = e.target.parentElement;
    if(parent.querySelector('input[type = "radio"][value = "unlock"]').checked){
        if(e.target.textContent === 'Show more' && parent.querySelector('div').id.includes('HiddenFields')){
            parent.querySelector('div').style.display = 'block';
            e.target.textContent = 'Hide it';
        }else {
            parent.querySelector('div').style.display = 'none';
            e.target.textContent = 'Show more';
        }
    }
    


}
}