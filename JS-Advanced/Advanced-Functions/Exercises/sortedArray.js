function solve(arr, command){
let sorted;
if(command === 'asc'){
    sorted = arr.sort((a, b) => a - b);
}else if (command === 'desc'){
    sorted = arr.sort((a, b) => b - a);
}
return sorted;


}
console.log(solve([14, 7, 17, 6, 8], 'desc'));
