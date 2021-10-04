function solve(...arguments){
let resultObj = {};

for(let argument of arguments){
 let type = typeof argument;
 if(resultObj[type] === undefined){
     resultObj[type] = 1;
 }else {
     resultObj[type]++;
 }
 console.log(`${type}: ${argument}`);
}

let sorted = Object.entries(resultObj).sort((a, b) => b[1] - a[1]);
for(let [k, v] of sorted){
    console.log(`${k} = ${v}`);
}

}
solve('cat','haaahhaa', 42, function () { console.log('Hello world!'); })