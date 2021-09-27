function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let inputValue = document.getElementById('searchField').value
      let input = inputValue.toLowerCase();
      let elements = Array.from(document.querySelectorAll('tbody tr'));

      for(let el of elements){
         let line = el.textContent;
         let text = line.toLowerCase();
         if(text.includes(input)){
            el.classList.add('select');
         }else{
            el.classList.remove('select');
         }
      }
      document.getElementById('searchField').value = " ";
   }
}