function solve(arr) {
  let map = new Map();

  for (let word of arr) {
    if (!map.has(word)) {
      map.set(word, 1);
    } else {
      let currCount = map.get(word);
      let newCount = currCount + 1;
      map.set(word, newCount);
    }
  }

  let sorted = Array.from(map).sort((a, b) => b[1] - a[1]);

  for (let kvp of sorted) {
    console.log(`${kvp[0]} -> ${kvp[1]} times`);
  }
}
solve([
  "Here",
  "is",
  "the",
  "first",
  "sentence",
  "Here",
  "is",
  "another",
  "sentence",
  "And",
  "finally",
  "the",
  "third",
  "sentence",
]);
