function solve(input) {
  while (true) {
    let name = input.shift();
    if (name === "Stop") {
      break;
    }
    console.log(name);
  }
}
solve([
  "Nakov",
  "SoftUni",
  "Sofia",
  "Bulgaria",
  "SomeText",
  "Stop",
  "AfterStop",
  "Europe",
  "HelloWorld",
]);
