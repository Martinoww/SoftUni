function oddAndEvenSum(num){
let convertNumToString = num.toString()
let evenSum = 0;
let oddSum = 0;

for(let digit of convertNumToString){
let currentNum = Number(digit)
if(currentNum % 2 === 0){
    evenSum += currentNum
}else{
    oddSum += currentNum
}
}
 
let result = `Odd sum = ${oddSum}, Even sum = ${evenSum}`
return result

}
let result = oddAndEvenSum(3495892137259234);
console.log(result);