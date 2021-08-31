function solve(input) {
    let start = input[0];
    let end = input[1];
    let printLine = "";
    for (let a = start.charAt(0); a <= end.charAt(0); a++) {
      for (let b = start.charAt(1); b <= end.charAt(1); b++) {
        for (let c = start.charAt(2); c <= end.charAt(2); c++) {
          for (let d = start.charAt(3); d <= end.charAt(3); d++) {
            if (a % 2 !== 0 && b % 2 !== 0 && c % 2 !== 0 && d % 2 !== 0) {
              printLine += `${a}${b}${c}${d} `;
            } else {
              continue;
            }
          }
        }
      }
    }
    console.log(printLine);
  }
  solve(["1365", "5877"]);