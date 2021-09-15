function solve(str){
let pattern = /(?<words>\w+)/g
let matches = str.match(pattern)
let toStr = matches.toString();
let toUpper = toStr.toUpperCase();
console.log(toUpper.split(',').join(', '));
}
solve('hello')