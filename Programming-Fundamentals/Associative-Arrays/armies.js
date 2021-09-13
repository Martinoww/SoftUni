function solve(arrOfStr) {
let armiesObj = {};
let leaderName;     
let splitedLine;
for(let line of arrOfStr){
    if(line.split(' ').includes('arrives')){
        splitedLine = line.split(' ')
        splitedLine.pop()
        leaderName = splitedLine.join(' ')
        armiesObj[leaderName] = {};
    } else if(!line.split(' ').includes('+') && !line.split(' ').includes('defeated')){
        splitedLine = line.split(': ');
        leaderName = splitedLine.shift();
        let [armyName, armyQuantity] = splitedLine.toString().split(', ')
        if(Object.keys(armiesObj).includes(leaderName)){
            armiesObj[leaderName][armyName] = Number(armyQuantity);
        }
    }else if(line.split(' ').includes('+')){
        splitedLine = line.split(' + ');
        let [armyName, armyQuantity] =  splitedLine
        for(let [key, value] of Object.entries(armiesObj)){
            for(let [name, qntity] of Object.entries(value)){
                if(name === armyName){
                    armiesObj[key][name] += Number(armyQuantity);
                }
            }
        }
    }else if(line.split(' ').includes('defeated')){
        splitedLine = line.split(' ');
        splitedLine.pop();
       leaderName = splitedLine.join(' ');
       if(Object.keys(armiesObj).includes(leaderName)){
           delete armiesObj[leaderName];
       }
    }
    
}

for(let [key, value] of Object.entries(armiesObj)){
    let total = 0;
    for(let token of Object.values(value)){
        total += token
    }
    armiesObj[key]['totalQtity'] = total;
}

for(let [key, value] of Object.entries(armiesObj)){
    sorted = Object.entries(value).sort((a, b) => b[1] - a[1]);
}
let sorted;
    
console.log(armiesObj.sort(sortByTotal));


}
solve([
  "Rick Burr arrives",
  "Fergus: Wexamp, 30245",
  "Rick Burr: Juard, 50000",
  "Findlay arrives",
  "Findlay: Britox, 34540",
  "Wexamp + 6000",
  "Juard + 1350",
  "Britox + 4500",
  "Porter arrives",
  "Porter: Legion, 55000",
  "Legion + 302",
  "Rick Burr defeated",
  "Porter: Retix, 3205",
]);
