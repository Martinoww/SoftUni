function solve(input){
let pirateShip = input.shift().split('>').map(Number);
let warShip = input.shift().split('>').map(Number);
let maxHealthCapacity = Number(input.shift());

for(let line of input){
if(line === 'Retire'){
    break;
}
let splitedLine = line.split(' ');
let command = splitedLine.shift();
let restOfSplLine = splitedLine.map(Number);

if(command === 'Fire'){
let [index, damage] = restOfSplLine;
if(index >= 0 && index < warShip.length){
    warShip[index] -= damage;
    if(warShip[index] <= 0){
        console.log(`You won! The enemy ship has sunken.`);
        return;
    }
}
}else if(command === 'Defend'){
let [startInd, endInd, damage] = restOfSplLine;
if(startInd >= 0 && startInd < pirateShip.length && 
    endInd >= 0 && endInd < pirateShip.length){
for(let i = startInd ; i <= endInd; i++){
    pirateShip[i] -= damage;
    if(pirateShip[i] <= 0){
        console.log(`You lost! The pirate ship has sunken.`);
        return;
    }
}
}
}else if(command === 'Repair'){
let [index, health] = restOfSplLine;
if(index >= 0 && index < pirateShip.length){
    pirateShip[index] += health;
    if(pirateShip[index] > maxHealthCapacity){
        pirateShip[index] = maxHealthCapacity;
    }
}
}else if(command === 'Status'){
let counter = 0;
let twentyPercent = maxHealthCapacity * 0.2;
for(let token of pirateShip){
    if(token < twentyPercent){
        counter++
    }
}
console.log(`${counter} sections need repair.`);
}



}

let sumOfPirateShip = 0;
for(let num of pirateShip){
    sumOfPirateShip += num;
}
let sumOfWarShip = 0;
for(let num of warShip){
    sumOfWarShip += num;
}
console.log(`Pirate ship status: ${sumOfPirateShip}`);
console.log(`Warship status: ${sumOfWarShip}`);
}
solve(["2>3>4>5>2",
"6>7>8>9>10>11",
"20",
"Status",
"Fire 2 3",
"Defend 0 4 11",
"Repair 3 18",
"Retire"])

