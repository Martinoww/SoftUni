function solve(input){
let countOfMinIn23hoursand59min = (24 * 60) - 1
let hours = 0
for(let i = 1; i<= countOfMinIn23hoursand59min; i++){
    if(i % 60 === 0){
        hours++
        i = 0;
    }
    console.log(`${hours}:${i}`)
}



}
solve()