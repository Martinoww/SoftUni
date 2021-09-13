function solve(arrOfStr){
let powers = {
    'J': 11,
    'Q': 12,
    'K': 13,
    'A': 14,
    'S': 4,
    'H': 3,
    'D': 2,
    'C': 1,
}
let players = {};
for(let line of arrOfStr){
    let [name, cards] = line.split(': ');
    if(!Object.keys(players).includes(name)){
        players[name] = []
    }
    players[name] = players[name].concat(cards)
}

for(let [key, value] of Object.entries(players)){
    let splitedValues = value.toString().split(', ').toString().split(',');
    let list = []
    for(let el of splitedValues){
        if(!list.includes(el)){
            list.push(el)    
        }
    }
    players[key] = list
}
// console.log(players['Peter']);
let result = {}

for(let [key, value] of Object.entries(players)){
    if(!Object.keys(result).includes(key)){
        result[key] = 0;
    }
    for(let token of value){
        let splitedToken = token.split('')
        let multiplier = splitedToken.pop();
        let joinedToken = splitedToken.join('');
        if(!Object.keys(powers).includes(joinedToken)){
            result[key] += Number(joinedToken) * powers[multiplier]
        }else {
            result[key] += powers[joinedToken] * powers[multiplier]

        } 
    }

}
for(let [key, value] of Object.entries(result)){
console.log(`${key}: ${value}`);
}
}
solve([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
    ]
    )