function solve(arr) {
let searchingWords = arr.shift().split(' ');
let wordObj = {};
for(let el of searchingWords){
  wordObj[el] = 0;
}

for(let token of arr){
  if(Object.keys(wordObj).includes(token)){
    wordObj[token] += 1;
  }
}
let sorted = Object.entries(wordObj).sort((a, b) => b[1] - a[1])
for(let [key, value] of sorted){
  console.log(`${key} - ${value}`);
}

}
solve([
  "this sentence",
  "In",
  "this",
  "sentence",
  "you",
  "have",
  "to",
  "count",
  "the",
  "occurances",
  "of",
  "the",
  "words",
  "this",
  "and",
  "sentence",
  "sentence",
  "sentence",
  "is",
  "your",
  "task",
]);
