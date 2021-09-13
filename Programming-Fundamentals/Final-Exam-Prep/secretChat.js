function solve(input){
let result = input.shift();
let actions = {
    'InsertSpace': inserting,
    'Reverse': reversing,
    'ChangeAll': changeAllOccurences,
}
while(input[0] != 'Reveal'){
let tokens = input.shift().split(':|:');
let command = tokens.shift();
if(actions[command] != undefined){
    let action = actions[command];
    action(tokens);
}
}
console.log(`You have a new text message: ${result}`);


function inserting([index]){
index = Number(index);
let element = ' ';
let left = result.substring(0, index);
let right = result.substring(index)
result = left + element + right;
console.log(result);
}

function reversing([textForReversing]){
let index = result.indexOf(textForReversing);
if(index < 0){
    console.log(`error`);
}else {
let length = textForReversing.length;
let neededPartofText = result.substring(index, index + length)
let left = result.substring(0, index)
let right = result.substring(index + length)
let newWord = neededPartofText.split('').reverse().join('')
result = left + right + newWord
console.log(result);
}
}

function changeAllOccurences([currEl, newEl]){
result = result.split(currEl).join(newEl)
console.log(result);
}

}
solve([
    'heVVodar!gniVhaHaha',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'
  ])