function solve(input){
let numOfStudents = Number(input.shift());
let studentsBetween2And3 = 0;
let studentsBetween3And4 = 0
let studentsBetween4And5 = 0
let studentsAbove5 = 0
let totalscore = 0
for(let i = 1; i <= numOfStudents; i++){
    let grade = Number(input.shift())
    if(grade >= 2.00 && grade <= 2.99){
       studentsBetween2And3++
    }else if(grade >= 3.00 && grade <= 3.99){
        studentsBetween3And4++
    }else if(grade >= 4.00 && grade <= 4.99){
        studentsBetween4And5++
    }else if(grade >= 5.00){
       studentsAbove5++
    }
    totalscore += grade
}
let percentOfTopStudents = studentsAbove5 / numOfStudents * 100;
let percentOfStudentsBetween4and5 = studentsBetween4And5 / numOfStudents * 100;
let percentOfStudentsBetween3and4 = studentsBetween3And4 / numOfStudents * 100;
let percentOfStudentsBetween2and3 = studentsBetween2And3 / numOfStudents * 100;
let averageScore = totalscore / numOfStudents;

console.log(`Top students: ${percentOfTopStudents.toFixed(2)}%`)
console.log(`Between 4.00 and 4.99: ${percentOfStudentsBetween4and5.toFixed(2)}%`)
console.log(`Between 3.00 and 3.99: ${percentOfStudentsBetween3and4.toFixed(2)}%`)
console.log(`Fail: ${percentOfStudentsBetween2and3.toFixed(2)}%`)
console.log(`Average: ${averageScore.toFixed(2)}`)

}
solve(['6', '2', '3', '4', '5', '6', '2.2'])