function solve(arrOfStr){
    let guestsObj = {
        vip: [],
        regular: [],
    }
    let name = arrOfStr.shift();
    
    while(name !== 'PARTY'){
        let char = name[0];
        if(isNaN(char)){
            guestsObj.regular.push(name)
        }else {
            guestsObj.vip.push(name)
        }
        name = arrOfStr.shift();
    }
    
    arrOfStr.forEach(guest => {
        if(guestsObj.vip.includes(guest)){
            let index = guestsObj.vip.indexOf(guest);
            guestsObj.vip.splice(index, 1);
        }else if (guestsObj.regular.includes(guest)){
            let index = guestsObj.regular.indexOf(guest);
            guestsObj.regular.splice(index, 1);
        }
    });
    console.log(guestsObj.vip.length + guestsObj.regular.length);
    console.log(`${guestsObj.vip.join('\n')}\n${guestsObj.regular.join('\n')}`);
    
    }
    solve(['7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'SVQasdfCbc',
    
    ])