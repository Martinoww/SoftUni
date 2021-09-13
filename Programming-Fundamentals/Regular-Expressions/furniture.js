function solve(input){
let pattern = />>(?<name>[A-Za-z]+)<<(?<price>\d+(?:\.\d+)?)!(?<qty>\d+)/
let furniture = [];
let total = 0;
while(input[0] != 'Purchase'){
    let line = input.shift();
    let match = pattern.exec(line);
    if(match != null){
        let [_,name,price,qty] = match;
        price = Number(price);
        qty = Number(qty);
        furniture.push(name);
        total += qty * price
    }
}
console.log(`Bought furniture:`);
console.log(furniture.join('\n'));
console.log(`Total money spend: ${total.toFixed(2)}`);
}
solve([
    '>>Sofa<<312.23!3',
    '>>TV<<300!5',
    '>Invalid<<!5',
    'Purchase',
    ])