function solve(input){
let text = input.shift();
let digitPattern = /\d/g
let pattern = /(?<firstEl>:{2}|\*{2})(?<emoji>[A-Z][a-z]{2,})(?<secondEL>\1)/g
let digits = text.match(digitPattern);
let treshHold = 1;
for(let x of digits){
    x = Number(x);
    treshHold *= x
}
let emojiesNum = 0;
let coolEmojies = [];
let match = pattern.exec(text);
while(match != null){
let {firstEl, emoji} = match.groups;
let coolnes = 0;
for(let char of emoji){
coolnes += char.charCodeAt(0);
}
emojiesNum++;
if(coolnes > treshHold){
    let coolEmoji = firstEl + emoji + firstEl;
    coolEmojies.push(coolEmoji)
}

match = pattern.exec(text);
}
console.log(`Cool threshold: ${treshHold}`);
console.log(`${emojiesNum} emojis found in the text. The cool ones are:`);
if(coolEmojies.length > 0){
    console.log(coolEmojies.join('\n'));
}

}
solve(["It is a long established fact that 1 a reader will be distracted by 9 the readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using 'Content here, content 99 here', making it look like readable **English**."])