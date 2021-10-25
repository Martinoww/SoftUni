function playingCards(face, suit){
let validFaces = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];
let suits = {
    "S":'\u2660',
    "H":'\u2665',
    "D":'\u2666',
    "C":'\u2663'
};

if(validFaces.includes(face) && Object.keys(suits).includes(suit)){
    return {
        face,
        suit:suits[suit],
        toString (){     
        return this.face + this.suit;
        }
    }
}else {
    throw new Error(`Error`);
}

}
const newVariable = playingCards('A', 'S');
console.log(newVariable.toString());
console.log(playingCards('10', 'H').toString());
console.log(playingCards('1', 'C').toString());
console.log(playingCards('A', 'F').toString());
