class SummerCamp{
    constructor(organaizer, location){  
        this.organaizer = organaizer;
        this.location = location;
        this.priceForTheCamp = {"child": 150, "student": 300, "collegian": 500};
        this.listOfParticipants = [];
    }

registerParticipant (name, condition, money){
    money = Number(money);
    if(Object.keys(this.priceForTheCamp).includes(condition) == false){
        throw new Error(`Unsuccessful registration at the camp.`);
    }else if(this.listOfParticipants.find(e => e.name === name)){
        return `The ${name} is already registered at the camp.`;
    }else if(money < this.priceForTheCamp[condition]){
        return `The money is not enough to pay the stay at the camp.`;
    }else {
        this.listOfParticipants.push({
            name,
            condition,
            'power':100,
            'wins': 0,
        });
        return `The ${name} was successfully registered.`;
    };
};

unregisterParticipant (name){
let found = this.listOfParticipants.find(e => e.name === name);
if(found == undefined){
    throw new Error(`The ${name} is not registered in the camp.`);
}else {
    this.listOfParticipants.splice(this.listOfParticipants.indexOf(found), 1);
    return `The ${name} removed successfully.`;
}
};

timeToPlay (typeOfGame, participant1, participant2){
if(typeOfGame === 'WaterBalloonFights'){
    let firstPlayer = this.listOfParticipants.find(e => e.name == participant1);
    let secondPlayer = this.listOfParticipants.find(e => e.name == participant2);

    if(firstPlayer == undefined || secondPlayer == undefined){
        throw new Error(`Invalid entered name/s.`);
    }else if(firstPlayer.condition != secondPlayer.condition){
        throw new Error(`Choose players with equal condition.`);
    }else {
        if(firstPlayer.power > secondPlayer.power){
            firstPlayer.wins += 1;
            return `The ${firstPlayer.name} is winner in the game ${typeOfGame}.`;
        }else if(firstPlayer.power < secondPlayer.power){
            secondPlayer.wins += 1;
            return `The ${secondPlayer.name} is winner in the game ${typeOfGame}.`;
        }else {
            return `There is no winner.`;
        }
    }

}else if(typeOfGame === 'Battleship'){
    let firstPlayer = this.listOfParticipants.find(e => e.name == participant1);
    if(firstPlayer){
        firstPlayer.power += 20;
        return `The ${firstPlayer.name} successfully completed the game ${typeOfGame}.`;
    }else {
        throw new Error(`Invalid entered name/s.`);
    }
}
};

toString() {
let resultArr = [`${this.organaizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`];

this.listOfParticipants = this.listOfParticipants.sort((a, b) => b.wins - a. wins);

for(let el of this.listOfParticipants){
    resultArr.push(`${el.name} - ${el.condition} - ${el.power} - ${el.wins}`);
}

return resultArr.join('\n');
}


}

const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
// console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));

console.log(summerCamp.toString());



