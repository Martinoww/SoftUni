function nonDecreasingSubsequence(array) {
  let newArray = [];
  let topInteger = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < array.length; i++) {
    let currentNumber = Number(array[i]);
    if (currentNumber >= topInteger) {
      topInteger = currentNumber;
      newArray.push(topInteger);
    }
  }
  console.log(newArray.join(" "));
}
nonDecreasingSubsequence([1, 3, 8, 4, 10, 12, 3, 2, 24]);
