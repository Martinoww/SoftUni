function solve(input){
let  budget = Number(input.shift());
let numOfSeries = Number(input.shift());
let totalSum = 0;
for(let i = 1; i <= numOfSeries; i++){
let nameOfSerie = input.shift()
let priceOfMovie = Number(input.shift())
if(nameOfSerie === 'Thrones'){
priceOfMovie *= 0.5;
}else if(nameOfSerie === 'Lucifer'){
priceOfMovie *= 0.6;
}else if(nameOfSerie === 'Protector'){
priceOfMovie *= 0.7;
}else if(nameOfSerie === 'TotalDrama'){
priceOfMovie *= 0.8;
}else if(nameOfSerie === 'Area'){
priceOfMovie *= 0.9;
}
totalSum += priceOfMovie;
}
if(totalSum <= budget){
    let leftMoney = budget - totalSum;
    console.log(`You bought all the series and left with ${leftMoney.toFixed(2)} lv.`)
}else{
    let neededMoney = totalSum - budget;
    console.log(`You need ${neededMoney.toFixed(2)} lv. more to buy the series!`)
}


}
solve(['25',
    '6',
    'Teen Wolf',
    '8',
    'Protector',
    '5',
    'TotalDrama',
    '5',
    'Area',
    '4',
    'Thrones',
    '5',
    'Lucifer',
    '9'
    ])