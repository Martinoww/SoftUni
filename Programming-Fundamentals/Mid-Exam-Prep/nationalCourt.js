function solve(input) {
  let [e1, e2, e3, people] = input.map(Number);
  let efficiency = e1 + e2 + e3;
  let hour = 0;

  while (people > 0) {
    hour++;
    if (hour % 4 != 0) {
      people -= efficiency;
    }
  }
  console.log(`Time needed: ${hour}h.`);
}
solve(["1", "0", "0", "0"]);
