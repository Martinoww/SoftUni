function arrManipulator(arr, listOfCommands) {
  let sum = 0;
  let index;
  let element;
  let rotations;
  
  for (let i = 0; i < listOfCommands.length; i++) {
    let splitedRow = listOfCommands[i].split(" ");
    let currCommand = splitedRow.shift();
    
    if (currCommand === "add") {
      index = Number(splitedRow[0]);
      element = Number(splitedRow[1]);
      arr.splice(index, 0, element);
    } else if (currCommand === "addMany") {
      index = Number(splitedRow.shift());
       let numbers = splitedRow.map(Number);
      arr.splice(index, 0, ...numbers);
    } else if (currCommand === "contains") {
      console.log(arr.indexOf(Number(splitedRow[0])));
    } else if (currCommand === "remove") {
      index = Number(splitedRow[0]);
      arr.splice(index, 1);
    } else if (currCommand === "shift") {
      rotations = Number(splitedRow[0]);
      for (let i = 0; i < rotations; i++) {
        element = arr.shift();
        arr.push(element);
      }
    } else if (currCommand === "sumPairs") {
      let arrayForSummaries = [];
      if(arr.length % 2 !== 0){
        arr.push(0)
      }
      for (let i = 0; i < arr.length - 1; i += 2) {
        sum = Number(arr[i]) + Number(arr[i + 1]);
        arrayForSummaries.push(sum);
      }
      arr = arrayForSummaries;
    } else if (currCommand === "print") {
      console.log(`[ ${arr.join(", ")} ]`);
      break;
    }
  }
}
arrManipulator(
  [1, 2, 3, 4, 5, 5],
  ['addMany 2 0 0 0 0', 'print']
  
);
