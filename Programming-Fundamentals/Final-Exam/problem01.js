function solve(input){
let result = input.shift();
let actions = {
    'Case': casing,
    'Cut': cutting,
    'Reverse': reversing,
    'Check': checking,
    'Replace': replacing,
}

while(input[0] != 'Sign up'){
let tokens = input.shift().split(' ')
let command = tokens.shift();
if(actions[command] != undefined){
    let action = actions[command];
    action(tokens);
}
}

function casing([command]){
if(command == 'lower'){
result = result.toLowerCase();
console.log(result);
}else if(command == 'upper'){
result = result.toUpperCase();
console.log(result);
}
}

function cutting([text]){
let index = result.indexOf(text);
let length = text.length;
if(index >= 0){
let left = result.substring(0, index);
let right = result.substring(index + length);
result = left + right
console.log(result);
}else {
    console.log(`The word ${result} doesn't contain ${text}.`);
}

}

function reversing([startIndex, endIndex]){
startIndex = Number(startIndex);
endIndex = Number(endIndex);
if(indexValidator(startIndex) && indexValidator(endIndex)){
    let reversed = result.substring(startIndex, endIndex + 1)
    console.log(reversed.split('').reverse().join(''));
}

}

function checking([char]){
if(result.includes(char)){
    console.log(`Valid`);
}else {
    console.log(`Your username must contain ${char}.`);
}
}

function replacing([char]){
let newResult = result.split(char).join('*')
result = newResult
console.log(result);
}

function indexValidator(index){
    return index >= 0 && index < result.length
}
}
solve(["ThisIsMyString",
"Reverse 1 4",
"Replace i",
"Cut My",
"Sign up"])



