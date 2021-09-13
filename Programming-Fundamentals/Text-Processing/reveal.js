function solve(words, text){
    let splitedWords = words.split(', ')
    let splitedText = text.split(' ')

    let censoredTxtLength = 0;

for(let i = 0; i < splitedText.length; i++){
    if(splitedText[i].includes('*')){
        let censoredWord = `${splitedText[i]}`;
        censoredTxtLength = splitedText[i].length;
        for(let el of splitedWords){
            if(el.length === censoredTxtLength){
                splitedText.splice(i, 1, el)
               
            }

        }
    }
}
console.log(splitedText.join(' '));


}
solve('great, learning',
'softuni is ***** place for ******** new programming languages')