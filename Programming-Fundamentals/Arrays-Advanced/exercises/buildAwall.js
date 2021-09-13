function buildAWall(arr){
let concretePerDay = [];
let totalConcrete = 0;

while(arr.length !== 0){
if(arr.includes(30)){
let rotations = arr.length;
for(let i = 0; i < rotations; i++){
    if(arr[i] == 30){
        arr.splice(i, 1)
        i--
    }
}
}
if(arr.length == 0){
    break;
}
for(let i = 0; i < arr.length; i++){
arr[i] += 1
totalConcrete += 195
}
let concreteForOneDay = arr.length * 195;
concretePerDay.push(concreteForOneDay);

}
console.log(concretePerDay.join(', '));
console.log(`${totalConcrete * 1900} pesos`);

}
buildAWall([17])