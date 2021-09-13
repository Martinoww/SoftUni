function solve(arr){
let employees = [];
class Employees {
    constructor(name, personalNumber){
        this.name = name;
        this.personalNumber = personalNumber;
    }
    employee () {
        console.log(`Name: ${this.name} -- Personal Number: ${this.personalNumber}`);
    }
}

for(let empl of arr){
let name = empl;
let personalNumber = empl.length;
employees.push(new Employees(name, personalNumber))
}

for(let person of employees){
    person.employee();
}

}
solve([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]
    )