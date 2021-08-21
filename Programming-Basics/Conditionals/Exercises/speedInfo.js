function solve(input) {
  let speed = Number(input[0]);
  if (speed <= 10) {
    console.log("slow");
  } else if (speed <= 50) {
    console.log("average");
  }else if(speed <= 150){
    console.log('fast');
  }else if(speed <= 1000){
    console.log('ultra fast');
  }else if(speed > 1000){
    console.log('extremely fast');
  }
}
solve(["8"]);
solve(["49.5"]);
solve(["126"]);
solve(["160"]);
solve(["3500"]);
