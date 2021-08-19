//Използвайте формулата: градус = радиан * 180 / π.Числото π в JavaScript програми е достъпно чрез Math.PI. 
function convert(input){
// taking the input:
const radians = Number(input[0]);
// solving:
const degrees = radians * 180 / Math.PI;
console.log(degrees.toFixed(0));

}
convert(["3.1416"]);
convert(["6.2832"]);
convert(["0.7854"]);
convert(["0.5236"]);