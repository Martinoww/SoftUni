function solve(arr){
let sorted = arr.sort(compare);

function compare(a, b){
let lengthA = a.length;
let lengthB = b.length;
 
return (lengthA - lengthB) || (a.localeCompare(b))
}
console.log(sorted.join('\n'));
}
solve(['test', 
'Deny', 
'omen', 
'Default']


)