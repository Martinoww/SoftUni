function solve(text, lookingWord){
let filteredText = text.split(' ').filter(x => x === lookingWord).length
console.log(filteredText);
}
solve("This is a word and it also is a sentence",
"is")