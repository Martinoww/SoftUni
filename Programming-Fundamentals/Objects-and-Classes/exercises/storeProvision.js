function storeProvision(listOfStore, listOfProducts) {
  let newList = [];

  for (let i = 0; i < listOfStore.length - 1; i += 2) {
    let product = listOfStore[i];
    let quantity = Number(listOfStore[i + 1]);
    let storeObj = {
      product,
      quantity,
    };
    newList.push(storeObj);
  }

  for (let i = 0; i < listOfProducts.length - 1; i += 2) {
    let product = listOfProducts[i];
    let quantity = Number(listOfProducts[i + 1]);
    let productObj = {
      product,
      quantity,
    };
    let index = newList.findIndex((x) => x.product === product);
    if (index < 0) {
      newList.push(productObj);
    } else {
      newList[index].quantity += quantity;
    }
  }

  for (let data of newList) {
    console.log(`${data.product} -> ${data.quantity}`);
  }
}
storeProvision(
  ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],
  ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
);
