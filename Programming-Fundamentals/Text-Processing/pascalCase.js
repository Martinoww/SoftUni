function solve(text){
let splitedText = text.split('');
let listOfWords = [];
let result = ''
for(let i = 0; i < splitedText.length; i++){
    if(i === 0){
    result += splitedText[i]
    continue;
    }
    if(splitedText[i].toUpperCase() === splitedText[i]){
        listOfWords.push(result);
        result = '';
        result += splitedText[i];
    }else {
        result += splitedText[i];
    }
}
listOfWords.push(result)
    console.log(listOfWords.join(', '));
}
solve('SplitMeIfYouCanHaHaYouCantOrYouCan')