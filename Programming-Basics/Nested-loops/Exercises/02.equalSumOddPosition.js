function solve(input) {
  let firstNum = Number(input[0]);
  let secondNum = Number(input[1]);
  let printLine = "";
  for (let i = firstNum; i <= secondNum; i++) {
    let currentNum = "" + i;
    let even = 0;
    let odd = 0;
    for (let j = 0; j <= currentNum.length; j++) {
      let currentDigit = Number(currentNum.charAt(j));
      if (j % 2 == 0) {
        even += currentDigit;
      } else {
        odd += currentDigit;
      }
    }
    if (odd == even) {
      printLine += `${i} `;
    }
}
console.log(printLine);
}
solve(["123456",
"124000"])


