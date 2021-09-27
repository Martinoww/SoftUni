function storeCatalogue(arrOfStr) {
  let storeObj = {};

  for (let line of arrOfStr) {
    let [product, price] = line.split(" : ");
    let catalogueLetter = product[0];
    if (storeObj[catalogueLetter] == undefined) {
      storeObj[catalogueLetter] = {};
    }
    storeObj[catalogueLetter][product] = price;
  }
  let sorted = Object.keys(storeObj).sort((a, b) => a.localeCompare(b));

  for (let key of sorted) {
    let sortedProducts = Object.entries(storeObj[key]).sort((a, b) =>
      a[0].localeCompare(b[0])
    );
    console.log(key);
    sortedProducts.forEach((el) => {
      console.log(`  ${el[0]}: ${el[1]}`);
    });
  }
}
storeCatalogue([
  "Appricot : 20.4",
  "Fridge : 1500",
  "TV : 1499",
  "Deodorant : 10",
  "Boiler : 300",
  "Apple : 1.25",
  "Anti-Bug Spray : 15",
  "T-Shirt : 10",
]);
