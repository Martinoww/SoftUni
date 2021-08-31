function solve(input) {
    let priceForLiterGasoline = 2.22;
    let priceForLiterDiesel = 2.33;
    let priceForLiterGas = 0.93;
    const typeOfFuel = input[0];
    const amountOfFuel = Number(input[1]);
    const haveAClubCart = input[2];
    let discount = 0;
    let finalPrice = 0;
    if(typeOfFuel === 'Diesel'){
        if(haveAClubCart == 'Yes'){
            discount = priceForLiterDiesel - 0.12;
            finalPrice = discount * amountOfFuel;
        }else{
            finalPrice = amountOfFuel * priceForLiterDiesel
        }
    }else if(typeOfFuel === 'Gasoline'){
        if(haveAClubCart == 'Yes'){
            discount = priceForLiterGasoline - 0.18;
            finalPrice = discount * amountOfFuel;
        }else{
            finalPrice = amountOfFuel * priceForLiterGasoline;
        }
    }else if( typeOfFuel === 'Gas'){
        if(haveAClubCart == 'Yes'){
            discount = priceForLiterGas - 0.08;
            finalPrice = discount * amountOfFuel;
        }else{
            finalPrice = priceForLiterGas * amountOfFuel;
        }
    }
  if(amountOfFuel >= 20 && amountOfFuel <= 25){
      let anotherDiscount = finalPrice * 0.92
      console.log(`${anotherDiscount.toFixed(2)} lv.`)
  }else if(amountOfFuel > 25){
      let biggerDiscount = finalPrice * 0.9;
      console.log(`${biggerDiscount.toFixed(2)} lv.`)
  }else{
      console.log(`${finalPrice.toFixed(2)} lv.`)
  }


  }
  solve(['Gasoline', '25', 'No'])
