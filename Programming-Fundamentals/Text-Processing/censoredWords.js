function solve(text, word){
let modifiedSent = text.split(word).join('*'.repeat(word.length))
console.log(modifiedSent);

}
solve("A small sentence with small some words", "small")