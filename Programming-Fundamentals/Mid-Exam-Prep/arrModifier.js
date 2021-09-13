function solve(input){
let listOfNums = input.shift().split(' ').map(Number);

for(let line of input){
if(line === 'end'){
    console.log(listOfNums.join(', '));
    return;
}
let command = line.split(' ')[0];
let firstInd = Number(line.split(' ')[1]);
let secondInd = Number(line.split(' ')[2])

if(command === 'swap'){
let firstToken = listOfNums.slice(firstInd, firstInd + 1).toString();
let secondToken = listOfNums.slice(secondInd, secondInd + 1).toString();
listOfNums.splice(firstInd, 1, parseInt(secondToken));
listOfNums.splice(secondInd, 1, parseInt(firstToken))    
}else if(command === 'multiply'){
let sum = listOfNums[firstInd] * listOfNums[secondInd];
listOfNums.splice(firstInd, 1, sum)
}else if(command === 'decrease'){
for(let i = 0; i < listOfNums.length; i++){
    listOfNums[i] -= 1
}
}


}


}
solve([
    '1 2 3 4',
    'swap 0 1',
    'swap 1 2',
    'swap 2 3',
    'multiply 1 2',
    'decrease',
    'end'
  ]
  
  )