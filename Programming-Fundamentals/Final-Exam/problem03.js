function solve(input){
let capacity = Number(input.shift());
let actions = {
    'Add': addingInfo,
    'Message': messaging,
    'Empty': emptyTheSlot,
}
let messengerCatalog = {};

while(input[0] != 'Statistics'){
let tokens = input.shift().split('=');
let command = tokens.shift();
if(actions[command] != undefined){
    let action = actions[command];
    action(tokens)
}
}

let usersCount = Object.keys(messengerCatalog).length;
let sorted = Object.entries(messengerCatalog).sort(compare);
console.log(`Users count: ${usersCount}`);
// if(usersCount > 0){
//     for(let [name, tokens] of sorted){
//         console.log(`${name} - ${tokens.totalMessages}`);
//     }
// }
console.log(messengerCatalog);
function compare(a, b){
let receivedA = a[1].receivedMessages;
let receivedB = b[1].receivedMessages;

let nameA = a[0];
let nameB = b[0];
return (receivedB - receivedA) || (nameA.localeCompare(nameB))
}

function addingInfo([name, sentMessages, receivedMessages]){
sentMessages = Number(sentMessages);
receivedMessages = Number(receivedMessages);
if(messengerCatalog[name] == undefined){
    messengerCatalog[name] = {
        sentMessages,
        receivedMessages: receivedMessages
    }
    messengerCatalog[name].totalMessages = messengerCatalog[name].sentMessages + messengerCatalog[name].receivedMessages
}
}

function messaging([senderName, receiverName]){
if(messengerCatalog[senderName] != undefined && messengerCatalog[receiverName] != undefined){
    messengerCatalog[senderName].sentMessages++;
    messengerCatalog[senderName].totalMessages = messengerCatalog[senderName].sentMessages + messengerCatalog[senderName].receivedMessages
    messengerCatalog[receiverName].receivedMessages++;
    messengerCatalog[receiverName].totalMessages = messengerCatalog[receiverName].sentMessages + messengerCatalog[receiverName].receivedMessages
    if(messengerCatalog[senderName].totalMessages >= capacity){
        delete messengerCatalog[senderName];
        console.log(`${senderName} reached the capacity!`);
    }
    if(messengerCatalog[receiverName].totalMessages >= capacity){
        delete messengerCatalog[receiverName];
        console.log(`${receiverName} reached the capacity!`);
    }
}
}

function emptyTheSlot([name]){
if(name === 'All'){
    messengerCatalog = {}
}else if(messengerCatalog[name] != undefined){
    delete messengerCatalog[name];
}
}



}
solve(["10",
"Add=Berg=9=0",
"Add=Kevin=0=0",
"Add=Mark=5=4",
"Message=Berg=Mark",
"Statistics"])


