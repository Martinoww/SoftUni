function rounding(number, percision){
if(percision > 15){
    percision = 15;
}
console.log(parseFloat(number.toFixed(percision)))
}
rounding(10.5,3)