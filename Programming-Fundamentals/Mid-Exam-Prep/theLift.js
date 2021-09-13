function solve(input){
let numOfPeople = Number(input.shift());
let cabins = input.toString().split(' ').map(Number);
if(numOfPeople === 0){
    console.log(`The lift has empty spots!`);
    console.log(cabins.join(' '));
    return;
}
let maxCapacityPerCabin = 4;

for(let i = 0; i < cabins.length; i++){

for(let j = 0; j < maxCapacityPerCabin; j++){
    if(cabins[i] == 4){
        break;
    }
    if(numOfPeople > 0){
    cabins[i] += 1
    numOfPeople--
    }else{
    console.log(`The lift has empty spots!`);
    console.log(cabins.join(' '));
    return;
    }
}
}

if(numOfPeople > 0){
    console.log(`There isn't enough space! ${numOfPeople} people in a queue!`);
    console.log(cabins.join(' '));
}else {
    console.log(cabins.join(' '));
}


}
solve([
    "20",
    "0 4 0"
   ]
   
   )