function tseamAccount(array){
let installedGames = [];
installedGames.push(array.shift())
let strOfinstalledGames = installedGames.toString()
let limit = strOfinstalledGames.length - 1;
let installedGamesAsSeparetedStrings = strOfinstalledGames.split(' ', limit)
let i = 0;

while(array[i] !== 'Play!'){
 let command = array[i]
let commandAsString = command.toString()
let stop = commandAsString.length - 1;
let commandAsSeparatedString = commandAsString.split(' ', stop);

if(commandAsSeparatedString[0] == 'Install'){
let game = commandAsSeparatedString[1];
if(installedGamesAsSeparetedStrings.includes(game)){
    i++
    continue;
}else{
    installedGamesAsSeparetedStrings.push(game)
}

}else if(commandAsSeparatedString[0] == 'Uninstall'){
let game = commandAsSeparatedString[1];
if(installedGamesAsSeparetedStrings.includes(game)){
    let neededIndex = installedGamesAsSeparetedStrings.indexOf(game);
    installedGamesAsSeparetedStrings.splice(neededIndex, 1)
}


}else if(commandAsSeparatedString[0] == 'Update'){
    let game = commandAsSeparatedString[1];
    if(installedGamesAsSeparetedStrings.includes(game)){
        let neededIndex = installedGamesAsSeparetedStrings.indexOf(game);
        installedGamesAsSeparetedStrings.splice(neededIndex, 1)
        installedGamesAsSeparetedStrings.push(game)
    }

}else if(commandAsSeparatedString[0] == 'Expansion'){
let game = commandAsSeparatedString[1].split('-');
if(installedGamesAsSeparetedStrings.includes(game[0])){
    let neededIndex = installedGamesAsSeparetedStrings.indexOf(game[0]);
    installedGamesAsSeparetedStrings.splice(neededIndex+1, 0, `${game[0]}:${game[1]}`)
}

}


i++
}

console.log(installedGamesAsSeparetedStrings.join(' '));

}
tseamAccount(['CS WoW Diablo ',
'Install LoL',
'Uninstall WoW',
'Update Diablo',
'Expansion CS-Go',
'Play!']
)