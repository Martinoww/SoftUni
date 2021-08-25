function solve(input) {
let n = Number(input.shift());
let salary = Number(input.shift());

for(let i = 0; i < n; i++){
    let webSite = input.shift()
    if(webSite === 'Facebook'){
        salary -= 150;
        if(salary <= 0){
            console.log(`You have lost your salary.`)
            break;
        }
    }else if(webSite === 'Instagram'){
        salary -= 100;
        if(salary <= 0){
            console.log(`You have lost your salary.`)
            break;
        }
    }else if(webSite === 'Reddit'){
        salary -= 50;
        if(salary <= 0){
            console.log(`You have lost your salary.`)
            break;
        }
    }
}
if(salary > 0){
    console.log(`${salary.toFixed(0)}`)
}




}
solve(["3",
"500",
"Facebook",
"Stackoverflow.com",
"softuni.bg"])



