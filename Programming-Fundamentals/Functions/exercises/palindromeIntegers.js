function palindromeIntegers(array) {
  for (let i = 0; i < array.length; i++) {
    let currElement = array[i].toString();
    let reversed = currElement.split("").reverse().join("");

    if (currElement == reversed) {
      console.log(true);
    } else {
      console.log(false);
    }
  }
}
palindromeIntegers([32, 2, 232, 1010]);
