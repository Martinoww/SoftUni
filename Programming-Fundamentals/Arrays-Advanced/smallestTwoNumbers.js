function smallestTwoNumbers(arr){
let sortedArr = arr.sort((a, b) => a - b)
let finalCouple = sortedArr.slice(0, 2)
console.log(finalCouple.join(' '));
}
smallestTwoNumbers([30, 15, 50, 5])