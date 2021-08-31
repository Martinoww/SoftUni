function solve(input) {
let projection = input[0];
let moviePack = input[1];
let numOfTickets = Number(input[2]);
let drinkPrice = 0;
let popcornPrice = 0;
let menuPrice = 0;
let totalSum = 0;
if(projection === 'John Wick'){
if(moviePack === 'Drink'){
 drinkPrice = 12;
 totalSum = numOfTickets * drinkPrice;
}else if(moviePack === 'Popcorn'){
popcornPrice = 15;
totalSum = numOfTickets * popcornPrice;
}else if(moviePack === 'Menu'){
menuPrice = 19;
totalSum = numOfTickets * menuPrice;
}
}else if(projection === 'Star Wars'){
    if(moviePack === 'Drink'){
        drinkPrice = 18;
        totalSum = numOfTickets * drinkPrice;
       }else if(moviePack === 'Popcorn'){
       popcornPrice = 25;
       totalSum = numOfTickets * popcornPrice;
       }else if(moviePack === 'Menu'){
       menuPrice = 30;
       totalSum = numOfTickets * menuPrice;
       }
       if(numOfTickets >= 4){
           totalSum = totalSum - (totalSum * 0.3);
       }
}else if(projection === 'Jumanji'){
    if(moviePack === 'Drink'){
        drinkPrice = 9;
        totalSum = numOfTickets * drinkPrice;
       }else if(moviePack === 'Popcorn'){
       popcornPrice = 11;
       totalSum = numOfTickets * popcornPrice;
       }else if(moviePack === 'Menu'){
       menuPrice = 14;
       totalSum = numOfTickets * menuPrice;
       }
       if(numOfTickets == 2){
           totalSum = totalSum - (totalSum * 0.15);
       }
}
console.log(`Your bill is ${totalSum.toFixed(2)} leva.`)




}
solve(["Jumanji", "Menu", "2"]);
