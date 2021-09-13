function maxSequenceOfEqualElements(array) {
    let isEqual = false;
    let longestArrayAsArray = []
    let longestArray = Number.MIN_SAFE_INTEGER;
    for (let a = 0; a < array.length; a++) {
    let newArray = [];
    let currentNumber = Number(array[a]);
    for (let b = a + 1; b < array.length; b++) {
      let secondNumber = Number(array[b]);
      if (currentNumber == secondNumber) {
        newArray.push(secondNumber);
        isEqual = true;
      }else{
          break;
      }
    }
    if (isEqual) {
      newArray.push(currentNumber);
    }
    if(newArray.length > longestArray){
        longestArray = newArray.length;
        longestArrayAsArray = newArray;
    }
  }
  console.log(longestArrayAsArray.join(' '))
}
maxSequenceOfEqualElements([0, 1, 1, 5, 2, 2, 6, 3, 3]);
