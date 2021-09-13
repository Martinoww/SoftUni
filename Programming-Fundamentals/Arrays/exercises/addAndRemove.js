function addAndRemove(array) {
  let newArray = [];

  for (let i = 0; i < array.length; i++) {
    let command = array[i];
    if (command == "add") {
      newArray.push(i + 1);
    } else if (command == "remove") {
      newArray.pop();
    }
  }
  if (newArray.length < 1) {
    console.log(`Empty`);
  } else {
    console.log(newArray.join(" "));
  }
}
addAndRemove(["remove", "remove", "remove"]);
