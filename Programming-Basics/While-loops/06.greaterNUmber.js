function solve(input){
let inputElement = input.shift();
let min = Number.MAX_SAFE_INTEGER;
while(inputElement !== 'Stop'){
    let num = Number(inputElement);
    if(num < min){
        min = num
    }
    inputElement = input.shift()
}
console.log(min)
}
solve(["100",
"99",
"80",
"70",
"Stop"])

