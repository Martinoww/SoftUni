function solve(text){
let splitedText = text.split(' ');
for(let i = 0; i < splitedText.length; i++){
    if(splitedText[i].includes('#') && splitedText[i].length > 1){
        let word = splitedText[i]
        let flag = false;
        for(let a = 1; a < word.length; a++){
            if(word.charCodeAt(a) >= 65 && word.charCodeAt(a) <= 90){
                flag = true;
             }else if( word.charCodeAt(a) >= 97 && word.charCodeAt(a) <= 122){
                flag = true
            }else {
                flag = false ;
                break;
            }
        }
        if(flag){
        let splitedWord = splitedText[i].split('');
        let unneccessaryEl = splitedWord.shift();
        console.log(splitedWord.join(''));
        }
    }
}

}
solve('Nowadays everyone uses # to tag a ##special word in #socialMedia')