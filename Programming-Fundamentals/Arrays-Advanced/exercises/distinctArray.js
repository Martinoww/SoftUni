function distinctArr(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
    let currNum = arr[i];

    for (let j = i + 1; j <= arr.length; j++) {
      let checkingNum = arr[j];
      if(checkingNum == undefined){
          let lastIndex = arr.length - 1
         checkingNum = arr[lastIndex]
         if (currNum === checkingNum) {
            arr.splice(j - 1, 1);
            break;
          }
      }
      if (currNum === checkingNum) {
        arr.splice(j, 1);
      }
    }
  }

  console.log(arr.join(" "));
}
distinctArr([4, 4, 4]);
