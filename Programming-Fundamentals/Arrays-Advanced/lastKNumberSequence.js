function lastKNumberSequence(n, k){
let result = [1]

for(let i = 1; i < n; i++){
    let sum = 0
    let newarr = result.slice(-k)
    for(let j = 0; j < newarr.length; j++){
        sum += Number(newarr[j])
        
    }
    result.push(sum)
}
console.log(result.join(' '));

}
lastKNumberSequence(6, 3)