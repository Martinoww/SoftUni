function solve(input){
let firstNum = Number(input[0]);
let secondNum = Number(input[1]);
let sum = 0;
let outputNums = '';
for(let i = firstNum; i <= secondNum; i++){
 if(i % 9 == 0){
     sum += i;
     outputNums += i + '\n'
 }
 

}
console.log(`The sum: ${sum}`)
console.log(outputNums)

}
solve(["100", "200"])