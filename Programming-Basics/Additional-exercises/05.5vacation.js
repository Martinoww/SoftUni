function solve(input){
const budget = Number(input[0]);
const season = input[1];
let location = '';
let placeOfStaying = '';
let price = 0;
if(budget <= 1000){
    placeOfStaying = 'Camp'
    if(season === 'Summer'){
        location = 'Alaska';
        price = budget * 0.65
    }else if( season === 'Winter'){
        location = 'Morocco';
        price = budget * 0.45;
    }
}else if(budget > 1000 && budget <= 3000){
    placeOfStaying = 'Hut'
    if(season === 'Summer'){
        location = 'Alaska';
        price = budget * 0.8;
    }else if( season === 'Winter'){
        location = 'Morocco';
        price = budget * 0.6;
}
}else if(budget > 3000){
    placeOfStaying = 'Hotel'
    if(season === 'Summer'){
        location = 'Alaska';
        price = budget * 0.9;
    }else if( season === 'Winter'){
        location = 'Morocco';
        price = budget * 0.9;
}
}
console.log(`${location} - ${placeOfStaying} - ${price.toFixed(2)}`);


}
solve(['799.5', 'Winter'])