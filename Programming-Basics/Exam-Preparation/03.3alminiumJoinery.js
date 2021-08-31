function solve(input) {
let numOfJoinery = Number(input[0]);
let typeOfJoinery = input[1];
let typeOfReceiving = input[2];
let priceForOneJoinery = 0;
let totalPrice = 0;
let totalPRiceWithDiscount = 0;
if(numOfJoinery < 10){
    console.log(`Invalid order`);
    return;
}
if(typeOfJoinery === '90X130'){
priceForOneJoinery = 110;
if(numOfJoinery >= 30 && numOfJoinery < 60){
totalPrice = numOfJoinery * priceForOneJoinery;
totalPRiceWithDiscount = totalPrice - (totalPrice * 0.05);
}else if(numOfJoinery >= 60){
    totalPrice = numOfJoinery * priceForOneJoinery;
    totalPRiceWithDiscount = totalPrice - (totalPrice * 0.08);
}
}else if(typeOfJoinery === '100X150'){
priceForOneJoinery = 140;
if(numOfJoinery >= 40 && numOfJoinery < 80){
    totalPrice = numOfJoinery * priceForOneJoinery;
    totalPRiceWithDiscount = totalPrice - (totalPrice * 0.06);
    }else if(numOfJoinery >= 80){
        totalPrice = numOfJoinery * priceForOneJoinery;
        totalPRiceWithDiscount = totalPrice - (totalPrice * 0.10);
    }
}else if(typeOfJoinery === '130X180'){
priceForOneJoinery = 190;
if(numOfJoinery >= 20 && numOfJoinery < 50){
    totalPrice = numOfJoinery * priceForOneJoinery;
    totalPRiceWithDiscount = totalPrice - (totalPrice * 0.07);
    }else if(numOfJoinery >= 50){
        totalPrice = numOfJoinery * priceForOneJoinery;
        totalPRiceWithDiscount = totalPrice - (totalPrice * 0.12);
    }
}else if(typeOfJoinery === '200X300'){
priceForOneJoinery = 250;
if(numOfJoinery >= 25 && numOfJoinery < 50){
    totalPrice = numOfJoinery * priceForOneJoinery;
    totalPRiceWithDiscount = totalPrice - (totalPrice * 0.09);
    }else if(numOfJoinery >= 50){
        totalPrice = numOfJoinery * priceForOneJoinery;
        totalPRiceWithDiscount = totalPrice - (totalPrice * 0.14);
    }
}
if(typeOfReceiving === 'With delivery'){
    totalPRiceWithDiscount += 60
    if(numOfJoinery > 99){
    totalPRiceWithDiscount = totalPRiceWithDiscount - (totalPRiceWithDiscount * 0.04);
}
console.log(`${totalPRiceWithDiscount.toFixed(2)} BGN`)
    }else if(typeOfReceiving === 'Without delivery'){
        if(numOfJoinery > 99){
            totalPRiceWithDiscount = totalPRiceWithDiscount - (totalPRiceWithDiscount * 0.04);
        } 
        console.log(`${totalPRiceWithDiscount.toFixed(2)} BGN`)
    }

}
solve(['2',
    '130X180',
    'With delivery',
    ]);
