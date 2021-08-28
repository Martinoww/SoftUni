function solve(input) {
  let allowedPoorGrades = input.shift();
  let nameOfExercise = input.shift();
  let numOfGrades = 0;
  let poorGrade = 0;
  let score = 0;
  let numOfProblems = 0;
  let nameOfLastExercise = ''
  let averageScore = 0
  while (nameOfExercise !== "Enough") {
    let grade = Number(input.shift());
    numOfGrades++;
    if (grade <= 4.0) {
      poorGrade++;
      if (poorGrade >= allowedPoorGrades) {
        console.log(`You need a break, ${poorGrade} poor grades.`);
        break;
      }
    }
    score += grade;
    numOfProblems++;
    nameOfLastExercise = nameOfExercise
    nameOfExercise = input.shift();
    averageScore = score / numOfGrades;
}
if(poorGrade < allowedPoorGrades){ 
console.log(`Average score: ${averageScore.toFixed(2)}`);
console.log(`Number of problems: ${numOfProblems}`);
console.log(`Last problem: ${nameOfLastExercise}`);
}
}
solve(["3",
"Money",
"6",
"Story",
"4",
"Spring Time",
"5",
"Bus",
"6",
"Enough"])

