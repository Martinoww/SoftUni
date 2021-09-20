function solve(arrOfComands) {
  let resultArr = [];
  let lastNum = 1;

  for (let i = 0; i < arrOfComands.length; i++) {
    if (arrOfComands[i] === "add") {
      add(resultArr, lastNum);
    } else if (arrOfComands[i] === "remove") {
      remove(resultArr);
    }
    lastNum++;
  }

  function add(arr, num) {
    arr.push(num);
    return arr;
  }

  function remove(arr) {
    let removedEl = arr.pop();
    return arr;
  }
if(resultArr.length === 0){
    console.log(`Empty`);
}else{
    console.log(resultArr.join('\n'));
}
}
solve(['add', 
'add', 
'add', 
'add']

);
