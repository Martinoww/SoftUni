function solve(input){
let [e1, e2, e3, students] = input.map(Number)
let hours = 0;
let efficiency = e1 + e2 + e3
while(students > 0){
hours++
if(hours % 4 !== 0){
students -= efficiency
}

}
console.log(`Time needed: ${hours}h.`);

}
solve(['1','0','0','9'])
solve(['3','2','5','0'])