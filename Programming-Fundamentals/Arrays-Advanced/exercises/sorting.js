function sorting(arrOfNumbers){
let convertedArr = arrOfNumbers.map(Number)
let rotations = convertedArr.length;
let newList = []

for(let i = 0; i < rotations; i++){
if(i % 2 === 0){
    let biggestNum = Math.max(...convertedArr);
    newList.push(biggestNum);
    convertedArr.splice(convertedArr.indexOf(biggestNum), 1);
}else{
let smallestNum = Math.min(...convertedArr);
newList.push(smallestNum)
convertedArr.splice(convertedArr.indexOf(smallestNum), 1)
}


}
console.log(newList.join(' '));

}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])