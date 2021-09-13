function reverseAnArrayOfNUmbers(num, array){
let newArray = [];

for(let i = 0; i < num; i++){
newArray.push(array[i]) 
}

let reversedArray = []
for(let j = newArray.length - 1; j >= 0; j--){

reversedArray.push(newArray[j])
}
console.log(reversedArray.join(' '));
}
reverseAnArrayOfNUmbers(3, [10, 20, 30, 40, 50])
console.log(`======`);
reverseAnArrayOfNUmbers(4, [-1, 20, 99, 5])
console.log(`======`);
reverseAnArrayOfNUmbers(2, [66, 43, 75, 89, 47])
console.log(`======`);
