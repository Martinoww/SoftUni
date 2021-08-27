function solve(input){
let name = input.shift();
let grade = 1;
let sum = 0
let excluded = 0;
while(grade <= 12){
    let grades = Number(input.shift());
    if(grades < 4.00){
        excluded++;
        if(excluded > 1){
            console.log(`${name} has been excluded at ${grade} grade`)
            break;
        }
        continue;
    }
    sum += grades;
    grade++
}
if(grade - 1 == 12){
let average = sum / 12
console.log(`${name} graduated. Average grade: ${average.toFixed(2)}`)
}

}
solve(["Gosho", 
"5",
"5.5",
"6",
"5.43",
"5.5",
"6",
"5.55",
"5",
"6",
"6",
"5.43",
"5"])

