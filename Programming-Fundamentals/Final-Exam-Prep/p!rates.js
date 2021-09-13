function solve(input){
let actions = {
    'Plunder': plundering,
    'Prosper': prospering,
}

let citiesCatalog = {};

while(input[0] != 'Sail'){
 let [name, population, gold] = input.shift().split('||');
 population = Number(population);
 gold = Number(gold);
 if(citiesCatalog[name] == undefined){
     citiesCatalog[name] = {
         population,
         gold,
     }
 }else {
    citiesCatalog[name].population += population;
    citiesCatalog[name].gold += gold
 }
}
if(input[0] == 'Sail'){
    let unnecesary = input.shift();
}

while(input[0] != 'End'){
let tokens = input.shift().split('=>');
let command = tokens.shift();
if(actions[command] != undefined){
    let action = actions[command];
    action(tokens);
}
}

let sorted = Object.entries(citiesCatalog).sort(compare);

if(sorted.length == 0){
    console.log(`Ahoy, Captain! All targets have been plundered and destroyed!`);
}else{
    console.log(`Ahoy, Captain! There are ${sorted.length} wealthy settlements to go to:`);
for(let [name, tokens] of sorted){
    console.log(`${name} -> Population: ${tokens.population} citizens, Gold: ${tokens.gold} kg`);
}
}

function compare(a, b){
let goldA = a[1].gold;
let goldB = b[1].gold;

let nameA = a[0];
let nameB = b[0];

return (goldB - goldA) || (nameA.localeCompare(nameB));
}

function plundering([name, population, gold]){
population = Number(population);
gold = Number(gold);
if(citiesCatalog[name] != undefined){
    citiesCatalog[name].population -= population;
    citiesCatalog[name].gold -= gold;
    console.log(`${name} plundered! ${gold} gold stolen, ${population} citizens killed.`);
    if(citiesCatalog[name].population == 0 || citiesCatalog[name].gold == 0){
        delete citiesCatalog[name];
        console.log(`${name} has been wiped off the map!`);
    }
}
}

function prospering([name, gold]){
gold = Number(gold);
if(gold >= 0){
    if(citiesCatalog[name] != undefined){
    citiesCatalog[name].gold += gold;
    console.log(`${gold} gold added to the city treasury. ${name} now has ${citiesCatalog[name].gold} gold.`);   
    }
}else{
    console.log(`Gold added cannot be a negative number!`);
}
}

}
solve(["Nassau||95000||1000",
"San Juan||930000||1250",
"Campeche||270000||690",
"Port Royal||320000||1000",
"Port Royal||100000||2000",
"Sail",
"Prosper=>Port Royal=>-200",
"Plunder=>Nassau=>94000=>750",
"Plunder=>Nassau=>1000=>150",
"Plunder=>Campeche=>150000=>690",
"End"])

