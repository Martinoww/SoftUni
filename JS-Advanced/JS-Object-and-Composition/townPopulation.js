function townPopulation(arrOfStr) {
  let townObj = {};

  for (let line of arrOfStr) {
    let [name, population] = line.split(" <-> ");
    population = Number(population);

    if (townObj[name] === undefined) {
      townObj[name] = population;
    } else {
      townObj[name] += population;
    }
  }

  for (let key in townObj) {
    console.log(`${key} : ${townObj[key]}`);
  }
}
townPopulation([
  "Istanbul <-> 100000",
  "Honk Kong <-> 2100004",
  "Jerusalem <-> 2352344",
  "Mexico City <-> 23401925",
  "Istanbul <-> 1000",
]);
