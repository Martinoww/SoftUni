function solve(input){
const season = input[0];
const kilometersPerMonth = Number(input[1]);
let salary = 0;
 if(season === 'Spring'){
 if(kilometersPerMonth <= 5000){
     salary = (0.75 * kilometersPerMonth) * 4;
}else if(kilometersPerMonth > 5000 && kilometersPerMonth <= 10000){
    salary = (0.95 * kilometersPerMonth) * 4;
}else if(kilometersPerMonth > 10000 && kilometersPerMonth <= 20000){
    salary = (1.45 * kilometersPerMonth) * 4;
}
 }else if(season === 'Summer'){
    if(kilometersPerMonth <= 5000){
        salary = (0.9 * kilometersPerMonth) * 4;
   }else if(kilometersPerMonth > 5000 && kilometersPerMonth <= 10000){
       salary = (1.10 * kilometersPerMonth) * 4;
   }else if(kilometersPerMonth > 10000 && kilometersPerMonth <= 20000){
       salary = (1.45 * kilometersPerMonth) * 4;
   }
 }else if(season === 'Autumn'){
    if(kilometersPerMonth <= 5000){
        salary = (0.75 * kilometersPerMonth) * 4;
   }else if(kilometersPerMonth > 5000 && kilometersPerMonth <= 10000){
       salary = (0.95 * kilometersPerMonth) * 4;
   }else if(kilometersPerMonth > 10000 && kilometersPerMonth <= 20000){
       salary = (1.45 * kilometersPerMonth) * 4;
   }
 }else if(season === 'Winter'){
    if(kilometersPerMonth <= 5000){
        salary = (1.05 * kilometersPerMonth) * 4;
   }else if(kilometersPerMonth > 5000 && kilometersPerMonth <= 10000){
       salary = (1.25 * kilometersPerMonth) * 4;
   }else if(kilometersPerMonth > 10000 && kilometersPerMonth <= 20000){
       salary = (1.45 * kilometersPerMonth) * 4;
   }
 }
let salaryAfterTaxes = salary * 0.9;
console.log(salaryAfterTaxes.toFixed(2));


}
solve(['Autumn', '8600']);