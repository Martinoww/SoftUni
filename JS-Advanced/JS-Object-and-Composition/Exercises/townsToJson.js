function townsToJson(arrOfStr){
let splited = arrOfStr.shift().split(' | ');
let keyTown = splited[0].slice(2);
let keyLatitude = splited[1];
let keyLongitude = splited[2].slice(0, -2)
let arrOfObj = [];

for(let line of arrOfStr){
    splited = line.split(' | ');;
    let townName = splited[0].slice(2);
    let townLatitude = splited[1];
    let townLongitude = splited[2].slice(0, -2)
    const townObj = {};
    townObj[keyTown] = townName;
    townObj[keyLatitude] = Number(Number(townLatitude).toFixed(2))
    townObj[keyLongitude] = Number(Number(townLongitude).toFixed(2))
    arrOfObj.push(townObj);
}

return JSON.stringify(arrOfObj);
}
console.log(townsToJson(['| Town | Latitude | Longitude |',
'| Veliko Turnovo | 43.0757 | 25.6172 |',
'| Monatevideo | 34.50 | 56.11 |']

)); 