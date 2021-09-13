function solve(input){
let n = Number(input.shift())
let catalog = {};
let actions = {
    'Rate': rate, 
    'Update': update,
    'Reset': reset,
}

for(let i = 0; i < n; i++){
    let [name, rate] = input.shift().split('<->');
    catalog[name] = {
        rarity: Number(rate),
        ratings: [],
        avgRate: 0
    }
}

while(input[0] != 'Exhibition'){
    let [command, params] = input.shift().split(': ')
    let action = actions[command];
    action(params);
}

let sorted = Object.entries(catalog).sort(compare)

// print result
console.log(`Plants for the exhibition:`);
for(let [name, stats] of sorted){
    // console.log(stats);
    console.log(`- ${name}; Rarity: ${stats.rarity}; Rating: ${stats.avgRate.toFixed(2)}`);
}

function compare(a, b){
    let rarityA = a[1].rarity;
    let rarityB = b[1].rarity;

    let avgRateA = a[1].avgRate
    let avgRateB = b[1].avgRate
    return (rarityB - rarityA) || (avgRateB - avgRateA)
}
function rate(line){
let [name, rate] = line.split(' - ');
if(catalog[name] != undefined){
    catalog[name].ratings.push(Number(rate));
    let total = 0;
    for(let rating of catalog[name].ratings){
      total += rating
    }
   catalog[name].avgRate = total / catalog[name].ratings.length

}else {
    console.log(`error`);
}
}
function update(line){
let [name, rarity] = line.split(' - ');
if(catalog[name] != undefined){
catalog[name].rarity = Number(rarity)
}else {
    console.log('error');
}
}
function reset(line){
let name = line;
if(catalog[name] != undefined){
    catalog[name].ratings.length = 0;
    catalog[name].avgRate = 0
    }else {
        console.log('error');
    }
}

}
solve(["3",
"Arnoldii<->4",
"Woodii<->7",
"Welwitschia<->2",
"Rate: Woodii - 10",
"Rate: Welwitschia - 7",
"Rate: Arnoldii - 3",
"Rate: Woodii - 5",
"Update: Woodii - 5",

"Reset: Arnoldii",
"Exhibition"])

console.log(`\n ------- \n`);
solve(["2",
"Candelabra<->10",
"Oahu<->10",
"Rate: Oahu - 7",
"Rate: Candelabra - 6",
"Exhibition"])

