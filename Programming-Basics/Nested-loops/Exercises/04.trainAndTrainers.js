function solve(input) {
  let index = 1;
  let gradesFromJudges = 0;
  let numOfJudges = Number(input[0]);
  let totalSumOfGradesFromJudges = 0;
  let numOfGrades = 0;
  while (input[index] !== "Finish") {
    let nameOfProject = input[index++];
    for (let j = 1; j <= numOfJudges; j++) {
      gradesFromJudges += Number(input[index++]);
      numOfGrades++
    }
    let averageScore = gradesFromJudges / numOfJudges;
    totalSumOfGradesFromJudges += gradesFromJudges;
    gradesFromJudges = 0;
    console.log(`${nameOfProject} - ${averageScore.toFixed(2)}.`);

  }
  console.log(`Student's final assessment is ${(totalSumOfGradesFromJudges / numOfGrades).toFixed(2)}.`)

}
solve(["2",
"Objects and Classes",
"5.77",
"4.23",
"Dictionaries",
"4.62",
"5.02",
"RegEx",
"2.88",
"3.42",
"Finish"])

