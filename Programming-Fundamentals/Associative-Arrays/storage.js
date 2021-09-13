function solve(arr){
let map = new Map();

for(let line of arr){
let splitedLine = line.split(' ');
let product = splitedLine[0];
let quantity = Number(splitedLine[1]);

if(!map.has(product)){
    map.set(product, quantity);
}else {
    let currQntity = map.get(product);
    let newQntity = currQntity + quantity;
    map.set(product, newQntity)
}
}

for(let kvp of map){
    console.log(`${kvp[0]} -> ${kvp[1]}`);
}

}
solve(['tomatoes 10',
'coffee 5',
'olives 100',
'coffee 40']
)