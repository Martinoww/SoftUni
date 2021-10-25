function createPerson(firstName, lastName){

let result = {
    firstName,
    lastName,
    fullName: '',
}

Object.defineProperty(result, 'fullName', {

    get(){
        return `${this.firstName} ${this.lastName}`
    },
    set(value){
        let [first, second] = value.split(' ');
        if(second != undefined){
            this.firstName = first;
            this.lastName = second;
        }
    },
    configurable: true,
    enumerable: true,
})

return result; 
}



let person1= createPerson("Peter", "Ivanov");
console.log(person1.fullName); //Peter Ivanov
person1.firstName = "George";
console.log(person1.fullName); //George Ivanov
person1.lastName = "Peterson";
console.log(person1.fullName); //George Peterson
person1.fullName = "Nikola tesla";
console.log(person1.firstName); //Nikola
console.log(person1.lastName); //Tesla
