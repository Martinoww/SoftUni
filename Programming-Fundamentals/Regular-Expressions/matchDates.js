function solve(input){
let pattern = /\b(?<day>\d{2})([-.\/])(?<month>[A-Z][a-z]{2})\2(?<year>\d{4})\b/g
let match = pattern.exec(input);

while(match != null){
  let days = match.groups['day'];
  let months = match.groups['month'];
  let years = match.groups['year'];
  console.log(`Day: ${days}, Month: ${months}, Year: ${years}`);
  match = pattern.exec(input);
}
}
solve("13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016")