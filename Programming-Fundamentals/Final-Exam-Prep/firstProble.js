function solve(input){
let result = input.shift();
let actions = {
    'Add Stop': add,
    'Remove Stop': remove,
    'Switch': swap,
}

while(input[0] != 'Travel'){
    let tokens = input.shift().split(':')
    let command = tokens.shift();
    let action = actions[command];
    action(tokens);
    console.log(result);
}
console.log(`Ready for world tour! Planned stops: ${result}`);
function add([index, string]){
index = Number(index);
if(indexValidator(index)){
    let leftSide = result.substring(0, index)
    let rightSide = result.substring(index)
    result = leftSide + string + rightSide
}
}
function remove([startIndex, endIndex]){
startIndex = Number(startIndex)
endIndex = Number(endIndex)
if(indexValidator(startIndex) && indexValidator(endIndex)){
    let leftSide = result.substring(0, startIndex)
    let rightSide = result.substring(endIndex + 1)
    result = leftSide + rightSide
}
}
function swap([searchingName, replacingName]){
let pattern = new RegExp(searchingName, 'g');
let newResult = result.replace(pattern, replacingName)
result = newResult
}
function indexValidator(index){
    return (index >= 0) && (index < result.length)
}
}
solve([
"Hawai::Cyprys-Greece",
"Add Stop:7:Rome",
"Remove Stop:11:16",
"Switch:Hawai:Bulgaria",
"Travel"
])
