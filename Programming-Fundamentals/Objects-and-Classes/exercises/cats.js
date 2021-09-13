function solve(arr){
let cats = [];
class Cat{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    meow() {
        console.log(`${this.name}, age ${this.age} says Meow`);
    }
}

for(let token of arr){
let catData = token.split(' ');
let [name, age] = catData;
cats.push(new Cat(name, age))
}

for(let currCat of cats){
    currCat.meow()
}

}
solve(['Mellow 2', 'Tom 5'])