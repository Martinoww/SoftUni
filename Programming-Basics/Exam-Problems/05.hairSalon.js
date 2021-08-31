function solve(input){
let target = Number(input[0]);
let index = 1;
let moneyCollected = 0;
let price = 0;

while(input[index] !== 'closed'){
    let typeOfService = input[index];
    index++;
    let type = input[index];

if(typeOfService === 'haircut'){
    if(type === 'ladies'){
    price = 20;
    moneyCollected += price;
    }else if(type === 'kids'){
    price = 10;
    moneyCollected += price;
    }else if(type === 'mens'){
    price = 15;
    moneyCollected += price;
    }
}else if(typeOfService === 'color'){
    if(type === 'touch up'){
    price = 20;
    moneyCollected += price;
    }else if(type === 'full color'){
    price = 30;
    moneyCollected += price;
    }
}
if(moneyCollected >= target){
    break;
}
index++
typeOfService = input[index]
}
if(input[index] === 'closed'){
if( moneyCollected < target){
    console.log(`Target not reached! You need ${target - moneyCollected}lv. more.`)
    console.log(`Earned money: ${moneyCollected}lv.`)
}else if( moneyCollected >= target){
    console.log(`You have reached your target for the day!`)
    console.log(`Earned money: ${moneyCollected}lv.`)
}
}
if(moneyCollected >= target){
    console.log(`You have reached your target for the day!`)
    console.log(`Earned money: ${moneyCollected}lv.`)
}


}
solve(["50",
"color",
"full color",
"haircut",
"ladies"])
