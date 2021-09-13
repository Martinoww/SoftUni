function listOfNums(input){
let listOfNums = input.shift().split(' ').map(Number);

for(let line of input){
if(line === 'Finish'){
    console.log(listOfNums.join(' '));
    return;
}
let splitedLine = line.split(' ');
let command = splitedLine.shift();
let num = Number(splitedLine[0]);
let newNum = Number(splitedLine[1]);

if(command === 'Add'){
listOfNums.push(num)
}else if(command === 'Remove'){
    if(listOfNums.includes(num)){
        listOfNums.splice(listOfNums.indexOf(num), 1)
    }
}else if(command === 'Replace'){
    if(listOfNums.includes(num)){
        listOfNums.splice(listOfNums.indexOf(num), 1, newNum)
    }
}else if(command === 'Collapse'){
    let newListOfNums = listOfNums.filter((x) => x >= num)
    listOfNums = newListOfNums;
}

}



}
listOfNums(['5 9 70 -56 9 9',
// 'Add 1',
'Replace 9 10',
'Remove 9',
// 'Collapse 8',
'Finish'])