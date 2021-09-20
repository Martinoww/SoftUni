function solve(arrOfNums) {
  let biggest = Number.MIN_SAFE_INTEGER;
  let result = [];
  for (let el of arrOfNums) {
    if (el >= biggest) {
      biggest = el;
      result.push(el);
    }
  }
  return result;
}
console.log(solve([20, 3, 2, 15, 6, 1]));
