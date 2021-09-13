function solve(input){
let result = input.shift();
let actions  = {
    'Slice': slice,
    'Flip': flip,
    'Contains': contain,
}
while(input[0] != 'Generate'){
let tokens = input.shift().split('>>>');
let command = tokens.shift();
if(actions[command] != undefined){
    let action = actions[command];
    action(tokens);
}
}

console.log(`Your activation key is: ${result}`);

function slice([startIndex, endIndex]){
startIndex = Number(startIndex);
endIndex = Number(endIndex);
let left = result.substring(0,startIndex);
let right = result.substring(endIndex)
result = left + right;
console.log(result);
}

function flip([command,startIndex, endIndex]){
startIndex = Number(startIndex);
endIndex = Number(endIndex);
let left = result.substring(0, startIndex);
let right = result.substring(endIndex)
let neededElementToConvert = result.substring(startIndex, endIndex);
let convertedEl = ''
if(command === 'Upper'){
convertedEl = neededElementToConvert.toUpperCase();
}else if(command === 'Lower'){
convertedEl = neededElementToConvert.toLowerCase();
}
result = left + convertedEl + right;
console.log(result);
}

function contain([text]){
if(result.includes(text)){
    console.log(`${result} contains ${text}`);
}else {
    console.log(`Substring not found!`);
}
}



}
solve(["134softsf5ftuni2020rockz42",
"Slice>>>3>>>7",
"Contains>>>-rock",
"Contains>>>-uni-",
"Contains>>>-rocks",
"Flip>>>Upper>>>2>>>8",
"Flip>>>Lower>>>5>>>11",
"Generate"])

