function solve() {
let arriveBtn = document.getElementById('arrive');
let departBtn = document.getElementById('depart');
let infoSpan = document.querySelector('#info span');
let nextStopObj = {next: "depot"};

async function depart() {
        infoSpan.textContent = `Loading...`;
        departBtn.disabled = true;
        let url = `http://localhost:3030/jsonstore/bus/schedule/${nextStopObj.next}`;
        
        try {
            let response = await fetch(url);
            if(response.status != 200){
                throw new Error(`Error`)
            }else {
                let data = await response.json();
                nextStopObj = data;
                infoSpan.textContent = `Next stop ${data.name}`;
                
            }
        }catch (error) {
            infoSpan.textContent = error.message;
            arriveBtn.disabled = true;
            departBtn.disabled = true;
        }
        arriveBtn.disabled = false;

    }

    function arrive() {
        infoSpan.textContent = `Loading...`;
        departBtn.disabled = false;
        arriveBtn.disabled = true;
       
    infoSpan.textContent = `Arriving at ${nextStopObj.name}`;
           
    }

    return {
        depart,
        arrive
    };
}

let result = solve();