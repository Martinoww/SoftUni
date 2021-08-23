function solve(input){
let month = input[0];
let numOfNights = Number(input[1]);
let priceForStudio = 0;
let priceForApartment = 0;

if(month === 'May' || month === 'October'){
    priceForStudio = 50;
    priceForApartment = 65;
    if(numOfNights > 7 && numOfNights <= 13){
        priceForStudio = priceForStudio - (priceForStudio * 0.05);
    }else if(numOfNights > 14){
        priceForStudio = priceForStudio - (priceForStudio * 0.3);
        priceForApartment = priceForApartment - (priceForApartment * 0.1);
    }
}else if( month === 'June' || month === 'September'){
    priceForStudio = 75.2;
    priceForApartment = 68.7;
    if(numOfNights > 14){
        priceForStudio = priceForStudio - (priceForStudio * 0.2);
        priceForApartment = priceForApartment - (priceForApartment * 0.1);
    }
}else if( month === 'July' || month === 'August'){
    priceForStudio = 76;
    priceForApartment = 77;
    if(numOfNights > 14){
        priceForApartment = priceForApartment - (priceForApartment * 0.1);
    }
}
let finalStudioPrice = priceForStudio * numOfNights;
let finalApartmentPrice = priceForApartment * numOfNights;
console.log(`Apartment: ${finalApartmentPrice.toFixed(2)} lv.`)
console.log(`Studio: ${finalStudioPrice.toFixed(2)} lv.`)
}
solve(["August",
"20"])

