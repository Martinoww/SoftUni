function shoppingList(array) {
  let shopingListAsArray = [];
  shopingListAsArray.push(array.shift());
  let shopingListAsString = shopingListAsArray.toString();
  let limit = shopingListAsString.length - 1;
  let seperatedShopingList = shopingListAsString.split("!", limit);
  let i = 0;
  let product = "";
  

  while (array[i] !== "Go Shopping!") {
    let currCommand = array[i];
    let commandAsString = currCommand.toString();
    let stoper = commandAsString.length - 1;
    let splitedCommand = commandAsString.split(" ", stoper);

    if (splitedCommand[0] == "Urgent") {
      product = splitedCommand[1];
      if (seperatedShopingList.includes(product)) {
          i++
        continue;
      } else {
        seperatedShopingList.unshift(product);
      }
    } else if (splitedCommand[0] == "Unnecessary") {
      product = splitedCommand[1];
      if (seperatedShopingList.includes(product)) {
        let neededIndex = seperatedShopingList.indexOf(product);
        seperatedShopingList.splice(neededIndex, 1);
      } else {
        i++
        continue;
      }
    } else if (splitedCommand[0] == "Correct") {
      product = splitedCommand[1];
      let newNameOfProduct = splitedCommand[2];
      if (seperatedShopingList.includes(product)) {
        let neededIndex = seperatedShopingList.indexOf(product);
        // seperatedShopingList.splice(neededIndex, 1)
        seperatedShopingList.splice(neededIndex, 1, newNameOfProduct);
      } else {
        i++
        continue;
      }
    } else if (splitedCommand[0] == "Rearrange") {
      product = splitedCommand[1];
      if (seperatedShopingList.includes(product)) {
        let neededIndex = seperatedShopingList.indexOf(product);
        seperatedShopingList.splice(neededIndex, 1);
        seperatedShopingList.push(product);
      } else {
        i++
        continue;
      }
    }
    i++;
  }
  console.log(seperatedShopingList.join(", "));
}
shoppingList([
  "Milk!Pepper!Salt!Water!Banana",
  "Urgent Salt",
  "Unnecessary Grapes",
  "Correct Pepper Onion",
  "Rearrange Grapes",
  "Correct Tomatoes Potatoes",
  "Go Shopping!",
]);
