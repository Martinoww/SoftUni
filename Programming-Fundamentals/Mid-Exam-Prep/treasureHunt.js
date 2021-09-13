function solve(input){
let tresureList = input.shift().split('|');

for(let line of input){
if(line === 'Yohoho!'){
    break;
}
let splitedLine = line.split(' ');
let command = splitedLine.shift()

if(command === 'Loot'){
for(let token of splitedLine){
    if(!tresureList.includes(token)){
        tresureList.unshift(token)
    }
}    
}else if(command === 'Drop'){
let index = Number(splitedLine);
if(index >= 0 && index < tresureList.length){
    let itemToAdd = tresureList.splice(index, 1).toString()
    tresureList.push(itemToAdd)
}
}else if(command === 'Steal'){
let count = Number(splitedLine);
if(count >= tresureList.length){
    let stolenItems = tresureList.splice(0, tresureList.length);
    console.log(stolenItems.join(', '));
}else {
    let stolenItems = tresureList.splice(tresureList.length - count, count);
    console.log(stolenItems.join(', '));
}
}

}

if(tresureList.length === 0){
    console.log(`Failed treasure hunt.`);
}else {
let sum = 0;
for(let element of tresureList){
    sum += element.length;
}
let average = sum / tresureList.length;
console.log(`Average treasure gain: ${average.toFixed(2)} pirate credits.`);
}

}
solve(["Diamonds|Silver|Shotgun|Gold",
"Loot Silver Medals Coal",
"Drop -1",
"Drop 1",
"Steal 6",
"Yohoho!"])