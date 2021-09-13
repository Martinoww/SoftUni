function integer(num1, num2, num3) {
  let sum = num1 + num2 + num3;

  if (Number.isInteger(sum)) {
    console.log(`${sum} - Integer`);
  } else {
    console.log(`${sum} - Float`);
  }
}
integer(9, 100, 1.1);
integer(9, 100, 1);
