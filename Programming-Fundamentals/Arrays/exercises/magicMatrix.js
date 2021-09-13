function magicMatrix(array) {
  let isEqual = true;
  let previousSum = 0;
  for (let i = 0; i < array.length; i++) {
    let currSum = 0;
    let subArr = array[i];
    for (let j = 0; j < subArr.length; j++) {
      currSum += Number(subArr[j]);
      if (i == 0) {
        previousSum += Number(subArr[j]);
      }
    }
    if (i > 0) {
      if (currSum === previousSum) {
        isEqual = true;
      } else {
        isEqual = false;
        break;
      }
    }
    previousSum = currSum;
  }
  if (isEqual) {
    console.log(true);
  } else {
    console.log(false);
  }
}
magicMatrix([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
   );
