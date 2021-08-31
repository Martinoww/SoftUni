function solve(input) {
  let priceOfMagnolias = 3.25;
  let priceOfZiumbiuls = 4;
  let priceOfRoses = 3.5;
  let priceOfCactacus = 8;
  const numOfMagnolias = Number(input[0]);
  const numOfZiumbiuls = Number(input[1]);
  const numOfRoses = Number(input[2]);
  const numOfCactacus = Number(input[3]);
  const priceOfPresent = Number(input[4]);

  let order =
    (priceOfMagnolias * numOfMagnolias) +
    (priceOfZiumbiuls * numOfZiumbiuls) +
    (priceOfRoses * numOfRoses) +
    (priceOfCactacus * numOfCactacus);
    let moneyLeftAfterTaxes = order - (order * 0.05);
let diff = 0;

if(moneyLeftAfterTaxes >= priceOfPresent){
    diff = Math.abs(moneyLeftAfterTaxes - priceOfPresent);
    console.log(`She is left with ${Math.floor(diff)} leva.`)
}else{
    diff = Math.abs(moneyLeftAfterTaxes - priceOfPresent);
    console.log(`She will have to borrow ${Math.ceil(diff)} leva.`)
}

}
solve(["15", "7", "5", "10", "100"]);
