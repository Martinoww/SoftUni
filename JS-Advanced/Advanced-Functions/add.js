function solution(n){
let counter = 0;

return function increment(counter){
    return counter += n
}

}
let add7 = solution(7);
console.log(add7(2));
console.log(add7(3));

