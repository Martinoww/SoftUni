function counterStrike(input) {
    let initialEnergy = Number(input.shift());
    let i = 0;
    let battlesWon = 0;
  
    while (input[i] !== "End of battle") {
      let distance = Number(input[i]);
      if (initialEnergy - distance >= 0) {
      initialEnergy -= distance;
      battlesWon++;
      if (battlesWon % 3 === 0) {
      initialEnergy += battlesWon;
        }
        i++;
      } else {
        console.log(
          `Not enough energy! Game ends with ${battlesWon} won battles and ${initialEnergy} energy`
        );
        return;
      }
    }
      console.log(`Won battles: ${battlesWon}. Energy left: ${initialEnergy}`);
  }
counterStrike(["100", "10", "10", "10", "1", "2", "3", "73", "10", "15"]);
// counterStrike(['200',
//     '54',
//     '14',
//     '28',
//     '13',
//     'End of battle'
//     ])
