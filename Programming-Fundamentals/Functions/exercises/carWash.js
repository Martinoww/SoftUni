function carWash(array) {
  let value = 0;
  for (let i = 0; i < array.length; i++) {
    let currCommand = array[i];
    if (currCommand == "soap") {
      value += 10;
    } else if (currCommand == "vacuum cleaner") {
      value = value + (value * 0.25) 
    } else if (currCommand == "mud") {
      value = value - (value * 0.1);
    } else if (currCommand == "water") {
      value = value + (value * 0.2);
    }
  }
  console.log(`The car is ${value.toFixed(2)}% clean.`)
}
carWash(["soap", "soap", "vacuum cleaner", "mud", "soap", "water"]);
