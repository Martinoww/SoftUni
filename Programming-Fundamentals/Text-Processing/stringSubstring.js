function solve(neededWord, text){
let textToLowerCase = text.toLowerCase();
let neededWordToLowerCase = neededWord.toLowerCase();
let splitedText = textToLowerCase.split(' ');
for(let el of splitedText){
    if(el === neededWordToLowerCase){
        console.log(neededWord);
        return;
    }
}
console.log(`${neededWord} not found!`);

}
solve('kurec',
'JavaScript is the best programming language'
)
// if(textToLowerCase.includes(neededWordToLowerCase)){
//     console.log(neededWordToLowerCase);
// }else {
//     console.log(`${neededWord} not found!`);
// }