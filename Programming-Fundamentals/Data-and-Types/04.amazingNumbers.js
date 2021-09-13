function amazing(num) {
  let numToString = num.toString();
  let sum = 0;

  for (let i = 0; i < numToString.length; i++) {
    sum += Number(numToString[i]);
  }
  let result = sum.toString().includes("9");
  console.log(result ? `${numToString} Amazing? True` : `${numToString} Amazing? False`);
}
amazing(1233);
amazing(1234);
