function sum(num){
let result = 0;
let oddNumber = -1
for(let i = 1; i <= num; i++){
  oddNumber += 2
  result += oddNumber
  console.log(oddNumber)
}
console.log(`Sum: ${result}`)

}
sum(3)