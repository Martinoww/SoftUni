function maxNumber(array){
let topNumbers = [];
let isTopInteger = true;
for(let i = 0; i < array.length; i++){
    let currentNumber = Number(array[i]);
    for(let j = i + 1; j < array.length; j++){
        let secondNumber = Number(array[j]);
        if(currentNumber <= secondNumber){
            isTopInteger = false
        break;
    }else{
        isTopInteger = true
    }
}
if(isTopInteger){
    topNumbers.push(currentNumber)
}else if(i == array.length - 1){
    topNumbers.push(currentNumber)
}
}
console.log(topNumbers.join(' '));

}
maxNumber([27, 19, 42, 2, 13, 45, 48])