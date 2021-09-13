function grades(grade){
let result = 'Fail'
if(grade < 3){
    console.log(`Fail (2)`);
    return;
}else if(grade >= 3 && grade < 3.5){
    result = 'Poor';
}else if(grade < 4.5){
    result = 'Good';
}else if(grade < 5.5){
    result = 'Very good';
}else{
    result = 'Excellent';
}
console.log(`${result} (${grade.toFixed(2)})`);


}
grades(3.33)
console.log(`======`);
grades(4.50)
console.log(`======`);
grades(2.99)
