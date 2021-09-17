function solve(arr){
let newArr = arr.flat(Infinity).sort((a, b) => b - a).slice(0, 1).toString()
return newArr
}
console.log(solve([[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]
   ));