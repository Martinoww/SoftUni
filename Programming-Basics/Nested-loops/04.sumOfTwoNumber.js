function solve(input) {
  let startOfInterval = Number(input[0]);
  let endOfInterval = Number(input[1]);
  let magicNumber = Number(input[2]);
  let isCombination = false;
  let counter = 0;
  for (let a = startOfInterval; a <= endOfInterval; a++) {
    for (let b = startOfInterval; b <= endOfInterval; b++) {
      counter++;
      if (a + b == magicNumber) {
        console.log(`Combination N:${counter} (${a} + ${b} = ${magicNumber})`);
        isCombination = true;
        break;
      }
    }
    if(isCombination){
        break;
    }
}
if (!isCombination) {
  console.log(`${counter} combinations - neither equals ${magicNumber}`);
}
}
solve(["23",
"24",
"20"])

