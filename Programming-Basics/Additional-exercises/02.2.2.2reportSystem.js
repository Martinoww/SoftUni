function solve(input) {
    let targetSum = Number(input[0]);
    let operator = input[1];
    let index = 2;
    let moneyCollectedViaCreditCard = 0;
    let moneyCollectedViaCash = 0;
    let priceOfProduct = 0;
    let numOfPaymentsViaCard = 0;
    let numOfPaymentsViaCash = 0;
    while(operator !== 'End'){
    priceOfProduct = Number(operator);
    if(index % 2 == 0){
        if(priceOfProduct > 100){
            console.log(`Error in transaction!`);
        }else{
            numOfPaymentsViaCash++;
            moneyCollectedViaCash += priceOfProduct;
            console.log(`Product sold!`);
        }
    }else{
        if(priceOfProduct < 10){
            console.log(`Error in transaction!`);
        }else{
            numOfPaymentsViaCard++;
            moneyCollectedViaCreditCard += priceOfProduct;
            console.log(`Product sold!`);
        } 
    }
    if(moneyCollectedViaCash + moneyCollectedViaCreditCard >= targetSum){
        break;
    }
    operator = input[index++];
    }
    if(moneyCollectedViaCash + moneyCollectedViaCreditCard >= targetSum){
        let averagePaymentsInCash = moneyCollectedViaCash / numOfPaymentsViaCash;
        let averagePaymentsViaCard = moneyCollectedViaCreditCard / numOfPaymentsViaCard;
        console.log(`Average CS: ${averagePaymentsInCash.toFixed(2)}`);
        console.log(`Average CC: ${averagePaymentsViaCard.toFixed(2)}`);
    }
    if(operator === 'End'){
        console.log(`Failed to collect required money for charity.`)
    }
    
    }
    solve(["500", "120", "8", "63", "256", "78", "317"]);
    //solve(['600','86','150','98','227','End'])
