function createCardDeck(arr) {
let result  = [];
for(let card of arr){
let face = card.slice(0, -1);
let suit = card.slice(-1);
let checkedCard = playingCards(face,suit).toString()
if(checkedCard.includes('Invalid')){
    console.log(checkedCard);
    return;
}else {
    result.push(checkedCard);
}
}

console.log(result.join(' '));




  function playingCards(face, suit) {
    let validFaces = ["2","3","4","5","6","7","8","9","10","J","Q","K","A",];
    let suits = {
      S: "\u2660",
      H: "\u2665",
      D: "\u2666",
      C: "\u2663",
    };

    if (validFaces.includes(face) && Object.keys(suits).includes(suit)) {
      return {
        face,
        suit: suits[suit],
        toString() {
          return this.face + this.suit;
        },
      };
    } else {
      return`Invalid card: ${face+suit}`;
    }
  }
}
createCardDeck(["AS", "10D", "KH", "1C"]);
