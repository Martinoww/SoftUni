function commonElements(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    let firstArrayElement = array1[i];
    for (let j = 0; j < array2.length; j++) {
      let secondArrayElement = array2[j];
      if (firstArrayElement === secondArrayElement) {
        console.log(firstArrayElement);
      }
    }
  }
}
commonElements(
    ['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
    ['s', 'o', 'c', 'i', 'a', 'l']
    
);
