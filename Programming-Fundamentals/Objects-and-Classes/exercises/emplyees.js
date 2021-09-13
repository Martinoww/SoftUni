function employees(listOfEmployees) {
  for (let employeeData of listOfEmployees) {
    let name = employeeData;
    let empObj = {
      name,
      specialNumber: name.length,
    };
    console.log(
      `Name: ${empObj.name} -- Personal Number: ${empObj.specialNumber}`
    );
  }
}
employees([
  "Silas Butler",
  "Adnaan Buckley",
  "Juan Peterson",
  "Brendan Villarreal",
]);
