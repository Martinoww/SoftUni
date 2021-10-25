// window.onload = addDestination()





function addDestination(){
let [cityInp, countryInp] = document.querySelectorAll('.inputData');
let selectField =  document.querySelector('#seasons');
let destinationsTable = document.querySelector('#destinationsList');

let summerCounter = document.getElementById('summer');
let autumnCounter = document.getElementById('autumn');
let winterCounter = document.getElementById('winter');
let springCounter = document.getElementById('spring');
    if(cityInp.value == '' || countryInp.value == ''){
        return;
    }else {
        let myTr = document.createElement('tr');
        let myDestTd = document.createElement('td');
        myDestTd.textContent = `${cityInp.value}, ${countryInp.value}`;
        myTr.appendChild(myDestTd);
        let mySeasonTd = document.createElement('td');
        let season = selectField.value[0].toUpperCase() + selectField.value.slice(1)
        mySeasonTd.textContent = `${season}`;
        myTr.appendChild(mySeasonTd); 
        destinationsTable.appendChild(myTr);
        
        if(selectField.value == 'summer'){
            summerCounter.value = Number(summerCounter.value) + 1;
        }else if(selectField.value == 'autumn'){
            autumnCounter.value = Number(autumnCounter.value) + 1;
        }else if(selectField.value == 'winter'){
            winterCounter.value = Number(winterCounter.value) + 1;
        }else if(selectField.value == 'spring'){
            springCounter.value = Number(springCounter.value) + 1;
        }
        
        
        cityInp.value = '';
        countryInp.value = '';
        

    }
}