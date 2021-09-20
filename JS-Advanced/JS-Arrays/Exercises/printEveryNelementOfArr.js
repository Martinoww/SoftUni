function solve(arr, steps) {
  let result = [];
  for (let i = 0; i < arr.length; i += steps) {
    result.push(arr[i]);
  }
  return result;
}
solve(["5", "20", "31", "4", "20"], 2);
