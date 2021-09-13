function solve(arrOfStr){
let companiesObj = {}

for(let line of arrOfStr){
let [companyName, employee] = line.split(' -> ');
if(!Object.keys(companiesObj).includes(companyName)){
    companiesObj[companyName] = [];
}
if(!companiesObj[companyName].includes(employee)){
    companiesObj[companyName].push(employee);
}

}
let sorted = Object.entries(companiesObj).sort((a, b) => a[0].localeCompare(b[0]));

for(let [key, value] of sorted){
    console.log(key);
    for(let token of value){
        console.log(`-- ${token}`);
    }
}
}
solve([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
    ]
    
    )