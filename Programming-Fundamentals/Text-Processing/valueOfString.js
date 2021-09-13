function solve(text){
let totalPoints = 0
let index = text.indexOf('UPPERCASE');
if(index >= 0){
    for(let token of text.substring(0, index)){
            if(token.charCodeAt() >= 65 && token.charCodeAt() <= 90){
                totalPoints += token.charCodeAt();   
               }
        }
}else {
    index = text.indexOf('LOWERCASE');
    for(let token of text.substring(0, index)){
            if(token.charCodeAt() >= 97 && token.charCodeAt() <= 122){
             totalPoints += token.charCodeAt();   
            }
        }
}

console.log(`The total sum is: ${totalPoints}`);

}
solve(HelloFromMyAwesomePROGRAMLOWERCASE)