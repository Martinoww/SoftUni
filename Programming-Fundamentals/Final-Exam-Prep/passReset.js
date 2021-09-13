function solve(input){
let result = input.shift();
let actions = {
    'TakeOdd': takingTheOdds,
    'Cut': cutting,
    'Substitute': swapWords,
}

while(input[0] != 'Done'){
let tokens = input.shift().split(' ');
let command = tokens.shift();
if(actions[command] != undefined){
    let action = actions[command];
    action(tokens);
}
}
console.log(`Your password is: ${result}`);
function takingTheOdds(){
let newResult = '';
for(let i = 1; i < result.length; i += 2){
newResult += result[i]
}
result = newResult
console.log(result);
}

function cutting([startIndex, numOfElToCut]){
startIndex = Number(startIndex);
numOfElToCut = Number(numOfElToCut);
let left = result.substring(0, startIndex);
let right = result.substring(startIndex + numOfElToCut);
result = left + right;
console.log(result);
}

function swapWords([currEl, newEl]){
if(result.includes(currEl)){
result = result.split(currEl).join(newEl)
console.log(result);
}else{
    console.log(`Nothing to replace!`);
}
}
}
solve(["up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
"TakeOdd",
"Cut 18 2",
"Substitute ! ***",
"Substitute ? .!.",
"Done"])

