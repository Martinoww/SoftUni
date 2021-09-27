function calorieObj(arrOfStr){
let result = {};
for(let i = 0; i < arrOfStr.length; i += 2){
result[arrOfStr[i]] = Number(arrOfStr[i + 1]);
}
 console.log(result);
}
calorieObj(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])