function solve(arrWithMovesCordinates) {
  let dashboard = [
    [false, false, false],
    [false, false, false],
    [false, false, false]];
  let playerSign;
  let isWin = false;
  let indexForSign = 0;

  for (let i = 0; i < arrWithMovesCordinates.length; i++) {
    let [firstInd, secondInd] = arrWithMovesCordinates[i].split(" ");
    firstInd = Number(firstInd);
    secondInd = Number(secondInd);

    if (indexForSign % 2 == 0) {
      playerSign = "X";
    } else {
      playerSign = "O";
    }
    if (dashboard[firstInd][secondInd] != false) {
      console.log(`This place is already taken. Please choose another!`);
      playAgain = true;
      continue;
    } else {
      dashboard[firstInd][secondInd] = playerSign;
      indexForSign++;
    }

    if (i >= 4) {
      if (hasWon(dashboard)) {
        isWin = true;
        break;
      }
    }
    if (i >= 8) {
      if (!dashboard.includes(false)) {
        console.log(`The game ended! Nobody wins :(`);
        for (let el of dashboard) {
          console.log(el.join("\t"));
        }
        return;
      }
    }
  }
  if (isWin) {
    console.log(`Player ${playerSign} wins!`);
    for (let el of dashboard) {
      console.log(el.join("\t"));
    }
  }

  function hasWon(dashboard) {
    if (
      dashboard[0][0] == playerSign &&
      dashboard[0][1] == playerSign &&
      dashboard[0][2] == playerSign
    ) {
      return true;
    } else if (
      dashboard[1][0] == playerSign &&
      dashboard[1][1] == playerSign &&
      dashboard[1][2] == playerSign
    ) {
      return true;
    } else if (
      dashboard[2][0] == playerSign &&
      dashboard[2][1] == playerSign &&
      dashboard[2][2] == playerSign
    ) {
      return true;
    } else if (
      dashboard[0][0] == playerSign &&
      dashboard[1][0] == playerSign &&
      dashboard[2][0] == playerSign
    ) {
      return true;
    } else if (
      dashboard[0][1] == playerSign &&
      dashboard[1][1] == playerSign &&
      dashboard[2][1] == playerSign
    ) {
      return true;
    } else if (
      dashboard[0][2] == playerSign &&
      dashboard[1][2] == playerSign &&
      dashboard[2][2] == playerSign
    ) {
      return true;
    } else if (
      dashboard[0][0] == playerSign &&
      dashboard[1][1] == playerSign &&
      dashboard[2][2] == playerSign
    ) {
      return true;
    } else if (
      dashboard[0][2] == playerSign &&
      dashboard[1][1] == playerSign &&
      dashboard[2][0] == playerSign
    ) {
      return true;
    }
  }
}
solve(["0 1", "0 0", "0 2", "2 0", "1 0", "1 2", "1 1", "2 1", "2 2", "0 0"]);