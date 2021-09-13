function solve(input){
let totalMoneyWithoutTaxes = 0;
let i = 0;

while(input[i] !== 'special'){
if(input[i] == 'regular'){
    break;
}
let currPrice = Number(input[i]);
if(currPrice < 0){
    console.log(`Invalid price!`);
}else {
    totalMoneyWithoutTaxes += currPrice;
}
i++;
}

if(input[i] === 'special'){
    if(totalMoneyWithoutTaxes <= 0){
        console.log(`Invalid order!`);
    }else{
        let taxes = totalMoneyWithoutTaxes * 0.2;
        let totalMoneyWithTaxes = totalMoneyWithoutTaxes + taxes
        let finalPrice = totalMoneyWithTaxes * 0.9
        console.log(`Congratulations you've just bought a new computer!`)
        console.log(`Price without taxes: ${totalMoneyWithoutTaxes.toFixed(2)}$`);
        console.log(`Taxes: ${taxes.toFixed(2)}$`)
        console.log(`-----------`)
        console.log(`Total price: ${finalPrice.toFixed(2)}$`)
        
    }
}else if(input[i] === 'regular'){
    if(totalMoneyWithoutTaxes <= 0){
        console.log(`Invalid order!`);
    }else{
        let taxes = totalMoneyWithoutTaxes * 0.2;
        let totalMoneyWithTaxes = totalMoneyWithoutTaxes + taxes
        console.log(`Congratulations you've just bought a new computer!`)
        console.log(`Price without taxes: ${totalMoneyWithoutTaxes.toFixed(2)}$`);
        console.log(`Taxes: ${taxes.toFixed(2)}$`)
        console.log(`-----------`)
        console.log(`Total price: ${totalMoneyWithTaxes.toFixed(2)}$`)
    }
}

}
solve([
    'regular'
    ]
    )