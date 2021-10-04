function create(words) {
   let content = document.getElementById('content');
   
   for (let el of words){
      let div = document.createElement('div');
      let para = document.createElement('p');
      para.textContent = el;
      para.style.display = 'none'
      div.appendChild(para);
      div.addEventListener('click', onClick);
      content.appendChild(div);
   }

   function onClick(e){
      e.currentTarget.children[0].style.display = '';
   }
}