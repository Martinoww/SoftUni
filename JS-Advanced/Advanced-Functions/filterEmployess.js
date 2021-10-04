function solve(arrOfObjs, criteria) {
  arrOfObjs = JSON.parse(arrOfObjs);
  let [propOfCriteria, valueOfCriteria] = criteria.split("-");
  let filteredEmp = [];

  for (let obj of arrOfObjs) {
    if (propOfCriteria === "all") {
      filteredEmp.push({
        first: obj["first_name"],
        second: obj["last_name"],
        third: obj["email"],
      });
    } else if (obj.hasOwnProperty(propOfCriteria)) {
      if (obj[propOfCriteria] === valueOfCriteria) {
        filteredEmp.push({
          first: obj["first_name"],
          second: obj["last_name"],
          third: obj["email"],
        });
      }
    }
  }

  for (let i = 0; i < filteredEmp.length; i++) {
    console.log(
      `${i}. ${filteredEmp[i].first} ${filteredEmp[i].second} - ${filteredEmp[i].third}`
    );
  }
}
solve(
  '[{"id": "1","first_name": "Kaylee","last_name": "Johnson","email": "k0@cnn.com","gender": "Female"}, {"id": "2","first_name": "Kizzee","last_name": "Johnson","email": "kjost1@forbes.com","gender": "Female"}, {"id": "3","first_name": "Evanne","last_name": "Maldin","email": "emaldin2@hostgator.com","gender": "Male"},{"id": "4","first_name": "Evanne","last_name": "Maldina","email": "ev2@hostgator.com","gender": "Male"}]',
  "last_name-Johnson"
);
