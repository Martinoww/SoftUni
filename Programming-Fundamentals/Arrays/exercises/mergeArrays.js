function mergeArrays(array1, array2){
let array3 = [];

for(let i = 0; i < array1.length; i++){
if(i % 2 === 0){
    let sum = Number(array1[i]) + Number(array2[i])
    array3.push(sum)
}else{
    array3.push(array1[i] + array2[i])
}


}
console.log(array3.join(' - '))

}
mergeArrays(['13', '12312', '5', '77', '4'],
['22', '333', '5', '122', '44']

)