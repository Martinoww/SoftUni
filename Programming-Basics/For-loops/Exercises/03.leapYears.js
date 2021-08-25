function solve(input){
let firstYear = Number(input[0]);
let lastYear = Number(input[1]);
for(let i = firstYear; i <= lastYear; i++){
    if(i % 4 === 0){
        console.log(i)
    }
}



}
solve(["1908","1919"])
