function vacation(numOfGroup, typeOfGroup, typeOfDay) {
let price = 0;

if(typeOfDay ===  'Friday'){
if(typeOfGroup === 'Students'){
price = 8.45 * numOfGroup
if(numOfGroup >= 30){
    price = price - (price * 0.15)
}
}else if(typeOfGroup === 'Business'){
price = 10.9 * numOfGroup
if(numOfGroup >= 100){
    price = (numOfGroup - 10) * 10.9
}
}else if(typeOfGroup === 'Regular'){
price = 15 * numOfGroup
if(numOfGroup >= 10 && numOfGroup <= 20){
price = price - (price * 0.05)
}
}
}else if(typeOfDay === 'Saturday'){
    if(typeOfGroup === 'Students'){
        price = 9.8 * numOfGroup
        if(numOfGroup >= 30){
            price = price - (price * 0.15)
        }
        }else if(typeOfGroup === 'Business'){
        price = 15.6 * numOfGroup
        if(numOfGroup >= 100){
            price = (numOfGroup - 10) * 15.6
        }
        }else if(typeOfGroup === 'Regular'){
        price = 20 * numOfGroup
        if(numOfGroup >= 10 && numOfGroup <= 20){
        price = price - (price * 0.05)
        }
        }
}else if(typeOfDay === 'Sunday'){
    if(typeOfGroup === 'Students'){
        price = 10.46 * numOfGroup
        if(numOfGroup >= 30){
            price = price - (price * 0.15)
        }
        }else if(typeOfGroup === 'Business'){
        price = 16 * numOfGroup
        if(numOfGroup >= 100){
            price = (numOfGroup - 10) * 16
        }
        }else if(typeOfGroup === 'Regular'){
        price = 22.5 * numOfGroup
        if(numOfGroup >= 10 && numOfGroup <= 20){
        price = price - (price * 0.05)
        }
        }
}
console.log(`Total price: ${price.toFixed(2)}`)


}
vacation(40,
    "Regular",
    "Saturday"
    );
