function solve(input) {
  let num = Number(input[0]);
  let sum = ``;
  for (let i = 1; i <= 10; i++) {
    sum += `${i} * ${num} = ${i * num}\n`;
  }
  console.log(sum);
}
solve(["5"]);
