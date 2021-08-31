function solve(input){
const season = input[1];
const budget = Number(input[0]);
let typeOfCar = '';
let typeOfClass = '';
let price = 0;
if(budget <= 100){
    typeOfClass = 'Economy class';
if(season === 'Summer'){
    typeOfCar = 'Cabrio';
    price = (budget * 0.35); 
}else if(season === 'Winter'){
    typeOfCar = 'Jeep';
    price = (budget * 0.65);
}
}else if(budget >= 100 && budget <= 500){
    typeOfClass = 'Compact class';
if(season === 'Summer'){
    typeOfCar = 'Cabrio';
    price = (budget * 0.45); 
}else if(season === 'Winter'){
    typeOfCar = 'Jeep';
    price = (budget * 0.8);
}
}else if(budget > 500){
    typeOfClass = 'Luxury class';
    if(season === 'Summer' || season === 'Winter'){
        typeOfCar = 'Jeep';
        price = (budget * 0.9);
    }
}
console.log(typeOfClass);
console.log(`${typeOfCar} - ${price.toFixed(2)}`);
}
solve(['99.99', 'Summer']);