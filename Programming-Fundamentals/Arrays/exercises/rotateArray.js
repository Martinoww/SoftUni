function rotateArray(array) {
  let lastElementForRotations = array.length - 1;
  let numOfRotations = Number(array[lastElementForRotations]);
  array.pop();

  for (let i = 1; i <= numOfRotations; i++) {
    let lastElement = array.length - 1;
    array.unshift(array[lastElement]);
    array.pop();
  }
  console.log(array.join(" "));
}
rotateArray(["Banana", "Orange", "Coconut", "Apple", "15"]);
