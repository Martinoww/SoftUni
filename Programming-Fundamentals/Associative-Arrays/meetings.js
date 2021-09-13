function solve(arr){
let schedule = []

for(let line of arr){
let [day, name] = line.split(' ');
let obj = {
    day: day,
    name: name,
}
let index = schedule.findIndex((x) => x.day === day);
if(index >= 0){
    console.log(`Conflict on ${day}!`);
}else{
    schedule.push(obj);
    console.log(`Scheduled for ${day}`);
}
}
for(let el of schedule){
    console.log(`${el.day} -> ${el.name}`);
}

}
solve(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim']
)