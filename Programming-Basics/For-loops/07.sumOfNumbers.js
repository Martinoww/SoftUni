function solve(input){
let text = input[0];
let sum = 0
for(let i = 0; i < text.length; i++){
    sum += Number(text[i])
}
console.log(`The sum of the digits is:${sum}`)

}
solve(["1234"]);