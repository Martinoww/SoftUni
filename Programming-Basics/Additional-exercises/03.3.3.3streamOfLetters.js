function streamOfLetters(input) {
    let letter = input.shift();
    let secretCommand = "";
    let countC = 0;
    let countO = 0;
    let countN = 0;
    let word = "";
    let lastWord = "";
  
    while (letter != "End") {
      let currentLetter = String(letter);
      if (currentLetter.toUpperCase() != currentLetter.toLowerCase()) {
        switch (currentLetter) {
          case "c":
            if (countC == 0) {
              secretCommand += currentLetter;
            } else {
              word += currentLetter;
              countC--;
            }
            countC++;
            break;
          case "o":
            if (countO == 0) {
              secretCommand += currentLetter;
            } else {
              word += currentLetter;
              countO--;
            }
            countO++;
            break;
          case "n":
            if (countN == 0) {
              secretCommand += currentLetter;
            } else {
              word += currentLetter;
              countN--;
            }
            countN++;
            break;
          default:
            word += currentLetter;
        }
        if (secretCommand.length == 3) {
          word += " ";
          lastWord = word;
          secretCommand = "";
          countC = 0;
          countO = 0;
          countN = 0;
        }
      }
      letter = input.shift();
    }
  
    console.log(`${lastWord}`);
  }
  // solve([
  //     'o',
  // 'S',
  // '%',
  // 'o',
  // 'l',
  // '^',
  // 'v',
  // 'e',
  // 'c',
  // 'n',
  // '&',
  // 'm',
  // 'e',
  // 'c',
  // 'o',
  // 'n',
  // 'End',
  // ]);
  // solve(['%',
  //     '!',
  //     'c',
  //     '^',
  //     'B',
  //     '`',
  //     'o',
  //     '%',
  //     'o',
  //     'o',
  //     'M',
  //     ')',
  //     '{',
  //     'n',
  //     '/',
  //     'A',
  //     'D',
  //     'End'
  //     ])
  streamOfLetters([
      "H",
      "n",
      "e",
      "l",
      "l",
      "o",
      "o",
      "c",
      "t",
      "c",
      "h",
      "o",
      "e",
      "r",
      "e",
      "n",
      "e",
      "End",]);
  //streamOfLetters(['o', "n", "C", "c", "n", "c", "O", "o", "c", "o", "N", "n", "End"]);
  // streamOfLetters(['%',
  //     '!',
  //     'c',
  //     '^',
  //     'B',
  //     '`',
  //     'o',
  //     '%',
  //     'o',
  //     'o',
  //     'M',
  //     ')',
  //     '{',
  //     'n',
  //     '/',
  //     'A',
  //     'D',
  //     'End'
  //     ])