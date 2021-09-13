function numberModification(num) {
  let numAsArray = num.toString().split("");
  let sum = 0;
  let numbers = 0;

  for (let i = 0; i < numAsArray.length; i++) {
    sum = 0;
    numbers = 0;
    for (let j = 0; j < numAsArray.length; j++) {
      sum += Number(numAsArray[j]);
      numbers++;
    }
    if (sum / numbers >= 5) {
      console.log(numAsArray.join(""));
      break;
    } else {
      numAsArray.push("9");
    }
  }
}
numberModification(101);
