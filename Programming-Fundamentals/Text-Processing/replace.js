function solve(text){
let result = '';
let previousLetter;
let currLetter;
let splitedText = text.split('');
for(let i = 0; i < splitedText.length; i++){
    if(i == 0){
        result += splitedText[i]
        previousLetter = splitedText[i]
        continue;
    }
    currLetter = splitedText[i];
    if(previousLetter === currLetter){
        previousLetter = currLetter
    }else {
        result += currLetter
        previousLetter = currLetter
    }

}
console.log(result);


}
solve('aaaaabbbbbcdddeeeedssaa')