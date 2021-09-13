function solve(arrOfStr){
    let resource;
    let quantity;
    let mineObj = {};
    for(let i = 0; i < arrOfStr.length; i += 2){
        resource = arrOfStr[i]
        quantity = Number(arrOfStr[i + 1]);
       if(!Object.keys(mineObj).includes(resource)){
           mineObj[resource] = quantity
       }else if(Object.keys(mineObj).includes(resource)){
           mineObj[resource] += quantity
       }
    

    }

    for(let [key, value] of Object.entries(mineObj)){
        console.log(`${key} -> ${value}`);
    }


}
solve([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
    ]
    )