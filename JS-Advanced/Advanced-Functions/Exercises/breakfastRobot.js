function solution() {
    let recipies = {
        apple:{carbohydrate: 1, flavour: 2},
        lemonade:{carbohydrate: 10, flavour: 20},
        burger: {carbohydrate: 5, fat: 7, flavour:3},
        eggs: {protein: 5, fat:1, flavour:1},
        turkey: {protein: 10, carbohydrate: 10, fat: 10, flavour: 10}
    };
    
let storage = {
protein:0,
carbohydrate:0,
fat:0,
flavour:0};

 function restock(el, qtity){
     storage[el] += qtity
     return `Success`;
 }       

 function report(){
    let resultStr = ``;
    for(let prop in storage){
        resultStr += `${prop}=${storage[prop]} `
    }
    return resultStr.trim();
 }

function prepare(el, qtity){
let usedIngredients = {};

for(let prop in recipies[el]){
   let usage = storage[prop] - recipies[el][prop] * qtity;
   if(usage < 0){
       return `Error: not enough ${prop} in stock`;
   }else {
       usedIngredients[prop] = usage;
   }
}
Object.assign(storage, usedIngredients);
return `Success`;
}

function control(str) {
  let stringOfData = str;
  let [command, element, qtity] = stringOfData.split(" ");
  qtity = Number(qtity);
  if(command === 'restock'){
    return  restock(element, qtity);
  }else if (command === 'report'){
      return report();
  } else if (command === 'prepare'){
      return prepare(element, qtity);
  }
    }
    return control;
}
let manager = solution();
console.log(manager('restock flavour 50 ')); 
console.log(manager("prepare lemonade 4 ")); 
console.log(manager("restock carbohydrate 10")); 
console.log(manager("restock flavour 10")); 
console.log(manager("prepare apple 1")); 
console.log(manager("restock fat 10")); 
console.log(manager("prepare burger 1")); 
console.log(manager("report")); 
// console.log(manager("prepare turkey 1"));
// console.log(manager("report"));