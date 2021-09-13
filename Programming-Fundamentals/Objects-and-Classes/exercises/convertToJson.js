function solve(name, lastName, hairColor){
let person = {};
person.name = name;
person.lastName = lastName;
person.hairColor = hairColor

let jsonString = JSON.stringify(person);
console.log(jsonString);

}
solve('George',
'Jones',
'Brown'
)