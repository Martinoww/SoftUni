function solve(input){
    const numOfBoughtHrisantemas = Number(input[0]);
    const numOfBoughtRoses = Number(input[1]);
    const numOfBoughtTulips = Number(input[2]);
    const season = input[3];
    const typeOfTheDay = input[4];
    let priceForHrisantemas = 0;
    let priceForRoses = 0;
    let priceForTulips = 0;
    let totalNumOfFlowers = numOfBoughtHrisantemas + numOfBoughtRoses + numOfBoughtTulips;
    let totalSum = 0;
    if(season === 'Spring'){
      priceForHrisantemas = 2 * numOfBoughtHrisantemas;
      priceForRoses = 4.1 * numOfBoughtRoses;
      priceForTulips = 2.5 * numOfBoughtTulips;
      totalSum = priceForHrisantemas + priceForRoses + priceForTulips;
      if(typeOfTheDay === 'Y'){
        totalSum = totalSum + (totalSum * 0.15);
    }
     if(numOfBoughtTulips > 7){
         totalSum = totalSum - (totalSum * 0.05);
     }
     if(totalNumOfFlowers > 20){
         totalSum = totalSum - (totalSum * 0.2);
     }
    }else if( season === 'Summer'){
        priceForHrisantemas = 2 * numOfBoughtHrisantemas;
        priceForRoses = 4.1 * numOfBoughtRoses;
        priceForTulips = 2.5 * numOfBoughtTulips;
        totalSum = priceForHrisantemas + priceForRoses + priceForTulips;
        if(typeOfTheDay === 'Y'){
            totalSum = totalSum + (totalSum * 0.15);
        }
        if(totalNumOfFlowers > 20){
            totalSum = totalSum - (totalSum * 0.2);
        }
    }else if(season === 'Autumn'){
        priceForHrisantemas = 3.75 * numOfBoughtHrisantemas;
        priceForRoses = 4.5 * numOfBoughtRoses;
        priceForTulips = 4.15 * numOfBoughtTulips;
        totalSum = priceForHrisantemas + priceForRoses + priceForTulips;
        if(typeOfTheDay === 'Y'){
            totalSum = totalSum + (totalSum * 0.15);
        }
        if(totalNumOfFlowers > 20){
            totalSum = totalSum - (totalSum * 0.2);
        }
    }else if( season === 'Winter'){
        priceForHrisantemas = 3.75 * numOfBoughtHrisantemas;
        priceForRoses = 4.5 * numOfBoughtRoses;
        priceForTulips = 4.15 * numOfBoughtTulips;
        totalSum = priceForHrisantemas + priceForRoses + priceForTulips;
        if(typeOfTheDay === 'Y'){
            totalSum = totalSum + (totalSum * 0.15);
        }
        if(totalNumOfFlowers > 20){
            totalSum = totalSum - (totalSum * 0.2);
        }
        if(numOfBoughtRoses >= 10){
            totalSum = totalSum - (totalSum * 0.1);
        }
    }
    let finalPrice = totalSum + 2;
console.log(finalPrice.toFixed(2));



}
solve(['10', '10', '10', 'Autumn', 'N'])