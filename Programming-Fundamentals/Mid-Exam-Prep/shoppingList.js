function solve(list){
let groceries = list.shift().split('!')
// console.log(groceries.join(', '));
for(let line of list){
if(line === 'Go Shopping!'){
    break;
}
let [command, item, newItem] = line.split(' ');

switch (command) {
case 'Urgent' : 
urgent(groceries, item)
break;
case 'Unnecessary' : 
unnecessary(groceries, item)
break;
case 'Correct' : 
correct(groceries, item, newItem)
break;
case 'Rearrange' : 
rearrange(groceries, item)
break;
}


}

console.log(groceries.join(', '));

function urgent(list, item){
    if(!list.includes(item)){
        list.unshift(item)
    }
}

function unnecessary(list, item){
    if(list.includes(item)){
    let index = list.indexOf(item);
    list.splice(index, 1);
    }
}

function correct(list, item, newItem){
    if(list.includes(item)){
        let index = list.indexOf(item);
        list.splice(index, 1, newItem);
        }
}

function rearrange(list, item){
    if(list.includes(item)){
        let index = list.indexOf(item);
        list.push(list.splice(index, 1));
        }
}
}
solve(['Milk!Pepper!Salt!Water!Banana',
    'Urgent Wine',
    'Unnecessary Banana ',
    'Correct Pepper Onion',
    'Rearrange Milk',
    'Correct Salt Potatoes',
    'Go Shopping!'])