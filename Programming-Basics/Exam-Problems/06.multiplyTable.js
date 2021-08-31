function solve(input) {
  let end = input[0];

  for (let a = 1; a <= end.charAt(2); a++) {
    for (let b = 1; b <= end.charAt(1); b++) {
      for (let c = 1; c <= end.charAt(0); c++) {
        console.log(`${a} * ${b} * ${c} = ${a * b * c};`);
      }
    }
  }
}
solve(["222"]);
