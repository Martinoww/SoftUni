function solve(input){
let numOfMonths = Number(input.shift());
let billForElectricity = 0
let billForWater = 20 
let billForInternet = 15
let billForOtherThings = 0
for(let i = 1; i <= numOfMonths; i++){
    let billForElectricityPerMonth = Number(input.shift())
    billForElectricity += billForElectricityPerMonth
    billForOtherThings += (billForElectricityPerMonth + billForInternet + billForWater); 
}
let billForOtherThingsAfterAdds = billForOtherThings + (billForOtherThings * 0.2)
let totalBillForWater = billForWater * numOfMonths;
let totalBillForInternet = billForInternet * numOfMonths;
let average = (billForElectricity + totalBillForWater + totalBillForInternet + billForOtherThingsAfterAdds)/ numOfMonths;

console.log(`Electricity: ${billForElectricity.toFixed(2)} lv`)
console.log(`Water: ${totalBillForWater.toFixed(2)} lv`)
console.log(`Internet: ${totalBillForInternet.toFixed(2)} lv`)
console.log(`Other: ${billForOtherThingsAfterAdds.toFixed(2)} lv`)
console.log(`Average: ${average.toFixed(2)} lv`)

}
solve(['8', '123.54', '231.54', '140.23', '100', '122.4', '430', '178.52', '64.2'])