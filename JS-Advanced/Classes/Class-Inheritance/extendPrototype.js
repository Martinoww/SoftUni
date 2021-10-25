class Person{
    constructor(name, email){
        this.name = name;
        this.email = email;
    }
    toString(){
        return `${Person.name} (name: ${this.name}, email: ${this.email})`
    }
}

function extendPrototype(classToExtend){

classToExtend.prototype.species = 'Human';
classToExtend.prototype.toSpeciesString = function () {
    return `I am a ${this.species}. ${this.toString()}`;
}


}

extendPrototype(Person);

let p = new Person('alex', 'alex@abv.bg')
console.log(p.toSpeciesString());
