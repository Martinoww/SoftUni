function personGenerator(){
let Person = require('./Person');
    
    let person = new Person('Anna', 'Simpson',22, 'anna@yahoo.com');
    let person2 = new Person('SoftUni');
    let person3 = new Person('Stephan', 'Johnson', 25);
    let person4 = new Person('Gabriel', 'Peterson', 24, 'g.p@gmail.com');
    
    let arrOfInstances = [person, person2, person3, person4]; 
    return arrOfInstances;
    
}
console.log(personGenerator());