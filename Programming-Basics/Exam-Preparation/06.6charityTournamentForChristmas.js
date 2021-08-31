function solve(input) {
let durrationOfTheTournament = Number(input[0]);
let index = 0;
let totalWins = 0;
let totalLoses = 0;
let totalMoney = 0;
for(let day = 1; day <= durrationOfTheTournament; day++){
    let collectedMoney = 0;
     let wins = 0;
     let loses = 0;
    index++;
    while(input[index] !== 'Finish'){
     let typeOfGame = input[index];
     index++
     let resultFromTheGame = input[index];
     if(resultFromTheGame === 'win'){
      totalWins++;   
      wins++;
      collectedMoney += 20;
     }else if(resultFromTheGame === 'lose'){
       totalLoses++;
       loses++;
     }
     index++
     typeOfGame = input[index];
    }
  if(wins > loses){
      collectedMoney = collectedMoney + (collectedMoney * 0.1);
      totalMoney += collectedMoney;
  }else{
      collectedMoney = collectedMoney;
      totalMoney += collectedMoney;
  }

 }
if(totalWins > totalLoses){
    totalMoney = totalMoney + (totalMoney * 0.2);
    console.log(`You won the tournament! Total raised money: ${totalMoney.toFixed(2)}`)
}else if(totalWins < totalLoses){
    console.log(`You lost the tournament! Total raised money: ${totalMoney.toFixed(2)}`)
}




}
solve(["3",
"darts",
"lose",
"handball",
"lose",
"judo",
"win",
"Finish",
"snooker",
"lose",
"swimming",
"lose",
"squash",
"lose",
"table tennis",
"win",
"Finish",
"volleyball",
"win",
"basketball",
"win",
"Finish"])

