function personInfo(name, lastName, hairColor) {
let person = {}
person.name = name;
person.lastName = lastName;
person.hairColor = hairColor;

let jsonString = JSON.stringify(person)
console.log(jsonString);
//   for (let [key, value] of entries) {
//     console.log(`${key}: ${value}`);
//   }
}
personInfo("George", "Jones", "Brown");
