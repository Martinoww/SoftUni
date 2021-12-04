function attachEvents() {
    let forecastDiv = document.getElementById('forecast');
    let currForecastDiv = document.getElementById('current');
    let upcomingForecast = document.getElementById('upcoming')
    let locationInp = document.getElementById('location');
    let getWeatherBtn = document.getElementById('submit');
    getWeatherBtn.addEventListener('click', getLocation);

    locationInp.addEventListener('change', ()=>{
        getWeatherBtn.disabled = false;
    })
async function getLocation(){
    if(locationInp.value != ""){
    getWeatherBtn.disabled = true;
    let url = `http://localhost:3030/jsonstore/forecaster/locations`;
    try {
        let response = await fetch(url);
        if(response.status != 200){
            throw new Error(`Error`);
        }else {
            let data = await response.json();
            let found  = data.find(e => e.name == locationInp.value); 
            if(found == undefined){
                throw new Error(`Error`);
            }else {
                getCurrConditions(found.code);
                getUpcomingConditions(found.code);
            }
        }
        
    }catch(error){
        forecastDiv.style.display = 'block';
        forecastDiv.querySelector('#current div').textContent = error.message;
        if(document.querySelector(".forecasts") != null && document.querySelector(".forecast-info") != null){
           currForecastDiv.removeChild(document.querySelector(".forecasts"));
           upcomingForecast.removeChild(document.querySelector(".forecast-info"));
        }
    }
    
}

async function getCurrConditions(code){
let url = `http://localhost:3030/jsonstore/forecaster/today/${code}`;
forecastDiv.style.display = 'block';
forecastDiv.querySelector('#current div').textContent = "Current conditions";
if(document.querySelector(".forecasts") != null){
    currForecastDiv.removeChild(document.querySelector(".forecasts"));

}

    let response = await fetch(url);
        let data = await response.json();
        let myDiv = document.createElement('div');
        myDiv.classList.add('forecasts');
        let condSymb = '';

        if(data.forecast.condition === 'Sunny'){
            condSymb = "&#x2600;";
        }else if(data.forecast.condition === 'Partly sunny'){
            condSymb = "&#x26C5;";
        }else if(data.forecast.condition === 'Overcast'){
            condSymb = "&#x2601;";
        }else if(data.forecast.condition === 'Rain'){
            condSymb = "&#x2614;";
        }

        let symbSpan = document.createElement('span');
        symbSpan.className = "condition symbol";
        symbSpan.innerHTML = condSymb;
        myDiv.appendChild(symbSpan);

        let conditionSpan = document.createElement('span');
        conditionSpan.className = "condition";

        let locationSpan = document.createElement('span');
        locationSpan.className = "forecast-data";
        locationSpan.innerHTML = `${data.name}`
        conditionSpan.appendChild(locationSpan);

        let degreesSpan = document.createElement('span');
        degreesSpan.className = "forecast-data";
        degreesSpan.innerHTML = `${data.forecast.low}&#176;/${data.forecast.high}&#176;`
        conditionSpan.appendChild(degreesSpan);
        
        let weatherSpan = document.createElement('span');
        weatherSpan.className = "forecast-data";
        weatherSpan.innerHTML = `${data.forecast.condition}`
        conditionSpan.appendChild(weatherSpan);

        myDiv.appendChild(conditionSpan);
        currForecastDiv.appendChild(myDiv);
}

async function getUpcomingConditions(code){
let url = `http://localhost:3030/jsonstore/forecaster/upcoming/${code}`;
if(document.querySelector(".forecast-info") != null){
    upcomingForecast.removeChild(document.querySelector(".forecast-info"));
}

let response = await fetch(url);
        let data = await response.json();
        let myDiv = document.createElement('div');
        myDiv.classList.add('forecast-info');

        for(let el of data.forecast){
            let condSymb = '';
            if(el.condition === 'Sunny'){
                condSymb = "&#x2600;";
            }else if(el.condition === 'Partly sunny'){
                condSymb = "&#x26C5;";
            }else if(el.condition === 'Overcast'){
                condSymb = "&#x2601;";
            }else if(el.condition === 'Rain'){
                condSymb = "&#x2614;";
            }

            let upcomingSpan = document.createElement('span');
            upcomingSpan.className = "upcoming";

        let symbSpan = document.createElement('span');
        symbSpan.className = "symbol";
        symbSpan.innerHTML = condSymb;
        upcomingSpan.appendChild(symbSpan);

        let degreesSpan = document.createElement('span');
        degreesSpan.className = "forecast-data";
        degreesSpan.innerHTML = `${el.low}&#176;/${el.high}&#176;`
        upcomingSpan.appendChild(degreesSpan);

        let weatherSpan = document.createElement('span');
        weatherSpan.className = "forecast-data";
        weatherSpan.innerHTML = `${el.condition}`
        upcomingSpan.appendChild(weatherSpan);

        myDiv.appendChild(upcomingSpan);
        }
    upcomingForecast.appendChild(myDiv);
}
}

}
attachEvents();