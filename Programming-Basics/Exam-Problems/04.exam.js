function solve(input) {
  let numOfStudents = Number(input[0]);
  let studentsBetween2and3 = 0;
  let studentsBetween3and4 = 0;
  let studentsBetween4and5 = 0;
  let studentsBetween5and6 = 0;
  let averageScore = 0;

  for (let i = 1; i <= numOfStudents; i++) {
    let score = Number(input[i]);
    averageScore += score;
    if (score >= 2 && score <= 2.99) {
      studentsBetween2and3++;
    } else if (score >= 3 && score <= 3.99) {
      studentsBetween3and4++;
    } else if (score >= 4 && score <= 4.99) {
      studentsBetween4and5++;
    } else if (score >= 5) {
      studentsBetween5and6++;
    }
  }
  console.log(`Top students: ${(studentsBetween5and6 / numOfStudents * 100).toFixed(2)}%`)
  console.log(`Between 4.00 and 4.99: ${(studentsBetween4and5 / numOfStudents * 100).toFixed(2)}%`)
  console.log(`Between 3.00 and 3.99: ${(studentsBetween3and4 / numOfStudents * 100).toFixed(2)}%`)
  console.log(`Fail: ${(studentsBetween2and3 / numOfStudents * 100).toFixed(2)}%`)
  console.log(`Average: ${(averageScore / numOfStudents).toFixed(2)}`)

}
solve(["6",
"2",
"3",
"4",
"5",
"6",
"2.2"])
