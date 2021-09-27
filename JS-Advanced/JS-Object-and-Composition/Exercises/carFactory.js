function carFactory(carObj){
const engine = typeOfEngine(carObj.power);
function typeOfEngine(power) {
if(power <= 90){
    return {power: 90, volume: 1800};
}else if (power <= 120){
    return {power: 120, volume: 2400};
}else {
    return {power: 200, volume: 3500};
}
}
const carriage = carriageType(carObj.carriage, carObj.color);
function carriageType (type, color){
return {type: type, color: color};
}

const wheels = wheelSize(carObj.wheelsize);
function wheelSize(size){
    if(size % 2 === 0){
        size -= 1;
    }
    let arrOfWheels = new Array(4).fill(size);
    return arrOfWheels
}

return {
    model: carObj.model,
    engine,
    carriage,
    wheels,}

}
console.log(carFactory({ model: 'Opel Vectra',
power: 110,
color: 'grey',
carriage: 'coupe',
wheelsize: 17 }

)); 