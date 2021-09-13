function solve(input){
let listOfNums = input.split(' ').map(Number);
if(listOfNums.length === 1){
    console.log(`No`);
    return;
}
let totalScore = 0;
for(let num of listOfNums){
    totalScore += num
}
let averageScore = totalScore / listOfNums.length;
let filteredNums = listOfNums.filter((x) => x > averageScore);
if(filteredNums.length === 0){
    console.log(`No`);
    return;
}
let sortedFilteredNums = filteredNums.sort((a, b) => b - a)
if(sortedFilteredNums.length > 5){
let newSortFilNums = [];
for(let i = 0; i < 5; i++){
    newSortFilNums.push(sortedFilteredNums[i])
}
console.log(newSortFilNums.join(' '));
}else{
    console.log(sortedFilteredNums.join(' '));
}

}
solve('-1 -2 -3 -4 -5 -6')