function phoneStore(input){
let listOfPhones = input.shift().split(', ');

for(let line of input){
if(line === 'End'){
console.log(listOfPhones.join(', '));
return;
}
let splitedLine = line.split(' - ');
let command = splitedLine.shift()
let phone = splitedLine.shift()

if(command === 'Add'){
    if(!listOfPhones.includes(phone)){
        listOfPhones.push(phone);
    }
}else if(command === 'Remove'){
    if(listOfPhones.includes(phone)){
    listOfPhones.splice(listOfPhones.indexOf(phone), 1)
    }
}else if(command === 'Bonus phone'){
    let splitedPhones = phone.split(':');
    let [oldPhone, newPhone] = splitedPhones;
    if(listOfPhones.includes(oldPhone)){
        listOfPhones.splice(listOfPhones.indexOf(oldPhone) + 1, 0, newPhone);
    }
}else if(command === 'Last'){
    if(listOfPhones.includes(phone)){
        listOfPhones.push(listOfPhones.splice(listOfPhones.indexOf(phone), 1).toString())
    }
}
}


}
phoneStore(['SamsungA50, MotorolaG5, IphoneSE',
'Add - Iphone10',
'Remove - IphoneSE',
// 'Bonus phone - SamsungA50:Iphone8',
// 'Last - SamsungA50',
'End'])