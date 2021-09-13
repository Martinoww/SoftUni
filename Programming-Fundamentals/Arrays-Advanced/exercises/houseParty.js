function houseParty(arr) {
  let joinedArr = arr.join("");
  let separatedStr = joinedArr.toString().split("!");
  let newList = [];
 for(let i = 0; i < separatedStr.length; i++){
let currSentence = separatedStr[i].toString().split(' ')
let name = currSentence.shift();
let restOfTheSentence = currSentence.join(' ')

if(restOfTheSentence === 'is going'){
if(!newList.includes(name)){
newList.push(name)
}else{
  console.log(`${name} is already in the list!`);
}
}else if(restOfTheSentence === 'is not going'){
if(newList.includes(name)){
  newList.splice(newList.indexOf(name), 1);
}else{
  console.log(`${name} is not in the list!`);
}
}

 }
console.log(newList.join('\n'));
}
houseParty([
'Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!'
]);
