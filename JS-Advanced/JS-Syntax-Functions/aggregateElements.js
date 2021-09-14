function solve(arr){
let sumOfAllIntegers = sum(arr);
let inversed = inverseValues(arr);
let concatenate = concat(arr);

console.log(sumOfAllIntegers);
console.log(inversed);
console.log(concatenate);

function sum(arr){
let result = 0;
for(let i = 0; i < arr.length; i++){
    result += arr[i]
}
return result
}

function inverseValues(arr){
let result = 0;
for(let i = 0; i < arr.length; i++){
    result += 1 / arr[i]
}
return result;
}

function concat(arr){
return arr.join('')
}

}
// solve([1, 2, 3])
solve([2, 4, 8, 16])
