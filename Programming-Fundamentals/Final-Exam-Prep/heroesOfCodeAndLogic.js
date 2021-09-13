function solve(input){
let n = Number(input.shift());
let actions = {
    'CastSpell': cast,
    'TakeDamage': takingDamage,
    'Recharge': recharging,
    'Heal': healling,
}
let heroesCatalog = {};

for(let i = 0; i < n; i++){
    let [name, healPoints, manaPoints] = input.shift().split(' ');
    healPoints = Number(healPoints);
    manaPoints = Number(manaPoints)
    heroesCatalog[name] = {
        healPoints,
        manaPoints,
    }
}

while(input[0] != 'End'){
    let tokens = input.shift().split(' - ');
    let command = tokens.shift();
    if(actions[command] != undefined){
        let action = actions[command];
        action(tokens);
    }
}

let sorted = Object.entries(heroesCatalog).sort(compare);

for(let [name, tokens] of sorted){
    console.log(name);
    console.log(`  HP: ${tokens.healPoints}`);
    console.log(`  MP: ${tokens.manaPoints}`);

}
function compare(a, b){
let healPointsA = a[1].healPoints;
let healPointsB = b[1].healPoints;

let nameA = a[0];
let nameB = b[0];
return (healPointsB - healPointsA) || nameA.localeCompare(nameB);
}
function cast([name, manaConsumption, spellName]){
manaConsumption = Number(manaConsumption);
if(heroesCatalog[name].manaPoints - manaConsumption >= 0){
    heroesCatalog[name].manaPoints -= manaConsumption;
    console.log(`${name} has successfully cast ${spellName} and now has ${heroesCatalog[name].manaPoints} MP!`);
}else {
    console.log(`${name} does not have enough MP to cast ${spellName}!`);
}
}
function takingDamage([name, damage, attacker]){
damage = Number(damage);
if(heroesCatalog[name].healPoints - damage > 0){
    heroesCatalog[name].healPoints -= damage;
    console.log(`${name} was hit for ${damage} HP by ${attacker} and now has ${heroesCatalog[name].healPoints} HP left!`);
}else{
    delete heroesCatalog[name];
    console.log(`${name} has been killed by ${attacker}!`);
}
}
function recharging([name, manaGiven]){
manaGiven = Number(manaGiven);
if(heroesCatalog[name].manaPoints + manaGiven > 200){
    let diff = 200 - heroesCatalog[name].manaPoints;
    heroesCatalog[name].manaPoints = 200;
    console.log(`${name} recharged for ${diff} MP!`);
}else {
    heroesCatalog[name].manaPoints += manaGiven;
    console.log(`${name} recharged for ${manaGiven} MP!`);
}
}
function healling([name, healGiven]){
    healGiven = Number(healGiven);
    if(heroesCatalog[name].healPoints + healGiven > 100){
        let diff = 100 - heroesCatalog[name].healPoints;
        heroesCatalog[name].healPoints = 100;
        console.log(`${name} healed for ${diff} HP!`);
    }else {
        heroesCatalog[name].healPoints += healGiven;
        console.log(`${name} healed for ${healGiven} HP!`);
    }

}
}
solve(['4',
    'Adela 90 150',
    'SirMullich 70 40',
    'Ivor 1 111',
    'Tyris 94 61',
    'Heal - SirMullich - 50',
    'Recharge - Adela - 100',
    'CastSpell - Tyris - 1000 - Fireball',
    'TakeDamage - Tyris - 99 - Fireball',
    'TakeDamage - Ivor - 3 - Mosquito',
    'End',
    ])