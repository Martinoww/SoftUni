function solve(list) {
  let inventoryList = list.shift().split(", ");

  for (let line of list) {
    let [command, item] = line.split(" - ");
    if (command === "Craft!") {
      console.log(inventoryList.join(", "));
      break;
    } else if (command === "Collect") {
      if (!inventoryList.includes(item)) {
        inventoryList.push(item);
      }
    } else if (command === "Drop") {
      if (inventoryList.includes(item)) {
        let index = inventoryList.indexOf(item);
        inventoryList.splice(index, 1);
      }
    } else if (command === "Combine Items") {
      let [oldItem, newItem] = item.split(":");
      if (inventoryList.includes(oldItem)) {
        let index = inventoryList.indexOf(oldItem);
        inventoryList.splice(index + 1, 0, newItem);
      }
    } else if (command === "Renew") {
      if (inventoryList.includes(item)) {
        let index = inventoryList.indexOf(item);
        inventoryList.push(inventoryList.splice(index, 1));
      }
    }
  }
}
// solve(["Iron, Wood, Sword", "Collect - Gold", "Drop - Wood", "Craft!"]);
solve([
  "Iron, Sword, Bronze",
  "Drop - Bronze",
  "Combine Items - Sword:Bow",
  "Renew - Iron",
  "Collect - Gold",
  "Collect - Gold",
  "Craft!",
]);
