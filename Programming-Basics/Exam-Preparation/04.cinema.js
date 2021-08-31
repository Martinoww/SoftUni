function solve(input){
let roomCapacity = Number(input[0]);
let ticketPrice = 5;
let index = 1;
let totalSum = 0
let numOfPeopleInside = 0;

while(input[index] !== 'Movie time!'){
let numOfPeopleEntering = Number(input[index]);
numOfPeopleInside += numOfPeopleEntering;
if(numOfPeopleInside > roomCapacity){
    console.log(`The cinema is full.`)
    console.log(`Cinema income - ${totalSum} lv.`)
    break;
}
totalSum += numOfPeopleEntering * ticketPrice;
if(numOfPeopleEntering % 3 == 0){
totalSum -= 5;
}
index++
}
if(input[index] == 'Movie time!'){ 
    let seatsLeft = Math.abs(roomCapacity - numOfPeopleInside)
    console.log(`There are ${seatsLeft} seats left in the cinema.`)
    console.log(`Cinema income - ${totalSum} lv.`)
}
}
solve(['60',
    '10',
    '6',
    '3',
    '20',
    '15',
    'Movie time!'
    ])