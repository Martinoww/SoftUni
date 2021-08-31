function solve(input) {
  let index = 0;
  let mostGoals = Number.MIN_SAFE_INTEGER;
  let bestFootballer = "";
  
  while (input[index] !== "END") {
    let nameOfFootballer = input[index];
    index++;
     let goalsHeManagedToScore = Number(input[index]);

    if (goalsHeManagedToScore > mostGoals) {
      mostGoals = goalsHeManagedToScore;
      bestFootballer = nameOfFootballer;
    }
    if (goalsHeManagedToScore >= 10) {
      console.log(`${bestFootballer} is the best player!`);
      console.log(
        `He has scored ${goalsHeManagedToScore} goals and made a hat-trick !!!`
      );
      break;
    }
    index++
}
if(mostGoals >= 3 && mostGoals < 10){
  console.log(`${bestFootballer} is the best player!`);
  console.log(`He has scored ${mostGoals} goals and made a hat-trick !!!`)
}else if(mostGoals < 3){
  console.log(`${bestFootballer} is the best player!`);
  console.log(`He has scored ${mostGoals} goals.`)
}




}
solve(["Rooney", "1", "Junior", "2","Paulionio", "2", "END"]);
