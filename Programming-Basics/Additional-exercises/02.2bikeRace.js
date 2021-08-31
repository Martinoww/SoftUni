function solve(input){
const numOfJuniorCompetetors = Number(input[0]);
const numOfSeniorCompetetors = Number(input[1]);
const typeOfTrack = input[2];
let tax = 0;
let sumAfterExpenses = 0;
let totalNumOfCompetetors = numOfSeniorCompetetors + numOfJuniorCompetetors;
if(typeOfTrack === 'trail'){
    tax = (numOfJuniorCompetetors * 5.5) + (numOfSeniorCompetetors * 7);
    sumAfterExpenses = tax - (tax * 0.05);
}else if( typeOfTrack === 'cross-country'){
    tax = (numOfJuniorCompetetors * 8) + (numOfSeniorCompetetors * 9.5);
    sumAfterExpenses = tax - (tax * 0.05);
    if(totalNumOfCompetetors >= 50){
        tax = tax - (tax * 0.25);
        sumAfterExpenses = tax - (tax * 0.05);
    }
}else if(typeOfTrack === 'downhill'){
    tax = (numOfJuniorCompetetors * 12.25) + (numOfSeniorCompetetors * 13.75);
    sumAfterExpenses = tax - (tax * 0.05);
}else if(typeOfTrack === 'road'){
    tax = (numOfJuniorCompetetors * 20) + (numOfSeniorCompetetors * 21.5);
    sumAfterExpenses = tax - (tax * 0.05);
    
}

console.log(sumAfterExpenses.toFixed(2))

}
solve(['3', '40', 'road'])