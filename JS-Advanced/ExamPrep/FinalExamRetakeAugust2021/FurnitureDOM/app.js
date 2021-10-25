window.onload = solve()


function solve(){
 
  let modelInp= document.getElementById('model');
  let yearInp = document.getElementById('year');
  let priceInp = document.getElementById('price');
  let descInp = document.getElementById('description');
  let tBody = document.getElementById('furniture-list');
  let totalPriceField = document.querySelector('.total-price')
  let addBtn = document.getElementById('add');
  addBtn.addEventListener('click', addFurniture);

  function addFurniture(ev){
    ev.preventDefault();
    yearInp.value = Number(yearInp.value);
    priceInp.value = Number(priceInp.value);

    if(modelInp.value != '' && descInp.value != '' && yearInp.value > 0 && priceInp.value > 0){
      let infoTr = document.createElement('tr');
      infoTr.classList.add('info');
  
      let nameTd = document.createElement('td');
      nameTd.textContent = modelInp.value;
      infoTr.appendChild(nameTd);
      
      let priceTd = document.createElement('td');
      priceTd.textContent = Number(priceInp.value).toFixed(2);
      infoTr.appendChild(priceTd);
  
      let buttonsTd = document.createElement('td');
      let infoBtn = document.createElement('button');
      infoBtn.classList.add('moreBtn');
      infoBtn.textContent = `More Info`;
      infoBtn.addEventListener('click', showInfo);
      buttonsTd.appendChild(infoBtn);
  
      let buyBtn = document.createElement('button');
      buyBtn.classList.add('buyBtn');
      buyBtn.textContent = `Buy it`;
      buyBtn.addEventListener('click', buyFurniture);
      buttonsTd.appendChild(buyBtn);
      infoTr.appendChild(buttonsTd);
      tBody.appendChild(infoTr);
  
      let hiddenTr = document.createElement('tr');
      hiddenTr.classList.add('hide');
  
      let yearTd = document.createElement('td');
      yearTd.textContent = `Year: ${yearInp.value}`;
      hiddenTr.appendChild(yearTd);
  
      let descrTd = document.createElement('td');
      descrTd.setAttribute('colspan', 3);
      descrTd.textContent = `Description: ${descInp.value}`;
      hiddenTr.appendChild(descrTd);
  
      tBody.appendChild(hiddenTr);
  
      
      
      
      function showInfo(ev){
        ev.target.textContent = ev.target.textContent == 'More Info' ? 'Less Info' : 'More Info';
        hiddenTr.style.display = hiddenTr.style.display == '' ? 'contents' : '';
      };
      
      function buyFurniture(ev){
        let currentTr = ev.target.parentElement.parentElement;
        let price = Number(currentTr.querySelectorAll('td')[1].textContent);
        let total = Number(totalPriceField.textContent)
        total += price;
        totalPriceField.textContent = total.toFixed(2)
        tBody.removeChild(infoTr);
        tBody.removeChild(hiddenTr);
      }
      
      document.querySelector('form').reset();
    }
    document.querySelector('form').reset();
  }
}