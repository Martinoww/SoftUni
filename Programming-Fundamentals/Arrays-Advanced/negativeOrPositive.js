function negativeOrPositive(arr){
 let result = []

for(let element of arr){
    if(Number(element) < 0){
        result.unshift(element)
    }else{
        result.push(element)
    }
}
console.log(result.join('\n'));
}
negativeOrPositive([7, -2, 8, 9])