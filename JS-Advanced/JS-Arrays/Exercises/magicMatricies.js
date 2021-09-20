function solve(arr) {
  let currRowSum = 0;
  let currColumSum = 0;
  let isMagical = false;
  let previousColumSum;
  let previousRowSum;

  for (let i = 0; i < arr.length; i++) {
    currRowSum = arr[i].reduce((a, b) => a + b);
    if (i == 0) {
      previousRowSum = currRowSum;
      continue;
    }
    if (currRowSum === previousRowSum) {
      isMagical = true;
    } else {
      isMagical = false;
      break;
    }
    previousRowSum = currRowSum;
  }

  for (let j = 0; j < arr.length; j++) {
    for (let k = 0; k < arr.length; k++) {
      currColumSum += arr[j][k];
    }
    if (j == 0) {
      previousColumSum = currColumSum;
      currColumSum = 0;
      continue;
    }
    if (currColumSum === previousColumSum) {
      isMagical = true;
    } else {
      isMagical = false;
      break;
    }
    previousColumSum = currColumSum;
    currColumSum = 0;
  }

  if (isMagical) {
    console.log(true);
  } else {
    console.log(false);
  }
}
solve([
  [1, 0, 0],
  [0, 0, 1],
  [0, 1, 0],
]);
