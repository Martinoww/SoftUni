function firstAndLastKnums(arr) {
let k = arr.shift();

let firstCouple = arr.slice(0, k);
let secondCouple = arr.slice(-k)
console.log(firstCouple.join(' '));
console.log(secondCouple.join(' '));


}
firstAndLastKnums([2, 7, 8, 9]);
