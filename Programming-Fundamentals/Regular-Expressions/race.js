function solve(input){
/*
[A-z]
\d
*/
let racersNames = input.shift().split(', ');
let racers = {};
let patternForName = /[A-Za-z]/g
let digitPattern = /\d/g
for(let name of racersNames){
    racers[name] = 0
}
while(input[0] != 'end of race'){
    let line = input.shift();
    let numbers = line.match(digitPattern).map(Number)
    let distance = 0;
    for(let num of numbers){
        distance += num;
    }
    let name = line.match(patternForName).join('')
    if(racers[name] != undefined){
        racers[name] += distance
    }
}
let sorted = Object.entries(racers).sort((a, b) => b[1] - a[1]);
if(sorted[0]){
    console.log(`1st place: ${sorted[0][0]}`);
}
if(sorted[1]){
    console.log(`2nd place: ${sorted[1][0]}`);
}
if(sorted[2]){
    console.log(`3rd place: ${sorted[2][0]}`);
}

}
solve(['George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race'])