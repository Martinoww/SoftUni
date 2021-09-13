function processOddNums(arr) {
  let oddArr = arr.filter((x, i) => i % 2 == 1);
  let result = oddArr.map((x) => x * 2);
  console.log(result.reverse().join(" "));
}
processOddNums([3, 0, 10, 4, 7, 3]);
