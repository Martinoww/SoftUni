function solve(input) {
  const volume = Number(input[0]);
  const p1 = Number(input[1]);
  const p2 = Number(input[2]);
  const hour = Number(input[3]);
  let poolV = (p1 + p2) * hour;
  let poolP = poolV / volume;

  if(volume >= poolV){
      console.log(`The pool is ${(poolP * 100).toFixed(2)}% full. Pipe 1: ${(p1 / poolV * hour * 100).toFixed(2)}%. Pipe 2: ${(p2 / poolV * hour * 100).toFixed(2)}%.`)
  }else{
      console.log(`For ${hour} hours the pool overflows with ${(poolV - volume).toFixed(2)} liters.`)
  }
 
}
solve(["1000", "100", "120", "3"]);
solve(["100", "100", "100", "2.5"]);
