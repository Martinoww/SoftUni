function solve() {
  let text = document.getElementById('text').value;
  let caseType = document.getElementById('naming-convention').value;
  let result = '';
  text = text.split(' ');

 for(let i = 0; i < text.length; i++){
   if(caseType === 'Camel Case'){
     if(i == 0){
       text[i] = text[i].toLowerCase();
       result += text[i];
     }else {
       text[i] = text[i][0].toUpperCase() + text[i].slice(1).toLowerCase();
       result += text[i];
     }
   }else if (caseType === 'Pascal Case'){
     text[i] = text[i][0].toUpperCase() + text[i].slice(1).toLowerCase();
     result += text[i];
   }else {
     result = 'Error!'
   }
 }

 document.getElementById('result').textContent = result; 
}