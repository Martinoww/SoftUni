function solve(input){
let rooms = input.split('|')
let initialHealth = 100;
let initialBitCoins = 0;

for(let i = 0;  i < rooms.length; i++){
let line = rooms[i].split(' ')
let command = line[0];
let number = Number(line[1])
let room = i + 1
if(command === 'potion'){
        if(number + initialHealth <= 100){
            console.log(`You healed for ${number} hp.`);
            console.log(`Current health: ${initialHealth + number} hp.`);
            initialHealth += number
        }else{
        console.log(`You healed for ${100 - initialHealth} hp.`);
        initialHealth = 100
        console.log(`Current health: ${initialHealth} hp.`);
        }
}else if(command === 'chest'){
    initialBitCoins += number
    console.log(`You found ${number} bitcoins.`);
}else{
    if(initialHealth - number > 0){
        initialHealth -= number
        console.log(`You slayed ${command}.`);
        }else{
        initialHealth -= number
        console.log(`You died! Killed by ${command}.`);
        console.log(`Best room: ${room}`);
        break;
        }
}

}


if(initialHealth > 0){
    console.log(`You've made it!`);
    console.log(`Bitcoins: ${initialBitCoins}`);
    console.log(`Health: ${initialHealth}`);
}
}
solve('cat 1|potion 0.5|potion 0.6')