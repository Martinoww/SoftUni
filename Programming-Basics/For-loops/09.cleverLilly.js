function solve(input){
const age = Number(input[0]);
const priceForLaundryMachine = Number(input[1]);
const pricePerToy = Number(input[2]);
let savedMoney = 0;
let numOfToys = 0;
for(let i = 1; i <= age; i++){
    if(i % 2 == 0){
        savedMoney += (i * 5) - 1;
    }else{
        numOfToys += 1;
    }
}
 let totalSavedMoney = savedMoney + (numOfToys * pricePerToy);
let diff = Math.abs(totalSavedMoney - priceForLaundryMachine);
if(totalSavedMoney >= priceForLaundryMachine){
console.log(`Yes! ${diff.toFixed(2)}`)
}else{
    console.log(`No! ${diff.toFixed(2)}`)
}

}
solve(["21", "1570.98", "3"])