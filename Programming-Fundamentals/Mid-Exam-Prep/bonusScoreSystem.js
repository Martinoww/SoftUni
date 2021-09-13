function solve(input){
let students = Number(input.shift());
let lectures = Number(input.shift());
if(students === 0 || lectures === 0){
   console.log(`Max Bonus: 0.`);
   console.log(`The student has attended 0 lectures.`);
    return;
}
let initialBonus = Number(input.shift());
let maxAttendances = Number.MIN_SAFE_INTEGER
let maxBonus = 0;
let numbers = input.map(Number)

for(let attendances of numbers){

if(attendances > maxAttendances){
    maxAttendances = attendances;
    maxBonus = Math.ceil(maxAttendances / lectures * (5 + initialBonus))
}

}
console.log(`Max Bonus: ${maxBonus}.`);
console.log(`The student has attended ${maxAttendances} lectures.`);
}
solve([
    '1', '0', '14', '8',
    '23', '27', '28', '15',
    '17', '25', '26', '5',
    '18'
  ]
  
  )