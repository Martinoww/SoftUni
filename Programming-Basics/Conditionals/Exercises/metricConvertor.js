function solve(input) {
  let number = Number(input[0]);
  let inputValue = input[1];
  let outputValue = input[2];

  if (inputValue === "mm" && outputValue === "m") {
    number = number / 1000;
  } else if (inputValue === "m" && outputValue === "mm") {
    number = number * 1000;
  } else if (inputValue === "cm" && outputValue === "m") {
    number = number / 100;
  } else if (inputValue === "m" && outputValue === "cm") {
    number *= 100;
  } else if (inputValue === "mm" && outputValue === "cm") {
    number = number / 10;
  } else if (inputValue === "cm" && outputValue === "mm") {
    number = number * 10;
  }
  console.log(number.toFixed(3));
}
solve(["150","m","cm"]);
