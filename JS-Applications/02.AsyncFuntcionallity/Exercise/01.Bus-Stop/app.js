async function getInfo() {
    let stopNameDiv = document.getElementById('stopName');
    let busesUl = document.getElementById('buses');
    let stopId = document.getElementById('stopId').value;
    let url = `http://localhost:3030/jsonstore/bus/businfo/${stopId}`
    if(stopId == ''){
        return
    }
    stopNameDiv.textContent = `Loading...`

    try {
      let res = await fetch(url);
        if(res.status !== 200){
            throw new Error('Error')
        }else {
            busesUl.replaceChildren();
            let data = await res.json();
            stopNameDiv.textContent = data.name;

            for(let [key, value] of Object.entries(data.buses)){
                let liElement = document.createElement('li');
                liElement.textContent = `Bus ${key} arrives in ${value} minutes`;
                busesUl.appendChild(liElement);
            }

        }
    }catch (error){
        stopNameDiv.textContent = error.message;
        busesUl.replaceChildren();
    }
  
}