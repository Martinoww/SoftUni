function solve(text){
let firstHalf = text.substring(0, text.length / 2);
let secondHalf = text.substring(text.length / 2)

let reversedFirstHalf = firstHalf.split('').reverse().join('')
let reversedSecondHalf = secondHalf.split('').reverse().join('')

console.log(reversedFirstHalf);
// console.log(`---------`);
console.log(reversedSecondHalf);
}
solve('sihToDtnaCuoYteBIboJsihTtAdooGoSmI')