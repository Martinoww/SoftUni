function equalSums(array){
let isEqual = false
if(array.length === 1){
    console.log('0')
    return;
}
    for(let a = 0; a < array.length; a++){
    let leftSum = 0;
    let rightSum = 0
    for(let b = a + 1; b < array.length; b++){
        rightSum += Number(array[b])    
    }
    for(let c = a - 1; c >= 0; c--){
     leftSum += Number(array[c])
    }
if(leftSum === rightSum){
    console.log(a);
    isEqual = true
    break;
}
    }
    if(!isEqual){
        console.log('no');
    }
    
}
equalSums([10])