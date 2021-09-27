function search() {
   let towns = document.querySelectorAll('ul li');
   let searchingWord = document.getElementById('searchText').value;
   if(searchingWord.length === 0){
      return;
   }
   let counter = 0;
   for(let town of towns){
      if(town.textContent.includes(searchingWord)){
         counter++;
         town.style.fontWeight = 'bold';
         town.style.textDecoration = 'underline';
      }else {
         town.style.fontWeight = 'normal';
         town.style.textDecoration = '';
      }
   }
   document.getElementById('result').textContent = `${counter} matches found`;
}
