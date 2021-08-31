function solve(input) {
let nameOfSeries = input[0]
let episodeDurration = Number(input[1]);
let breakDurration = Number(input[2]);
let timeForLunch = breakDurration / 8;
let timeForRelax = breakDurration / 4;
let timeLeft = breakDurration - timeForLunch - timeForRelax;
if(timeLeft >= episodeDurration){
    let freeTime = timeLeft - episodeDurration;
console.log(`You have enough time to watch ${nameOfSeries} and left with ${Math.ceil(freeTime)} minutes free time.`)
}else{
    let neededTime = episodeDurration - timeLeft
    console.log(`You don't have enough time to watch ${nameOfSeries}, you need ${Math.ceil(neededTime)} more minutes.`)
}


}
solve(["Teen Wolf", "48", "60"]);
