function solve(start, end){
start = Number (start);
end = Number(end);
let result = 0;
for(let i = start; i <= end; i++){
result += i
}
console.log(result);
}
solve('1', '5' )
solve('-8', '20' )