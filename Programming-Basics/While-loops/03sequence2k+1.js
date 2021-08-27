function solve(input){
let n = Number(input.shift())
let k = 1;
while(k <= n){
    console.log(k);
    k = 2 * k + 1;
}


}
solve(["31"])