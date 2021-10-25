function personAndTeacher(){

class Person{
    constructor(name, email){
        this.name = name;
        this.email = email;
    }
    toString(){
        return `${this.constructor.name} (name: ${this.name}, email: ${this.email})`
    }
}

class Teacher extends Person{
    constructor(name, email, subject){
        super(name, email);
        this.subject = subject;
    }
    toString(){
        return  `${this.constructor.name} (name: ${this.name}, email: ${this.email}, subject: ${this.subject})`
    }
}

class Student extends Person{
    constructor(name, email, course){
        super(name, email);
        this.course = course;
    }
    toString(){
        return  `${this.constructor.name} (name: ${this.name}, email: ${this.email}, course: ${this.course})`
    }
}

let p =  new Person('alex', 'aaa@abv.bg')
console.log(p.toString());
let t = new Teacher('alexander', 'alex@abv.bg', 'Maths');
console.log(t.toString());
let s = new Student('alexander', 'alex@abv.bg', 'Maths');
console.log(s.toString());
    return {
        Person,
        Teacher,
        Student,
    }
}


personAndTeacher()