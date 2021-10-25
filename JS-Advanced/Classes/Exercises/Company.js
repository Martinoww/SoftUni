class Company{
    constructor(){
        this.departments = {};
    }

    addEmployee(name, salary, position, department){
        if(!name || !salary || salary < 0 || !position || !department){
            throw new Error('Invalid input!');
        }else {
            if(this.departments[department] == undefined){
                this.departments[department] = {totalSalary: 0,};
            }
        this.departments[department][name] = {salary, position};
        this.departments[department]['totalSalary'] += salary;
         return `New employee is hired. Name: ${name}. Position: ${position}`;
        }
    };

    bestDepartment(){
    let bestDep = {
        name:'',
        avgSalary: 0,
    };

    for(let el in this.departments){
       let avg = this.departments[el].totalSalary / (Object.keys(this.departments[el]).length - 1);
       if(bestDep.avgSalary < avg){
           bestDep.avgSalary = avg;
           bestDep.name = el;
       } 
    }
    
    let sortedEmployees = Object.entries(this.departments[bestDep.name]).sort((a, b) => {
       
        return (b[1].salary - a[1].salary) || (a[0].localeCompare(b[0]));
    })
    
    let resultStr = `Best Department is: ${bestDep.name}\n`;
    resultStr += `Average salary: ${bestDep.avgSalary.toFixed(2)}\n`;
    
    for(let [key , value] of sortedEmployees){
        if(key == 'totalSalary'){
            continue;
        }
        resultStr += `${key} ${value.salary} ${value.position}\n`;
    }

    return resultStr.trim();

    }
}



let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
console.log(c.departments);
