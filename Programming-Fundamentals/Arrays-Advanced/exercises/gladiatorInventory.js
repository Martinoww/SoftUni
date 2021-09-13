function gladiatorInventory(arr){
let inventory = arr.shift().toString().split(' ');

for(let i = 0; i < arr.length; i++){
let command = arr[i].toString().split(' ')

if(command[0] === 'Buy'){
 if(!inventory.includes(command[1])){
     inventory.push(command[1])
 }
}else if(command[0] === 'Trash'){
    if(inventory.includes(command[1])){
        inventory.splice(inventory.indexOf(command[1]), 1)
    }
}else if(command[0] === 'Repair'){
    if(inventory.includes(command[1])){
        inventory.splice(inventory.indexOf(command[1]), 1)
        inventory.push(command[1])
    }
}else if(command[0] === 'Upgrade'){
    let splitedCommand = command[1].toString().split('-');
    let weapon = splitedCommand[0];
    let wantedUpgrade = splitedCommand[1];
    if(inventory.includes(weapon)){
        let concatUpgrade = `${weapon}:${wantedUpgrade}`
        inventory.splice(inventory.indexOf(weapon) + 1, 0, concatUpgrade)
      
    }
}

}


console.log(inventory.join(' '));

}
gladiatorInventory([
'SWORD Shield Spear',
'Trash Bow',
'Repair Shield',
'Upgrade Helmet-V'
])