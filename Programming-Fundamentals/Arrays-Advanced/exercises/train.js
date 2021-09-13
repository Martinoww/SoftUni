function train(arr) {
  let wagons = arr.shift().split(" ").map(Number);
  let capacityOfOneWagon = Number(arr.shift());

  for (let i = 0; i < arr.length; i++) {
    let currComand = arr
      .slice(i, i + 1)
      .toString()
      .split(" ");

    if (currComand[0] === "Add") {
      let wagonAdded = Number(currComand[1]);
      wagons.push(wagonAdded);
    } else {
      let passengers = Number(currComand[0]);
      for (let j = 0; j < wagons.length; j++) {
        let currNumOfPassengersInside = wagons[j];
        if (currNumOfPassengersInside + passengers <= capacityOfOneWagon) {
          let totalPasengers = currNumOfPassengersInside + passengers;
          wagons.splice(j, 1, totalPasengers);
          break;
        } else {
          continue;
        }
      }
    }
  }
  console.log(wagons.join(" "));
}
train(["0 0 0 10 2 4", "10", "Add 10", "10", "10", "10", "8", "6"]);
