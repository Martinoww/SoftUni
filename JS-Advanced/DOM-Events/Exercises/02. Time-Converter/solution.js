function attachEventsListeners() {
const buttns = Array.from(document.querySelectorAll('input[type = "button"]'))
.forEach(b => b.addEventListener('click', onClick));

let ratios = {
    days: 1,
    hours: 24,
    minutes: 1440,
    seconds: 86400,
}

function convert(value, unit){
    const inDays = value / ratios[unit];
    return {
    days: inDays,
    hours: inDays * ratios.hours,
    minutes: inDays * ratios.minutes,
    seconds: inDays * ratios.seconds,
    }
}
let inputValuesFields = Array.from(document.querySelectorAll('input[type="text"]'))


function onClick(e){
let parent = e.target.parentElement;
let inputValue = parent.children[1].value;
inputValue = Number(inputValue);
let inputId = parent.children[1].id;
let time = convert(inputValue, inputId);    
for(let field of inputValuesFields){
    if(field.id === 'days'){
        field.value = time.days;
    }else if(field.id === 'hours'){
        field.value = time.hours;
    }else if(field.id === 'minutes'){
        field.value = time.minutes;
    }else if(field.id === 'seconds'){
        field.value = time.seconds;
    }
}
}
 
}