function special(num) {
  for (let i = 1; i <= num; i++) {
    let currSum = 0;
    let currNum = i;

    while (currNum !== 0) {
      let sum = currNum % 10;
      currSum += sum;
      currNum = parseInt(currNum / 10);
    }
    if (currSum === 5 || currSum === 7 || currSum === 11) {
      console.log(`${i} -> True`);
    } else {
      console.log(`${i} -> False`);
    }
  }
}
special(15);
