//Напишете функция за конвертиране на щатски долари (USD) в български лева (BGN). 
//Използвайте фиксиран курс между долар и лев: 1 USD = 1.79549 BGN.
function convert(input){
const usd = 1.79549;
let bgn = Number(input[0]);
let result = bgn * usd;
console.log(result);


}
convert(["22"]);
convert(["100"]);
convert(["12.5"]);