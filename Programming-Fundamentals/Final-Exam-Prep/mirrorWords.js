function solve(input){
let pattern = /(@|#)(?<wordOne>[A-Za-z]{3,})(\1)(\1)(?<wordTwo>[A-Za-z]{3,})(\1)/g
let mirrorWords = [];
let pairsCount = 0;
let match = pattern.exec(input);

while(match != null){
let {wordOne, wordTwo} = match.groups;
pairsCount++;
let reversedSecondWord = wordTwo.split('').reverse().join('');
if(wordOne == reversedSecondWord){
let mirrorElement = `${wordOne} <=> ${wordTwo}`
mirrorWords.push(mirrorElement)
}
match = pattern.exec(input)
}
if(pairsCount > 0){
    console.log(`${pairsCount} word pairs found!`);
}else {
    console.log(`No word pairs found!`);
}
if(mirrorWords.length === 0){
    console.log(`No mirror words!`);
}else{
    console.log(`The mirror words are:`);
    console.log(mirrorWords.join(', '));
}

}
solve([ '#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#' ])