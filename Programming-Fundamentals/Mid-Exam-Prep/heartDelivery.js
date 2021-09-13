function solve(input){
let neighborhood = input.shift().split('@').map(Number);
let decreasingPower = 2
let index = 0
for(let line of input){
if(line === 'Love!'){
    break;
}
let command = line.split(' ')[0];
let jumpLength = Number(line.split(' ')[1]);

index += jumpLength;
if(index > neighborhood.length - 1){
    index = 0;
}
if(neighborhood[index] == 0){
    console.log(`Place ${index} already had Valentine's day.`);
}else {
    neighborhood[index] -= decreasingPower;
    if(neighborhood[index] == 0){
        console.log(`Place ${index} has Valentine's day.`);
    }
}

}
console.log(`Cupid's last position was ${index}.`);
let missed = neighborhood.filter((x) => x > 0).length
if(missed == 0){
console.log(`Mission was successful.`);
}else{
    console.log(`Cupid has failed ${missed} places.`);
}

}
solve(['2@4@2',
    'Jump 2',
    'Jump 2',
    'Jump 8',
    'Jump 3',
    'Jump 1',
    'Love!',
    ])