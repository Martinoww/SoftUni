function pointsValidator(array) {
  let x1 = Number(array[0]);
  let y1 = Number(array[1]);
  let x2 = Number(array[2]);
  let y2 = Number(array[3]);
  function formula(x1, y1, x2, y2) {
    let y = x2 - x1;
    let x = y2 - y1;

    let result = Math.sqrt(x * x + y * y);
    if (Number.isInteger(result)) {
      return true;
    } else {
      return false;
    }
  }
  function firstComparison(x1, y1, zero, zero1) {
    let result = formula(x1, y1, zero, zero1);
    return result;
  }
  function secondComparison(x2, y2, zero, zero1) {
    let result = formula(x2, y2, zero, zero1);
    return result;
  }
  function thirdComparison(x1, y1, x2, y2) {
    let result = formula(x1, y1, x2, y2);
    return result;
  }

  if (firstComparison(x1, y1, 0, 0)) {
    console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
  } else {
    console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
  }
  if (secondComparison(x2, y2, 0, 0)) {
    console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
  } else {
    console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
  }
  if (thirdComparison(x1, y1, x2, y2)) {
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
  } else {
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
  }
}
pointsValidator([3, 0, 0, 4]);
