function towns(listOfTowns) {
  for (let townData of listOfTowns) {
    let [town, latitude, longitude] = townData.split(" | ");
    let townObj = {
      town,
      latitude: Number(latitude).toFixed(2),
      longitude: Number(longitude).toFixed(2),
    };
    console.log(townObj);
  }
}
towns(["Sofia | 42.696552 | 23.32601", "Beijing | 39.913818 | 116.363625"]);
