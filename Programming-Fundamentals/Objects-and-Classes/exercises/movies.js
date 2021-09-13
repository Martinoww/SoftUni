function movies(listOfInformation) {
  let newList = [];

  for (let i = 0; i < listOfInformation.length; i++) {
    let splitedData = listOfInformation[i].split(" ");
    let name;
    if (splitedData[0] === "addMovie") {
      splitedData.shift();
      name = splitedData.join(" ");
      let movieObj = {};
      movieObj.name = name;
      newList.push(movieObj);
    } else if (splitedData.includes("directedBy")) {
      let neededIndex = splitedData.indexOf("directedBy");
      splitedData.splice(neededIndex, 1);
      name = [];
      for (let i = neededIndex - 1; i >= 0; i--) {
        name.unshift(splitedData.splice(i, 1));
      }
      let index = newList.findIndex((x) => x.name === name.join(" "));
      let directorName = splitedData.join(" ");
      if (index >= 0) {
        newList[index].director = directorName;
      }
    } else if (splitedData.includes("onDate")) {
      let neededIndex = splitedData.indexOf("onDate");
      splitedData.splice(neededIndex, 1);
      let date = splitedData[splitedData.length - 1];
      name = [];
      for (let i = neededIndex - 1; i >= 0; i--) {
        name.unshift(splitedData.splice(i, 1));
      }
      let index = newList.findIndex((x) => x.name === name.join(" "));
      if (index >= 0) {
        newList[index].date = date;
      }
    }
  }

  for (let result of newList) {
    if (result.name && result.director && result.date) {
      console.log(JSON.stringify(result));
    }
  }
}
movies([
  "addMovie Fast and Furious",
  "addMovie Godfather",
  "Inception directedBy Christopher Nolan",
  "Godfather directedBy Francis Ford Coppola",
  "Godfather onDate 29.07.2018",
  "Fast and Furious onDate 30.07.2018",
  "Batman onDate 01.08.2018",
  "Fast and Furious directedBy Rob Cohen",
]);
