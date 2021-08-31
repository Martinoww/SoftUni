function solve(input){
let inheritanceMoney = Number(input[0]);
let yearWhichHeShouldBeAlive = Number(input[1]);
let years = 18;
for(let i = 1800; i <= yearWhichHeShouldBeAlive; i++){
    if(i % 2 == 0){
        inheritanceMoney -= 12000;
    }else{
        inheritanceMoney -= 12000 + 50 * years;
    }
    years++;
}
if(inheritanceMoney >= 0){
    console.log(`Yes! He will live a carefree life and will have ${inheritanceMoney.toFixed(2)} dollars left.`)
}else{
    console.log(`He will need ${Math.abs(inheritanceMoney).toFixed(2)} dollars to survive.`)
}


}
solve(['50000', '1802'])