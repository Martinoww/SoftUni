function solve(input){
let days = Number(input.shift())
let treatedPatients = 0;
let untreatedPatients = 0;
let numOfDoctors = 7;

for(let i = 1; i <= days; i++){
 let numOfPatients = Number(input.shift())
if(i % 3 == 0){
 if(treatedPatients < untreatedPatients){
    numOfDoctors++
 }
}
if(numOfDoctors - numOfPatients >= 0){
    treatedPatients += numOfPatients
}else if(numOfDoctors - numOfPatients < 0){
    treatedPatients += numOfDoctors
    untreatedPatients += numOfPatients - numOfDoctors
}

}
console.log(`Treated patients: ${treatedPatients}.`)
console.log(`Untreated patients: ${untreatedPatients}.`)


}
solve(['3', '7', '7', '7'])