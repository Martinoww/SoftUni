function solve(input){
let n = Number(input.shift());
let minNumber = Number.MAX_SAFE_INTEGER
let number = Number(input.shift())
for(let i = 1; i <= n; i++){
    if(minNumber > number){
        minNumber = number 
    }
    number = Number(input.shift())
}

console.log(minNumber)

}
solve(["2",
"-1",
"-2"])




