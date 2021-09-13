function heartDelivery(input) {
let neighborhood = input.shift()
let neighborhoodAsArr = neighborhood.split('@');
let neighLength = neighborhoodAsArr.length ;
    let i = 0;
let lastPosition = 0
while(input[i] !== 'Love!'){
let command = input[i];
let splitedCommand = command.split(' ', 2);
let jumpLength = Number(splitedCommand[1]);
let completedHouses = 0;
lastPosition = jumpLength

if(jumpLength > neighLength){
    jumpLength = 0;
}

for(let index = jumpLength; index < neighLength; index++){
let num = Number(neighborhoodAsArr[index])
let newNum = num - 2;
neighborhoodAsArr.splice(jumpLength, 1, newNum)
break;
}
if(neighborhoodAsArr.includes('0')){
completedHouses++
    let neededIndex = neighborhoodAsArr.indexOf('0');
    console.log(`Place ${neededIndex} has Valentine's day.`)
}

i++
}
console.log(`Cupid's last position was ${lastPosition}.`)

}
heartDelivery(["10@10@10@2", "Jump 1", "Jump 2", "Love!"]);
