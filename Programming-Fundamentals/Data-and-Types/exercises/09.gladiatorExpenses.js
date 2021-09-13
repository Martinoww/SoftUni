function gladiatorExpenses(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {
let sum = 0;

for(let f = 1; f <= lostFights; f++){
if(f % 2 == 0){
    sum += helmetPrice
}
if(f % 3 == 0){
    sum += swordPrice
}
if(f % 6 == 0){
    sum += shieldPrice
}
if(f % 12 == 0){
    sum += armorPrice
}

}
console.log(`Gladiator expenses: ${sum.toFixed(2)} aureus`)


}
gladiatorExpenses(7, 2, 3, 4, 5);
gladiatorExpenses(23, 12.5, 21.5, 40, 200);
