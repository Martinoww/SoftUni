function solve(input){
let n = Number(input.shift());
let actions = {
    'Drive': driving,
    'Refuel': refilling,
    'Revert': reverting,
}
let carCatalog = {};
for(let i = 0; i < n; i++){
    let [name, mileage, fuel] = input.shift().split('|');
    mileage = Number(mileage);
    fuel = Number(fuel);
    carCatalog[name] = {
        mileage,
        fuel
    }
}

while(input[0] != 'Stop'){
    let tokens = input.shift().split(' : ');
    let command = tokens.shift();
    if(actions[command] != undefined){
        let action = actions[command];
        action(tokens)
    }
}

let sorted = Object.entries(carCatalog).sort(compare)

for(let [name, tokens] of sorted){
    console.log(`${name} -> Mileage: ${tokens.mileage} kms, Fuel in the tank: ${tokens.fuel} lt.`);
}

function compare(a,b){
let mileageA = a[1].mileage;
let mileageB = b[1].mileage;

let nameA = a[0];
let nameB = b[0];
return (mileageB - mileageA) || (nameA.localeCompare(nameB));
}
function driving([name, mileageToDrive, fuelConsumption]){
    mileageToDrive = Number(mileageToDrive);
    fuelConsumption = Number(fuelConsumption);
    if(carCatalog[name].fuel - fuelConsumption < 0){
        console.log(`Not enough fuel to make that ride`);
    }else {
        carCatalog[name].mileage += mileageToDrive;
        carCatalog[name].fuel -= fuelConsumption;
        console.log(`${name} driven for ${mileageToDrive} kilometers. ${fuelConsumption} liters of fuel consumed.`);
        if(carCatalog[name].mileage >= 100000){
            console.log(`Time to sell the ${name}!`);
            delete carCatalog[name];
        }
    }
}
function refilling([name, fuelToRefill]){
fuelToRefill = Number(fuelToRefill);
if(carCatalog[name].fuel + fuelToRefill > 75){
    let difference = 75 - carCatalog[name].fuel;
    carCatalog[name].fuel = 75;
    console.log(`${name} refueled with ${difference} liters`);
}else {
    carCatalog[name].fuel += fuelToRefill;
    console.log(`${name} refueled with ${fuelToRefill} liters`);
}
}
function reverting([name, mileageToDecrease]){
    mileageToDecrease = Number(mileageToDecrease);
    if(carCatalog[name].mileage - mileageToDecrease < 10000){
        carCatalog[name].mileage = 10000;
    }else {
        carCatalog[name].mileage -= mileageToDecrease;
        console.log(`${name} mileage decreased by ${mileageToDecrease} kilometers`);  
    }
}

}
solve([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop'
  ])